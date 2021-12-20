class cartList {
    constructor(cart, pseudo) {
        this.cart = cart;
        this.cart = pseudo;
    }


    toOneArray = function() {
        var cart = this.cart;
        var pseudo = this.pseudo;
        var pseudos = [];
        for (let b = 0; b < cart.length; b++) {
            pseudos.push(pseudo);
        }
        return cart.map(function(elem, j) {
            return [elem, pseudos[j]]
        });
    }
};

module.exports = cartList;

//let user = require('./userModel');