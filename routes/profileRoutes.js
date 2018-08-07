// const _ = require('lodash');
// const Path = require('path-parser');
// const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('User');


module.exports = app => {
  app.post('/api/profile/update', requireLogin, async (req, res) => {

    //deconstructs request body
    const { userName, firstName, lastName, email, town, state, zipCode } = req.body;
    //searches for user by id
    const query = {_id : req.user._id};

    //new user profile info Object
    const newUserInfo = {
      userName,
      firstName,
      lastName,
      email,
      town,
      state,
      zipCode
    };

    //sends info to database for update and returns response to client
    const result = await User.findOneAndUpdate(
      query, { $set: {userInfo: newUserInfo}}, {new: true}, function (err, response){
        if (err) {
          return err
        }
      return response
      });

    console.log(result);
    res.send(result)
  })

};