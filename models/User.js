const mongoose = require('mongoose');
const { Schema }  = mongoose;

const userSchema = new Schema({
  googleId: String,
  userInfo: {
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    town: String,
    state: String,
    zipCode: String
  },
  userBeers: []
});

mongoose.model('users', userSchema);
