const express = require('express');
const routes = express.Router();
const controle = require('../controller/JogosCont');

routes.route('/jogos').get(controle.listar);
routes.route('/jogos/:id').get(controle.listar_id);
routes.route('/jogos').post(controle.incluir);
routes.route('/jogos/:id').delete(controle.excluir);
routes.route('/jogos/:id').patch(controle.alterar);

module.exports = routes;