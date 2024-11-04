const express = require('express');

let router = express.Router();

const AllProductControler = require('../controller/Products/AllProductControler');
const CreateProductControler = require('../controller/Products/CreateControler');
const UpdateController = require('../controller/Products/UpdateController');
const DeleteController = require('../controller/Products/DeleteController');
const GetBySlug = require("../controller/Products/GetBySlug");

router.get('/products', AllProductControler);
router.get('/product/:slug', GetBySlug);
router.post('/products', CreateProductControler);
router.put('/products/:id', UpdateController);
router.delete('/products/:id', DeleteController);

module.exports = router;