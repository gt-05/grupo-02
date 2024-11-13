const CategoryModel = require('../../models/CategoryModel');

module.exports = async(request, response) => {
    let user = await CategoryModel.findAll();
    return response.json(user);
}
