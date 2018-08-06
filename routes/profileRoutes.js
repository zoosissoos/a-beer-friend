const _ = require('lodash');
// const Path = require('path-parser');
// const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('users');


module.exports = app => {
  app.post('/api/profile/update', requireLogin, async (req, res) => {
    const { userName, firstName, lastName, email, town, state, zipCode } = req.body;
    const query = {_id : req.user._id};
    const newUserInfo = {
      userName,
      firstName,
      lastName,
      email,
      town,
      state,
      zipCode
    };

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