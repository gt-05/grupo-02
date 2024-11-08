const CategoryModel = require('../../models/CategoryModel');
const ProductCategoryModel = require('../../models/ProductCategoryModel');


module.exports = async(request, response) => {
   
    let products = await CategoryModel.findAll({
        include: {
            model: ProductCategoryModel,
            as: 'categorys'
        }
    });
    return response.json(products);
}