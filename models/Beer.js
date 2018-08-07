const mongoose = require('mongoose');
const { Schema }  = mongoose;

const BeerSchema = new Schema({
  _id: Number,
  beerName: String,
  breweryName: String,
  Style: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Beer = mongoose.model('Beer', BeerSchema);

module.exports ={
  Beer
};