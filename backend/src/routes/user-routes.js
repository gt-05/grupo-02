const express = require('express');

let router = express.Router();

const AllUserControler = require('../controller/User/AllUserController');

const CreateUserControle  = require('../controller/User/CreateUser')

router.get('/users', AllUserControler);
router.post('/users', CreateUserControle);

module.exports = router;