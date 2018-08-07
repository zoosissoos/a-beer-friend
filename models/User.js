const mongoose = require('mongoose');
const { Schema }  = mongoose;

const UserSchema = new Schema({
  googleId: String,
  userInfo: {
    userName: { type: String, default: null },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, default: null },
    town: { type: String, default: null },
    state: { type: String, default: null },
    zipCode: { type: String, default: null }
  },
  userBeers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Beer'
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports ={
  User
};