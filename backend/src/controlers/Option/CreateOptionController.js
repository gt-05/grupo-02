const ProductOptionModel = require('../../models/ProductOptionModel');
const ProductModel = require('../../models/ProductModel');


module.exports = async(request, response) => {
    
    let product = await ProductModel.findOne({
        where: {
            id: request.params.id
        }
    })

    let options = []
    try {
        for(let url of request.body) {
        let option = saveByUrl({url, slug: product.slug});
        options.push({
            product_id: request.params.id,
            values: (await option).relativeValues
        })
    }
    } catch(error) {
        response.status(400);
        return response.json({
            message: error.message
        });
    }

    options = await ProductOptionModel.bulkCreate(options);
    response.status(201);

    return response.json(options);
}