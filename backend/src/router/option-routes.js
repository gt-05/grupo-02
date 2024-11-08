const privateRouter = require('./Private-Routes');
const publicRouter = require('./Public-Routes');
const AllOptionControler = require('../controlers/Option/AllOptionControler');
const CreateController  = require('../controlers/Option/CreatController')
const encriptPassword = require('../middears/incript-password');
const creatTokenController = require('../controlers/Option/CreatTokenController');
const updateOptionController = require('../controlers/Option/UpdateOptionController');
const deleteOptionController = require('../controlers/Option/DeleteOptionController');

publicRouter.get('/Options', AllOptionControler);
privateRouter.post('/Options', encriptPassword, CreateController);
publicRouter.post('/Options/token', creatTokenController);
privateRouter.put('/Options/:id', updateOptionController);
privateRouter.delete('/Options/:id', deleteOptionController);

module.exports = [publicRouter, privateRouter];