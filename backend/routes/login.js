const express = require('express');
const loginUser = require('../controllers/login');
const route = express.Router();

route.post('/',loginUser);

module.exports = route;