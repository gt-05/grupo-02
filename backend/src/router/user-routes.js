const privateRouter = require('./Private-Routes');
const publicRouter = require('./Public-Routes');
const AllUserControler = require('../controlers/User/AllUserControler');
const CreateController  = require('../controlers/User/CreatController')
const encriptPassword = require('../middears/incript-password');
const creatTokenController = require('../controlers/User/CreatTokenController');

publicRouter.get('/users', AllUserControler);
privateRouter.post('/users', encriptPassword, CreateController);
publicRouter.post('/users/token', creatTokenController);

module.exports = [publicRouter, privateRouter];