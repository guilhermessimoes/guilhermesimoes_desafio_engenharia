var express = require('express');
var router = express.Router();
const tarefaUmController = require('../controller/tarefaUmController');
const tarefaDoisController = require('../controller/tarefaDoisController');
const tarefaTresController = require('../controller/tarefaTresController');
const tarefaQuatroController = require('../controller/tarefaQuatroController');
const tarefaCincoController = require('../controller/tarefaCincoController');
const tarefaSeisController = require('../controller/tarefaSeisController');
const tarefaSeteController = require('../controller/tarefaSeteController');
const tarefaOitoController = require('../controller/tarefaOitoController');
const tarefaNoveController = require('../controller/tarefaNoveController');
const tarefaDezController = require('../controller/tarefaDezController');


router.get('/tarefa-um/:destino', tarefaUmController.indentificarRegiao);
router.get('/tarefa-dois/validos', tarefaDoisController.validos);
router.get('/tarefa-dois/invalidos', tarefaDoisController.invalidos);
router.get('/tarefa-tres', tarefaTresController.list);
router.get('/tarefa-quatro', tarefaQuatroController.list);
router.get('/tarefa-cinco/:codVendedor', tarefaCincoController.enviadosVendedor);
router.get('/tarefa-seis/:tipoProduto/:destino', tarefaSeisController.gerarRelatorio);
router.get('/tarefa-sete/:destino', tarefaSeteController.destinoNorte);
router.get('/tarefa-oito/:destino', tarefaOitoController.fila);
router.get('/tarefa-nove/:tipoProduto/:destino', tarefaNoveController.fila);
router.get('/tarefa-dez', tarefaDezController.listaInvalidos);

module.exports = router;
