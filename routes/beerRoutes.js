const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('User');
const Beer = mongoose.model('Beer');


module.exports = app => {

  //returns the beers of the current logged in user
  app.get('/api/current_user/beer', requireLogin, async (req, res) => {
    const user = await User.findOne({_id: req.user._id}).populate('userBeers');
    console.log(user.userBeers);
    res.send(user.userBeers)
  });

  //adds new beer to database
  app.post('/api/current_user/beer/add', requireLogin, async (req, res) => {

    //deconstructs request body
    const { beerName, beerStyle } = req.body;

    //creates new beer and inserts into beers database with user id ref
    const newBeer = await new Beer({
      beerName,
      beerStyle,
      createdBy : req.user._id
    }).save();

    //sends new beer Objectid ref to user to user's beers
    const result = await User.findOneAndUpdate(
      { _id : req.user._id },
      { $push: {userBeers: newBeer._id} },
      { upsert: true, new: true }
    );
    //sends updated user beer list to client
    res.send(result.userBeers)
  });

  app.delete('/api/current_user/beer/delete', requireLogin, async (req, res) => {
    const { beerId } = req.body;

    //deletes beer from beers collection
    const result = await Beer.findOneAndRemove(
      { _id: beerId},
      async (err, res) => {
        if (err) throw err;
        return res
      }
    );
    //deletes user reference to beerId
    const deleteRef = await User.update(
      { 'userBeers' : beerId },
      { '$pull' : {'userBeers' : beerId } },
      async (err, res) => {
        if (err) throw err;
        return res;
      }
    );
    //sends updated user beers

    //TODO fix so that does not send the incorrect data over
    console.log(deleteRef.userBeers);
    res.send(deleteRef.userBeers)
  })
};