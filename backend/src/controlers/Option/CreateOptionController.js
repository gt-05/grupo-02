const OptionModel = require('../../models/ProductOptionModel');
const ProductModel = require('../../models/ProductModel');


module.exports = async(request, response) => {
    let {
        name,
        slug,
        price
    } = request.body;

    let product;
    try {
        
         product = await ProductModel.create({
            name, slug, price
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(400);
        return response.json({
            message: "Erro ao criar produto"
        })
    }

    let options = [];

    try{

        for (let url of request.body.options) {
            let {relativePath} = await saveByUrl({url, slug});
            options.push({
                product_id: product.id,
                path: relativePath
            })
        }

     await ProductImageModel.bulkCreate(options);
    response.status(201);
    return response.json(product);

    } catch (error) {
        console.log(error.menssage);
        response.status(400);
        return response.json({
            message: "Erro ao  salvar imagens no produto " + product.id
        });
    }
}