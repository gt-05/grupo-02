const ProductImageModel = require('../../models/ProductImageModel');
const ProductModel = require('../../models/ProductModel');



module.exports = async (request, response) => {
    let images = await ProductImageModel.findAll({   
        attributes: ['url', 'id', 'path'],     
        where: {
            id: request.params.id
        }
    });
    
    response.json(images);
}