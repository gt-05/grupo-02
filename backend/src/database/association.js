const ProductModel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');
const ProductOptionModel = require('../models/ProductOptionModel');
const CategoryModel = require('../models/CategoryModel')

Productmodel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images'
});

ProductImageModel.belongsTo(ProductModel, {
    foreignKey: 'product_id',
    as: "products"
});

Productmodel.hasMany(ProductOptionModel, {
    foreignKey: 'product_id',
    as: 'options'
})

Productmodel.belongsToMany(CategoryModel, {
    foreignKey: "category_id",
    otherKey: "product_id",
    through: 'product_category',
    as: 'categories',
    timestamps: false
});

