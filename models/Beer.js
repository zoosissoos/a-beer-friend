const mongoose = require('mongoose');
const { Schema }  = mongoose;

const BeerSchema = new Schema({
  beerName: String,
  beerStyle: String,
  createdOn: { type: Date, default: Date.now },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Beer = mongoose.model('Beer', BeerSchema);

module.exports ={
  Beer
};