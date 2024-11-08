const ProductCategoryModel =require('../../models/ProductCategoryModel');
const CategoryModel = require('../../models/CategoryModel');

module.exports = async (request, response) => {
    let {id, categoryId} = request.params;

    let product = await CategoryModel.findOne({
        where: {id}
    });

    await ProductCategoryModel.update({
        path: category.relativePath
    }, {
        where: {
            category_id: id,
            id: categoryId
        }
    });

    return response.status(204).end();
}