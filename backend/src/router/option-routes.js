const privateRouter = require('./Private-Routes');
const publicRouter = require('./Public-Routes');
const AllOptionControler = require('../controlers/Option/AllOptionController');
const CreateOptionController  = require('../controlers/Option/CreateOptionController');
const updateOptionController = require('../controlers/Option/UpdateOptionController');
const deleteOptionController = require('../controlers/Option/DeleteOptionController');
const ListOptionController = require('../controlers/Option/ListOptionController');

publicRouter.get('/products/:id/options', AllOptionControler);
privateRouter.post('/products/:id/options', CreateOptionController);
privateRouter.put('/products/:id/options', updateOptionController);
privateRouter.delete('/products/:id/options', deleteOptionController);
publicRouter.get('/products/:id/options',ListOptionController);

module.exports = [publicRouter, privateRouter];