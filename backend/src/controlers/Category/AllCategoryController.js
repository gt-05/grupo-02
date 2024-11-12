const CategoryModel = require('../../models/CategoryModel');
const ProductCategoryModel = require('../../models/ProductCategoryModel');


module.exports = async(request, response) => {
   
    let products = await CategoryModel.findAll({
        
    });
    return response.json(products);
}