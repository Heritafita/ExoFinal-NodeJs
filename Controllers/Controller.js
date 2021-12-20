//Import todo model

var mysql = require("mysql");
const { application } = require('express');
const cartList = require('../Models/cartModel');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'exofinal'
});
connection.connect(function(error) { if (error) console.log(error); })

let express = require('express');
let app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());


let session = require('express-session');
app.use(session({
    secret: 'long_string_which_is_hard_to_crack', //génér un clé unique
    resave: false, //eviter de recréer nouvelle session
    saveUninitialized: true // ne pas effacer la session quand on quitte
}));

let cart = [];
var g = "mhagaga";

exports.formationList = function(req, res) {
    connection.query("select * from formation;", function(error, result) {
        if (error) console.log(error);
        res.render('formationList.ejs', { formation: result, greeting: '' });
    });

};

exports.login = function(req, res) {
    res.render('login.ejs', { connect: "" });
};

exports.createSession = function(req, res) {
    req.session.user = req.body.pseudo;
    //prompt('Hello ' + req.session.pseudo);
    //req.session.user = a;
    res.redirect('/');
};

// exports.subscribe = function(req, res) {
//     let id = req.params.id;
//     let nom = req.body.nom;
//     let prix = req.body.prix;
//     let debut = req.body.debut;
//     let fin = req.body.fin;
//     let elem = new formation(id, nom, prix, debut, fin)
//     cart.push(elem);
//     res.redirect('/viewCart');
// };

exports.subscribe = function(req, res) {
    cart.push(req.params.i);
    console.log('push' + req.params.i);
    res.redirect('/viewCart');
};


exports.viewCart = function(req, res) {
    connection.query("select * from formation;", function(error, result) {
        if (error) console.log(error);
        res.render('cart.ejs', { formation: result, cart: cart });
    });
};



exports.delete = function(req, res) {
    for (var k = 0; k < cart.length; k++) {
        if (cart[k] == req.params.i) {
            cart.splice(k, 1);
            console.log('remove' + req.params.i);
        }
        res.redirect('/viewCart');
    }
};

exports.Finalize = function(req, res) {
    if (g = '') {
        res.render('login.ejs', { connect: "Commencez par vous connecter" });
    } else {
        // var order = new cartList(cart, g);
        // var toSave = order.toOneArray();
        var pseudos = [];
        for (let b = 0; b < cart.length; b++) {
            pseudos.push(g);
            console.log('append pseudos' + g)
        }
        console.log(pseudos);
        var toOneArray = function(cart, pseudos) {
            return cart.map(function(elem, j) {
                return [elem, pseudos[j]]
            });
        }

        connection.query("INSERT INTO subscription(formationID, pseudo) VALUES? ", [toOneArray(cart, pseudos)], function(err, result) {
            //connection.query("INSERT INTO subscription(formationID, pseudo) VALUES? ", [toSave(cart, pseudos)], function(err, result) {
            if (err) console.log(err);
            cart = [];
            res.send('Votre inscription a été bien enregistré');
        });
    }
}


exports.logout = function(req, res) {
    req.session.destroy();
    res.send('Logout succes');

}

// exports.userNew = function(req, res) {
//     let iduser = req.body.iduser;
//     let lastname = req.body.lastname;
//     let firstname = req.body.firstname;

//     if (iduser >= 0) {
//         userList[iduser]["lastname"] = lastname;
//         userList[iduser]["firstname"] = firstname;
//     } else {
//         let user = new User(lastname, firstname);
//         userList.push(user);
//     }
//     res.redirect('/user');
// }

// exports.userShow = function(req, res) {
//     let iduser = req.params.iduser;
//     res.send('Hello' + userList[iduser]["firstname"]);
// }
// exports.userUpdate = function(req, res) {
//     console.log("MAJ")
//     let iduser = req.params.iduser;
//     res.render('userAdd.ejs', { iduser: iduser, lastname: userList[iduser]["lastname"], firstname: userList[iduser]["firstname"] });
// };
// exports.userSave = function(req, res) {
//     // SAVE
// };
// exports.userRemove = function(req, res) {
//     let iduser = req.params.iduser;
//     userList.splice(iduser, 1);
//     res.redirect('/user');
// };