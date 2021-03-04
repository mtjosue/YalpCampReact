// const mongoose = require('mongoose');
const Campground = require('../db/models/Campground');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');
// const connectDB = require('../db/db');

// connectDB();

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  // await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = await Campground.create({
      title: `${sample(descriptors)} ${sample(places)}`,
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
    });
    await camp.save();
  }
};

seedDB();
