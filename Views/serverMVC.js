//Import express
let express = require('express');
// Initialize the app
let app = express();
app.use(express.urlencoded({ extended: true }));
let router = require('./Routes');
app.use('/', router);
app.use(express.static('public'));

let session = require('express-session');
app.use(session({
    secret: 'long_string_which_is_hard_to_crack', //génér un clé unique
    resave: false, //eviter de recréer nouvelle session
    saveUninitialized: true // ne pas effacer la session quand on quitte
}));



app.listen(8200, function() {
    console.log('Running on port 8200');
})