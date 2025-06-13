const express = require('express')
const router = express.Router()
const agendamentoControler = require('../controllers/agendamentoController')
const usuarioController = require('../controllers/usuarioController')

// usuarioController.validarAutenticacao é literalmente um middleware, caso o usuario esteja validade, ele apenas vai para o next, que nesse caso é gendamentoControler.getIndexView
router.get('/', usuarioController.verificarAutenticacao, agendamentoControler.getIndexView)
router.get('/agendamentos', usuarioController.verificarAutenticacao, agendamentoControler.getAgendamentosView)
router.post('/agendar_consulta', usuarioController.verificarAutenticacao, agendamentoControler.postAgendarConsulta)

module.exports = router