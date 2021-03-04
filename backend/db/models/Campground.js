const mongoose = require('mongoose');
// const { mainModule } = require('process');

const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

const Campground = mongoose.model('Campground', CampgroundSchema);
module.exports = Campground;
