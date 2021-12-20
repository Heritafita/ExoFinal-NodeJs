//Import express
let express = require('express');
// Initialize the app
let app = express();
app.use(express.urlencoded({ extended: true }));

let session = require('express-session');
app.use(session(

    {
        secret: 'pseudo',
        resave: false,
        saveUninitialized: true
    }
));

let router = require('./Routes');
app.use('/', router);
app.use(express.static('public'));





app.listen(60834, function() {
    console.log('Running on port 60834');
})