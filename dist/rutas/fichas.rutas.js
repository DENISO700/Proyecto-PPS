"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _fichasControlador = require("../controladores/fichas.controlador.js");

var router = (0, _express.Router)(); //Rutas Fichas Orden

router.get('/FichasOrden', _fichasControlador.getFichasOrden);
router.post('/FichasOrden', _fichasControlador.postFichasOrden);
router.put('/FichasOrden/:id', _fichasControlador.putFichasOrden); //Rutas Fichas 2009

router.get('/Fichas2009', _fichasControlador.getFichas2009);
var _default = router;
exports["default"] = _default;