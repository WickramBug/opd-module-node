/**
 * Created by Piratheepan on 30/06/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExaminationSchema = new Schema({
    date:{type:String, required: true},
    weight: { type:String, required: true},
    height: { type:String, required: true},
    pressure:{type:String,required: true,},
    temperature:{type:String,required:true},

});

module.exports = mongoose.model('examination',ExaminationSchema);



