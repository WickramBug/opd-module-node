/**
 * Created by Piratheepan on 30/06/2017.
 */

'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const allergyModel = mongoose.model('Allergy');


const Router = express.Router();

Router.post('/', (req, res) => {
    const allergy = new allergyModel(req.body);
    allergy.save().then(allergy => {
        res.json(allergy);
        console.log("saved")
    }).catch(err => {
        console.error(err);

        res.sendStatus(500);
    });
});

Router.get('/', (req, res) => {
    console.log("get received");
    allergyModel.find().exec().then(allergies => {
        res.json(allergies);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
module.exports = Router;
