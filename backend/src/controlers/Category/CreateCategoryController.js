const CategoryModel = require('../../models/CategoryModel');
const ProductCategoryModel = require('../../models/ProductCategoryModel');

module.exports = async(request, response) => {
    let {
        name,
        slug
    } = request.body;

    let product;
    try {
        
         category = await CategoryModel.create({
            name, slug, price
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(400);
        return response.json({
            message: "Erro ao criar a categoria"
        })
    }
    
    let categorias = [];

    try{

     await ProductCategoryModel.bulkCreate(categorias);
    response.status(201);
    return response.json(category);

    } catch (error) {
        console.log(error.menssage);
        response.status(400);
        return response.json({
            message: "Erro ao  salvar categorias no produto " + category.id
        });
    }

}