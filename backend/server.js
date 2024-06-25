require('dotenv').config();

require('./src/models/JogosSchema');

const routes = require('./src/routes/index');


const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
    return console.log('API: ' + port)
});

app.use(routes);
