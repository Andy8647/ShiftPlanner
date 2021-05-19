/* This module will hold our connection to
   our mongo server through the Mongoose API.
   We will access the connection in our express server. */
const mongoose = require('mongoose')

/* Connnect to our database */
// Get the URI of the local database, or the one specified on deployment.
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@shiftplanner.1cas2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
 //const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

module.exports = { mongoose }  // Export the active connection.
