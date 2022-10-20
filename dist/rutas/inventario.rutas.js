"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _inventarioControlador = require("../controladores/inventario.controlador.js");

var router = (0, _express.Router)(); //Rutas Libro Digital

router.get('/LibroDigital', _inventarioControlador.getLibroDigital);
router.post('/LibroDigital', _inventarioControlador.postLibroDigital);
router.put('/LibroDigital/:id', _inventarioControlador.putLibroDigital); //Rutas Inventario Requerimientos

router.get('/InvRequerimientos', _inventarioControlador.getINvRequerimientos);
router.post('/InvRequerimientos', _inventarioControlador.postINvRequerimientos);
router.put('/InvRequerimientos/:id', _inventarioControlador.putINvRequerimientos); //Rutas VHS

router.get('/VHS', _inventarioControlador.getVHS);
router.post('/VHS', _inventarioControlador.postVHS);
router.put('/VHS/:id', _inventarioControlador.putVHS); //Rutas CASETH

router.get('/CASETH', _inventarioControlador.getCASETH);
router.post('/CASETH', _inventarioControlador.postCASETH);
router.put('/CASETH/:id', _inventarioControlador.putCASETH); //Rutas CD/DVD

router.get('/DVD', _inventarioControlador.getDVD);
router.post('/DVD', _inventarioControlador.postDVD);
router.put('/DVD/:id', _inventarioControlador.putDVD); //Rutas Inventario Objetos

router.get('/Objeto', _inventarioControlador.getObjeto);
router.post('/Objeto', _inventarioControlador.postObjeto);
router.put('/Objeto/:id', _inventarioControlador.putObjeto);
var _default = router;
exports["default"] = _default;