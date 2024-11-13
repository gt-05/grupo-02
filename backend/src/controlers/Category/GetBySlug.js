const CategoryModel = require('../../models/CategoryModel');

module.exports = async (request, response) => {
    let products = await CategoryModel.findAll({
        where: {
            slug: request.params.slug
        },
        include: {
            attributes: ['id', 'url', 'path'],
            as: 'category'
        }
    });

    return response.json(products);
}