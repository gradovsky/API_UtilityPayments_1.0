const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config');

const app = express();
config.express(app);
config.routes(app);
const { appPort, mongoUri} = config.app;

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true } )
    .then(() => app.listen(
        appPort,
        () => console.log(`Listen port ${appPort}...`)
    ))
    .catch(err => console.error(`Error connecting to mongo: ${mongoUri}`, err));



