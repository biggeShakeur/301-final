'use strict';
// Proof of Life
console.log('301 Final Project Server')



// REQUIRES
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const axios = require('axios');
// bring in mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

// BRING IN SCHEMA to interact with the model.
const Maps = require('./models/trip')
const { response, request } = require('express');

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


// implement express
const app = express();

// middleware
app.use(cors());

// If we want to receive JSON data from a request, we need this:
app.use(express.json());
const PORT = process.env.PORT || 3002





// ROUTES
// These are our 'endpoints'
app.get('/trip', getTrip);

async function getTrip (request, response, next) {
  try {
    let results = await Maps.find();
    response.status(200).send(results);
  }catch(err){
    next(err);
  }
}

// This function will 'get' data from the api database. 
// 



app.get('/', (request, response) => {
  response.send('This is the response from your server 3001')
})



//at the bottom of all of our routes

app.get('*', (request, response) => {
  response.send('Check your URL. The one you entered is incorrect.');
})




// Errors
// Handle any errors.

// LISTEN: Start the server
// Listen is an Express method that takes in a Port value and a callback function
app.listen(PORT, () => console.log(`Listening on ${PORT}`))