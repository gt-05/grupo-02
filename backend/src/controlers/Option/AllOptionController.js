const OptionModel = require('../../models/ProductOptionModel');
const ProductModel = require('../../models/ProductModel');

module.exports = async(request, response) => {
    let products = await productsModel.findAll({
        include: {
            model: OptionModel,
            as: 'options'
        }
    });
    return response.json(products);
}