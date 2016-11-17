
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var locationSchema = new mongoose.Schema({
    entity: String,
    entitytype: String,
    latitude: String,
    longitude: String,
    time: Number
});

// Return model
module.exports = restful.model('Locations', locationSchema);