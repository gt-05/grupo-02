const CategoryModel = require('../../models/CategoryModel');
const ProductCategoryModel = require("../../models/ProductCategoryModel");
const { deleteMany } = require('../../servises/Product-images');

module.exports = async(request, response) => {
    let categorias = await ProductCategoryModel.findAll({
        attributes: ['path'],
        where: {
            category_id: request.params.id
        }
    });

    let count = await CategoryModel.destroy({
        where: {
            id: request.params.id
        }
    });    

    return response.status(204).end();
}