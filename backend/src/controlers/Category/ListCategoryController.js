const ProductCategoryModel = require('../../models/ProductCategoryModel');

module.exports = async (request, response) => {
    let categorias = await ProductCategoryModel.findAll({
        attributes: ['id', 'path'],
        where: {
            category_id: request.params.id
        }
    });

    response.json(categorias);
}