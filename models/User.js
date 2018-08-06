const mongoose = require('mongoose');
const { Schema }  = mongoose;

const userSchema = new Schema({
  googleId: String,
  userInfo: {
    type: {
      userName: String,
      firstName: String,
      lastName: String,
      email: String,
      town: String,
      state: String,
      zipCode: String
    }, default : null
  },
  userBeers: []
});

mongoose.model('users', userSchema);