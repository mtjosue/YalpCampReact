const mongoose = require('mongoose');

const connectDB = async uri => {
  const connection = await mongoose.connect(process.env.MONGO_CONNECTION_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log(`mongodb connected: ${connection.connection.host}`);
};

module.exports = connectDB;
