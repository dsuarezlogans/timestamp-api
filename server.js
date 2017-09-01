'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const volleyball = require('volleyball');

const app = express();

const config = require('./config');
const routes = require('./routes');

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(volleyball);
app.use('/', routes);

app.listen(config.PORT, () => console.log(`Server listen in *:${config.PORT}`));

