const express = require('express');

const ctrl = require('../controllers')

const routes = express.Router();

routes.get(ctrl.index);

routes.route('/:timestamp')
    .get(ctrl.timestamp);

module.exports = routes;
