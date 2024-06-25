const {Router} = require('express');
const routes = Router();

const jogosRout = require("./JogosRout");
routes.use("/api", jogosRout);

module.exports = routes;