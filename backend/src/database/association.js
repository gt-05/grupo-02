const ProductModel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');
const ProductOptionModel = require('../models/ProductOptionModel');
const CategoryModel = require('../models/CategoryModel')

ProductModel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images'
});

ProductImageModel.belongsTo(ProductModel, {
    foreignKey: 'product_id',
    as: "products"
});

ProductModel.hasMany(ProductOptionModel, {
    foreignKey: 'product_id',
    as: 'options'
})

ProductModel.belongsToMany(CategoryModel, {
    foreignKey: "product_id",
    otherKey: "category_id",
    through: 'product_category',
    as: 'categories',
    timestamps: false
});

