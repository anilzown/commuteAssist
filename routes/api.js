
// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Product = require('../models/product');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// Location
var Location = require('../models/location');
Location.methods(['get', 'put', 'post', 'delete']);
Location.register(router, '/locations');

// Location
// var User = require('../models/user');
// User.methods(['get', 'put', 'post', 'delete']);
// User.register(router, '/users');

// Return router
module.exports = router;
