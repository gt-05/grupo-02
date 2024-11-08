const Productmodel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');
const ProductOptionModel = require('../models/ProductOptionModel');

ProductModel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images'
})

ProductModel.hasMany(ProductOptionModel, {
    foreignKey: 'product_id',
    as: 'options'
})