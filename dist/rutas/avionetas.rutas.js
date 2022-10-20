"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _avionetasControlador = require("../controladores/avionetas.controlador.js");

var router = (0, _express.Router)(); //Rutas Avionetas LEITZ

router.get('/AL', _avionetasControlador.getAL);
router.post('/AL', _avionetasControlador.postAL);
router.put('/AL/:id', _avionetasControlador.putAL); //Rutas Avionetas Matricula

router.get('/AM', _avionetasControlador.getAM);
router.post('/AM', _avionetasControlador.postAM);
router.put('/AM/:id', _avionetasControlador.putAM); //Rutas Avionetas Registro

router.get('/AvionetasR', _avionetasControlador.getAvionetasR);
router.post('/AvionetasR', _avionetasControlador.postAvionetasR);
router.put('/AvionetasR/:id', _avionetasControlador.putAvionetasR);
var _default = router;
exports["default"] = _default;