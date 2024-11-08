const privateRouter = require('./Private-Routes');
const publicRouter = require('./Public-Routes');
const AllOptionControler = require('../controlers/Option/AllOptionControler');
const CreateOptionController  = require('../controlers/Option/CreatController')
const updateOptionController = require('../controlers/Option/UpdateOptionController');
const deleteOptionController = require('../controlers/Option/DeleteOptionController');
const ListOptionController = require('../controlers/Option/ListOptionController');

publicRouter.get('/Options', AllOptionControler);
privateRouter.post('/Options', CreateOptionController);
privateRouter.put('/Options/:id', updateOptionController);
privateRouter.delete('/Options/:id', deleteOptionController);
publicRouter.get('/options/:id',ListOptionController);

module.exports = [publicRouter, privateRouter];