const OptionModel =require('../../models/ProductOptionModel');

module.exports = async(request, response) => {
    let count = await OptionModel.destroy({
        where: {
            id: request.params.id
        }
    });

    return response.status(204).end();
}