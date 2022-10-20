"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _seguridadControlador = require("../controladores/seguridad.controlador.js");

var router = (0, _express.Router)(); //Rutas Expedintes

router.get('/Seguridad', _seguridadControlador.getUsuarios);
router.post('/Seguridad', _seguridadControlador.postUsuarios);
router.post('/loginDB/:user/:pass', _seguridadControlador.postLogin);
router.post('/login', _seguridadControlador.login);
router.get('/Seguridad/Bitacora', _seguridadControlador.getBitacora);
var _default = router;
exports["default"] = _default;