const CategoryModel = require('../../models/CategoryModel');


module.exports = async(request, response) => {
    let {
        name,
        slug
    } = request.body;

    let product;
    try {
        
         product = await CategoryModel.create({
            name, slug
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(400);
        return response.json({
            message: "Erro ao criar categoria"
        })
    }

}