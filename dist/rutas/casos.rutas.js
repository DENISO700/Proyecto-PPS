"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _casosControladores = require("../controladores/casos.controladores.js");

var router = (0, _express.Router)(); //Rutas Precursores Quimicos

router.get('/PQ', _casosControladores.getPQ);
router.post('/PQ', _casosControladores.postPQ);
router.put('/PQ/:id', _casosControladores.putPQ); //Rutas Alto Rendimiento

router.get('/AR', _casosControladores.getAR);
router.post('/AR', _casosControladores.postAR);
router.put('/AR/:id', _casosControladores.putAR); //Rutas Reserva

router.get('/R', _casosControladores.getR);
router.post('/R', _casosControladores.postR);
router.put('/R/:id', _casosControladores.putR); //Rutas Diversos

router.get('/Diversos', _casosControladores.getDiversos);
router.post('/Diversos', _casosControladores.postDiversos);
router.put('/Diversos/:id', _casosControladores.putDiversos); //Rutas Infragantis

router.get('/Infragantis', _casosControladores.getInfragantis);
router.post('/Infragantis', _casosControladores.postInfragantis);
router.put('/Infragantis/:id', _casosControladores.putInfragantis); //Rutas Sin Numero

router.get('/SN', _casosControladores.getSN);
router.post('/SN', _casosControladores.postSN);
router.put('/SN/:id', _casosControladores.putSN);
var _default = router;
exports["default"] = _default;