"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expedientesControlador = require("../controladores/expedientes.controlador.js");

var router = (0, _express.Router)(); //Rutas Expedientes LEITZ

router.get('/LEITZ_Regionales', _expedientesControlador.getExpedientes);
router.get('/LEITZ_Regionales/:id', _expedientesControlador.getExpedientesID);
router.post('/LEITZ_Regionales', _expedientesControlador.postExpedientes);
router["delete"]('/LEITZ_Regionales/:id', _expedientesControlador.deleteExpedientes_LEITZ);
router.put('/LEITZ_Regionales/:id', _expedientesControlador.putExpediente_LEITZ); //Rutas Expedientes a Analisis

router.get('/ExpAnalisis', _expedientesControlador.getExpedientesAnalisis);
router.post('/ExpAnalisis', _expedientesControlador.postExpedientesAnalisis);
router.put('/ExpAnalisis/:id', _expedientesControlador.putExpedientesAnalisis); //Rutas Expedientes Tegucigalpa Actuales

router.get('/ExpTeg', _expedientesControlador.getExpTeg);
router.post('/ExpTeg', _expedientesControlador.postExpTeg);
router.put('/ExpTeg/:id', _expedientesControlador.putExpTeg);
var _default = router;
exports["default"] = _default;