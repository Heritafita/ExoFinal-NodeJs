//Import express
let express = require('express');
// Initialize the app
let app = express();
app.use(express.urlencoded({ extended: true }));
let router = require('./Routes');
app.use('/', router);
app.use(express.static('public'));




app.listen(8200, function() {
    console.log('Running on port 8200');
})