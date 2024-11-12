const ProductImageModel = require('../../models/ProductImageModel');
const ProductModel = require('../../models/ProductModel');
const { saveByUrl } = require('../../services/Product-images');

module.exports = async (request, response) => {
    let product = await ProductModel.findOne({
        where: {
            id: request.params.id
        }
    });

    if (!product) {
        return response.status(404).json({
            message: "Produto não encontrado"
        });
    }

    let images = [];
    try {
        for (let url of request.body) {
            let image = await saveByUrl({ url, slug: product.slug });
            images.push({
                product_id: request.params.id,
                path: image.relativePath
            });
        }

        await ProductImageModel.bulkCreate(images);
    } catch (error) {
        return response.status(400).json({
            message: `Erro ao salvar imagens: ${error.message}`
        });
    }

};
