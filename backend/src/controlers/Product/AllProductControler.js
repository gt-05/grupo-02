const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');


module.exports = async(request, response) => {
   
    let products = await ProductModel.findAll({
        include: {
            model: ProductImageModel,
            as: 'images'
        }
    });
    return response.json(products);
}