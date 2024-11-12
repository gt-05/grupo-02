const ProductModel = require('../../models/ProductModel');
const ProductOptionModel = require('../../models/ProductOptionModel');

module.exports = async (request, response) => {
    try {
        const { id } = request.params;
        const { options: optionDataArray } = request.body;

        const product = await ProductModel.findOne({ where: { id } });
        if (!product) {
            return response.status(404).json({ error: 'Produto não encontrado' });
        }

        let updatedOptionsCount = 0; 
        for (let optionData of optionDataArray) {
            
            const optionDataToUpdate = {
                product_id: product.id,  
                title: String(optionData.title),  
                shape: optionData.shape,
                radius: isNaN(Number(optionData.radius)) ? 0 : Number(optionData.radius), 
                type: optionData.type,
                values: optionData.values,
            };

            const [updated] = await ProductOptionModel.update(optionDataToUpdate, {
                where: { id: optionData.id }  
            });

            if (updated > 0) {
                updatedOptionsCount++;
            }
        }

        if (updatedOptionsCount === 0) {
            return response.status(404).json({ error: 'Nenhuma opção de produto foi atualizada' });
        }

        return response.status(200).json({ message: `${updatedOptionsCount} opção(s) de produto(s) atualizada(s) com sucesso` });

    } catch (error) {
        console.error('Erro ao atualizar opções do produto:', error);
        return response.status(500).json({ error: 'Erro ao atualizar as opções do produto' });
    }
};
