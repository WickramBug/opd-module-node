'use strict';

// Adding Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Creating the Express Application
const app = express();

// Replacing Mongoose Promise
mongoose.Promise = global.Promise;

// Requiring Models
require('./app/models/user.model');
require('./app/models/patientModel.js');

// Requiring Routers
const UserRouter = require('./app/routes/user.route');
const PatientRouter = require('./app/routes/patient.Route.js');

// Enabling CORS Support
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Requiring the DB Configuration File
const db = require('./config/db');

// Setting the PORT
const port = process.env.PORT || 7070;



// Connecting to DB
mongoose.connect(db.url, err => {
    if (err) {
        console.log('Unable to connect to MongoDB');
        console.log(err);
    }
    console.log('Successfully connected to MongoDB');
});

// Using dependent functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Returning for Root Request

// Returning other Requests
app.use('/api/users', UserRouter);
app.use('/patient', PatientRouter);

// Create Server and Listen for Requests
app.listen(port, err => {
    if (err) {
        console.log('Error listening on port ' + port);
        return;
    }
    console.log('Accepting Requests on ' + port);
});