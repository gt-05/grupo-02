const OptionModel = require('../../models/ProductOptionModel');

module.exports = async (request,response) => {
    let{body} = request;
    await OptionModel.update(body, {
        where: {
            id: request.params.id
        }
    });

    return status(204).end();
}