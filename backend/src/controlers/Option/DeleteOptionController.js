const OptionModel =require ('../../models/ProductOptionModel');
const ProductModel = require('../../models/ProductModel');
const ProductOptionModel = require('../../models/ProductOptionModel');

module.exports = async(request, response) => {
    let options = await ProductOptionModel.findAll({
        atributes: ['values'],
        where: {
            product_id: request.params.id
        }
    });

    let count = await OptionModel.destroy({
        where: {
            id: request.params.id
        }
    });

    return response.status(204).end();
}