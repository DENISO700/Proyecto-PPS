"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _documentosControlador = require("../controladores/documentos.controlador.js");

var router = (0, _express.Router)(); //Rutas Documentos Diversos

router.get('/docDiversos', _documentosControlador.getDocDiversos);
router.post('/docDiversos', _documentosControlador.postDocDiversos);
router.put('/docDiversos/:id', _documentosControlador.putDocDiversos); //Rutas Informes Giras

router.get('/informesGiras', _documentosControlador.getInformes); //Rutas Documentos Direccion

router.get('/docDireccion', _documentosControlador.getDocDireccion); //Rutas Documentos Direccion LEITZ

router.get('/docDireccionLEITZ', _documentosControlador.getDocDireccionLEITZ);
var _default = router;
exports["default"] = _default;