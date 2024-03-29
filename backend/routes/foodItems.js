const express = require('express');
const { getFoodItems } = require('../controllers/foodItems');
const route = express.Router();

route.get('/',getFoodItems);

module.exports = route;