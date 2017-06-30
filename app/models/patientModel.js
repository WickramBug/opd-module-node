'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({

    HIN: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    civilStatus: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        unique: true,
        //required: true
    },
    passport: {
        type: String,
        unique: true,
        // required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    citizenship: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    emergencyContact: {
        type: String,

    },
    emergencyNo: {
        type: Number,

    }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;