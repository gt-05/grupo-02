const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');
const ProductOptionModel = require('../../models/ProductOptionModel');
const {saveByUrl} = require('../../services/Product-images');

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
    
    let images = [];

    try{
        console.log(request.body.images);
        for (let url of request.body.images) {
            let {relativePath} = await saveByUrl({url, slug});
            images.push({
                product_id: product.id,
                path: relativePath
            })
        }

     await ProductImageModel.bulkCreate(images);
    response.status(201);
   ;

    } catch (error) {
        console.log(error.menssage);
        response.status(400);
        return response.json({
            message: "Erro ao  salvar imagens no produto " + product.id
        });
    }

    let options = [];
        try {
        
        for (let optionData of request.body.options) {
           
            options.push({
                product_id: product.id,  
                title: String(optionData.title),        
                shape: optionData.shape,        
                radius: isNaN(Number(optionData.radius)) ? 0 : Number(optionData.radius),      
                type: optionData.type,          
                values: optionData.values.join()
            });
        }
            
        if (options.length > 0) {
            console.log(options);
            await ProductOptionModel.bulkCreate(options);
            return response.status(201).json({
                message: 'Opções criadas com sucesso'
            });
        } else {
            return response.status(400).json({
                message: "Nenhuma opção fornecida"
            });
        }
    } catch (error) {
        return response.status(500).json({
            message: `Erro ao salvar opções: ${error.message}`
        });
        
    }
}