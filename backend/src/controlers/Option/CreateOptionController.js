const ProductOptionModel = require('../../models/ProductOptionModel');
const ProductModel = require('../../models/ProductModel');

module.exports = async (request, response) => {
    
        // Encontrar o produto pelo ID
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

        let options = [];
        try {
        if (!Array.isArray(request.body)) {
            return response.status(400).json({
                message: "Corpo da requisição deve ser um array de opções"
            });
        }

        for (let optionData of request.body) {
           
            options.push({
                product_id: request.params.id,  
                title: optionData.title,        
                shape: optionData.shape,        
                radius: optionData.radius,      
                type: optionData.type,          
                values: optionData.value,
            });
        }

        if (options.length > 0) {
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
};
