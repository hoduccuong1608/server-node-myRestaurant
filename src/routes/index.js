
const UserController = require('../app/controllers/UserController')
const DishController = require('../app/controllers/DishController')
const DrinkController = require('../app/controllers/DrinkController')

function route(app) {
    app.post('/api/login', UserController.loginUser);
    app.post('/api/register', UserController.createUser);
    app.get('/api/dishs', DishController.getAllDish);
    app.get('/api/drinks', DrinkController.getAllDrink);
}

module.exports = route;