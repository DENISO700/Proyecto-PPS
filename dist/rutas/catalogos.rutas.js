"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _catalogosControlador = require("../controladores/catalogos.controlador.js");

var router = (0, _express.Router)(); //Rutas Avionetas LEITZ

router.get('/Regionales', _catalogosControlador.getRegionales);
var _default = router;
exports["default"] = _default;