var mongoose = require('mongoose');
var Schema=mongoose.Schema;

let Crud = new Schema({
    name: {
        type: String },
    email:{
        type:String},
    age: {
        type:Number}
},{
    collection: 'cruds'
});

module.exports = mongoose.model('Crud',Crud);