const express = require('express')
const router = express.Router()
const agendamentoControler = require('../controllers/agendamentoController')

router.get('/', agendamentoControler.getIndexView)
router.get('/agendamentos', agendamentoControler.getAgendamentosView)
router.post('/agendar_consulta', agendamentoControler.postAgendarConsulta)

module.exports = router