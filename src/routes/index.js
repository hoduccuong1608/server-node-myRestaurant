
const UserController = require('../app/controllers/UserController')
const DishController = require('../app/controllers/DishController')
const DrinkController = require('../app/controllers/DrinkController')
const ListOrderController = require('../app/controllers/ListOrderController')

function route(app) {
    //login
    app.post('/api/login', UserController.loginUser);
    // register
    app.post('/api/register', UserController.createUser);
    // user
    app.post('/api/user/update', UserController.updateUser);
    app.post('/api/user/recharge', UserController.rechargeUser);
    // items
    app.get('/api/dishs', DishController.getAllDish);
    app.get('/api/drinks', DrinkController.getAllDrink);
    // cart
    app.post('/api/cart/add', UserController.addToCart);
    app.post('/api/cart/edit', UserController.editCart);
    app.get('/api/cart/:id', UserController.getAllCart);
    // list order
    app.post('/api/book/product', ListOrderController.bookProduct);
    app.get('/api/book/:id', ListOrderController.getAllBook);

}

module.exports = route;