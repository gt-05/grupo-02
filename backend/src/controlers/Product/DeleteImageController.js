const ProductImageModel = require('../../models/ProductImageModel');

module.exports = async(request, response) => {

    let count = await ProductImageModel.destroy({
        where:{
            id: request.params.id
        }
    });

    return response.status(204).end();
}