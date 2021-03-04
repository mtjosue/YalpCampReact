// import express from 'express';
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const connectDB = require('./db/db');

//Connecting to database
connectDB();

console.log(process.env.MONGO_CONNECTION_URI);

//Body Parsers
app.set(express.urlencoded({ extended: true }));
app.use(express.json());

//'cors' middleware (For others to access this server/port)
//Allows access for restricted route from outside of this pc.
//cross orgin resource sharing.
app.use(cors({ origin: `http://localhost:${PORT}`, credentials: true }));

//Campgrounds route
app.use('/api/v1', require('./api'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
