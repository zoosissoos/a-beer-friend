const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('User');
const Beer = mongoose.model('Beer');


module.exports = app => {

  //returns the beers of the current logged in user
  app.get('/api/current_user/beer', requireLogin, async (req, res) => {
    const result = await User.findById(req.user._id).populate('userBeers');

    console.log(result.userBeers);
    res.send(result.userBeers)
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
    console.log(result);
    res.send(result)
  })
};