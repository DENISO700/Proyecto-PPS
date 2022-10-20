"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app.js"));

require("./base/conexion.js");

var _os = _interopRequireDefault(require("os"));

_app["default"].listen(_app["default"].get('port'));

console.log("servidor en el puerto", _app["default"].get('port'));