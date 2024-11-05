
const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');

const AllProductsController = require('../controllers/Products/AllProductsController');
const CreateController = require('../controllers/Products/CreateController');
const UpdateController = require("../controllers/Products/UpdateController");
const DeleteController = require("../controllers/Products/DeleteController");
const GetBySlug = require("../controllers/Products/GetBySlug");


privateRoutes.get('/products', AllProductsController);
publicRoutes.get('/products/:slug', GetBySlug);
privateRoutes.post('/products', CreateController);
privateRoutes.put('/products/:id', UpdateController);
privateRoutes.delete('/products/:id', DeleteController);

module.exports = [publicRoutes, privateRoutes];