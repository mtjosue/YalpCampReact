// const mongoose = require('mongoose');
const Campground = require('../db/models/Campground');
const cities = require('./cities');
const connectDB = require('../db/db');
const mongoose = require('mongoose');
const { descriptors, places } = require('./seedHelpers');

connectDB();

const seedData = async () => {
  await Campground.deleteMany();

  const sample = array => array[Math.floor(Math.random() * array.length)];

  const batch = cities.slice(0, 50).map((city, idx) => {
    const random1000 = Math.floor(Math.random() * 1000);

    return {
      title: `${sample(descriptors)} ${sample(places)}`,
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
    };
  });

  // for (let i = 0; i < 50; i++) {
  //   const random1000 = Math.floor(Math.random() * 1000);
  //   const camp = await Campground.create({
  //     title: `${sample(descriptors)} ${sample(places)}`,
  //     location: `${cities[random1000].city}, ${cities[random1000].state}`,
  //   });

  try {
    const camp = await Campground.collection.insertMany(batch);
    console.log('Dummy Data Seeded Successfully: ', camp);
  } catch (err) {
    console.log('err:', err);
  }
};

(async () => {
  await seedData();
  mongoose.disconnect();
})();
