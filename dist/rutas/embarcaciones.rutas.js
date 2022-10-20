"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _embarcacionesControlador = require("../controladores/embarcaciones.controlador.js");

var router = (0, _express.Router)(); //RUTAS EMBARCACIONES

router.get('/Embarcaciones', _embarcacionesControlador.getEmbarcaciones);
router.post('/Embarcaciones', _embarcacionesControlador.postEmbarcaciones);
router.put('/Embarcaciones/:id', _embarcacionesControlador.putEmbarcaciones); //RUTAS TRIPULANTES

router.get('/Tripulantes', _embarcacionesControlador.getTripulantes);
router.post('/Tripulantes', _embarcacionesControlador.postTripulantes);
router.put('/Tripulantes/:id', _embarcacionesControlador.putTripulantes);
var _default = router;
exports["default"] = _default;