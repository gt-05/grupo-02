const privateRouter = require('./Private-Routes');
const publicRouter = require('./Public-Routes');
const AllCategoryController = require('../controlers/Category/AllCategoryController');
const CreateCategoryController = require('../controlers/Category/CreateCategoryController');
const UpdateCategoryController = require('../controlers/Category/UpdateCategoryController');
const DeleteOptionsController = require('../controlers/Category/DeleteOptionsController');

publicRouter.get('/category', AllCategoryController);
privateRouter.post('/category', CreateCategoryController);
privateRouter.put('/category/:id', UpdateCategoryController);
privateRouter.delete('/category/:id', DeleteOptionsController);

module.exports = [publicRouter, privateRouter];