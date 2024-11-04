const express = require('express');

let router = express.Router();

const AllUserControler = require('../controlers/User/AllUserControler');

const CreateUserControle  = require('../controlers/User/CreateUser')

router.get('/users', AllUserControler);
router.post('/users', CreateUserControle);

module.exports = router;