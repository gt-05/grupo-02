const Categorymodel = require('../../models/CategoryModel');


module.exports = async (request, response) => {
    let categorys = await Categorymodel.findAll({
        where: {
            slug: request.params.slug
        }
    });

    return response.json(categorys);
}