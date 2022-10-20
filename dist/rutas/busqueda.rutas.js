"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _busquedaControlador = require("../controladores/busqueda.controlador.js");

var router = (0, _express.Router)(); //Rutas Expedintes

router.get('/busqueda/:criterio', _busquedaControlador.getAll);
router.get('/busqueda/', _busquedaControlador.getHistory);
router.post('/busqueda/', _busquedaControlador.postHistory);
var _default = router;
exports["default"] = _default;