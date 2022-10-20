"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config.js"));

var _cors = _interopRequireDefault(require("cors"));

var _expedientesRutas = _interopRequireDefault(require("./rutas/expedientes.rutas.js"));

var _busquedaRutas = _interopRequireDefault(require("./rutas/busqueda.rutas.js"));

var _seguridadRutas = _interopRequireDefault(require("./rutas/seguridad.rutas.js"));

var _fichasRutas = _interopRequireDefault(require("./rutas/fichas.rutas.js"));

var _casosRutas = _interopRequireDefault(require("./rutas/casos.rutas.js"));

var _requerimientosRutas = _interopRequireDefault(require("./rutas/requerimientos.rutas.js"));

var _documentosRutas = _interopRequireDefault(require("./rutas/documentos.rutas.js"));

var _avionetasRutas = _interopRequireDefault(require("./rutas/avionetas.rutas.js"));

var _navalesRutas = _interopRequireDefault(require("./rutas/navales.rutas.js"));

var _inventarioRutas = _interopRequireDefault(require("./rutas/inventario.rutas.js"));

var _embarcacionesRutas = _interopRequireDefault(require("./rutas/embarcaciones.rutas.js"));

var _catalogosRutas = _interopRequireDefault(require("./rutas/catalogos.rutas.js"));

var app = (0, _express["default"])(); //configuraciones

app.set('port', _config["default"].port || 9000); //middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])()); //rutas

app.use(_expedientesRutas["default"]);
app.use(_busquedaRutas["default"]);
app.use(_seguridadRutas["default"]);
app.use(_fichasRutas["default"]);
app.use(_casosRutas["default"]);
app.use(_requerimientosRutas["default"]);
app.use(_documentosRutas["default"]);
app.use(_avionetasRutas["default"]);
app.use(_navalesRutas["default"]);
app.use(_inventarioRutas["default"]);
app.use(_embarcacionesRutas["default"]);
app.use(_catalogosRutas["default"]);
var _default = app;
exports["default"] = _default;