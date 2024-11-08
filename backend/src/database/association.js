const Productmodel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');

Productmodel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images'
})


