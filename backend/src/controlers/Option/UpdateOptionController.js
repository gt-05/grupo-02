const ProductModel = require('../../models/ProductModel');
const ProductOptionModel = require('../../models/ProductOptionModel');

module.exports = async (request, response) => {
    let {id, OptionId} = request.params;

    let product = await ProductModel.findOne({
        where: {id}
    });


    await ProductOptionModel.update({
        values: Option.relativeValues
    }, {
        where: {
            product_id: id,
            id: OptionId
        }
    });

    return response.status(204).end();
}