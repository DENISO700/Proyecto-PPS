"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _requerimientosControlador = require("../controladores/requerimientos.controlador.js");

var router = (0, _express.Router)(); //Rutas Expedintes

router.get('/requerimientos', _requerimientosControlador.getRequerimientos);
router.post('/requerimientos', _requerimientosControlador.postRequerimiemtos);
router.put('/requerimientos/:id', _requerimientosControlador.putRequerimiemtos);
var _default = router;
exports["default"] = _default;