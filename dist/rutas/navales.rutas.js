"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _navalesControlador = require("../controladores/navales.controlador.js");

var router = (0, _express.Router)(); //Rutas Navales LEITZ

router.get('/NavalesL', _navalesControlador.getNavalesL);
router.post('/NavalesL', _navalesControlador.postNavalesL);
router.put('/NavalesL/:id', _navalesControlador.putNavalesL); //Rutas Navales Normales

router.get('/NavalesN', _navalesControlador.getNavalesN);
router.post('/NavalesN', _navalesControlador.postNavalesN);
router.put('/NavalesN/:id', _navalesControlador.putNavalesN);
var _default = router;
exports["default"] = _default;