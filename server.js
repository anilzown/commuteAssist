
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session      = require('express-session');

// MongoDB
var database = require('./config/database.js'); // load the database config
// mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/products-demo');
//mongoose.connect('mongodb://ec2-174-129-66-110.compute-1.amazonaws.com/products-demo');
// mongoose.connection.on('error', function(){});
mongoose.connect(database.localUrl); // Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)


require('./config/passport')(passport); // pass passport for configuration

// Express
var app = express();
app.use(express.static(__dirname + '/public'));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// required for passport
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true					
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



// routes ======================================================================
app.use('/api', require('./routes/api'));

// Start server
var port = 8081
, ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port, function() {
  console.log('Express server listening on %d', port);
});
