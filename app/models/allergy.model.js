/**
 * Created by Piratheepan on 29/06/2017.
 */

'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AllergySchema = new Schema({

    HIN: {
        type: String,
        required: true
    },

    allergy: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
        unique: true
    },

});

module.exports=mongoose.model('Allergy', AllergySchema);



