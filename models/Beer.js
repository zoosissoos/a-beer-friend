const mongoose = require('mongoose');
const { Schema }  = mongoose;

const userSchema = new Schema({
  _id: Number,
  beerName: String,
  breweryName: String,
  Style: String
});

mongoose.model('beers', userSchema);