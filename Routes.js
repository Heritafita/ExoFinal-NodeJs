// Get an instance of the express Router and set routes
let express = require('express');
let router = express.Router();

let userController = require('./Controllers/Controller');

// Liste des routes vers les controleurs


router.get('/', userController.formationList);
router.get('/login', userController.login);
router.post('/login/getPseudo', userController.createSession);
router.get('/subscribe/:i', userController.subscribe);
router.get('/delete/:i', userController.delete);
router.get('/viewCart', userController.viewCart);
router.get('/finalize', userController.Finalize);


// router.get('/user/remove/:iduser', userController.userRemove);
// router.get('/user/add', userController.userFormAdd);
// router.post('/user/new', userController.userNew);
// router.get('/user/update/:iduser', userController.userUpdate);
// router.get('/', (req, res) => res.redirect('/user'));
module.exports = router; // import the library 'router'