"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putExpedientesAnalisis = exports.putExpediente_LEITZ = exports.putExpTeg = exports.postExpedientesAnalisis = exports.postExpedientes = exports.postExpTeg = exports.getExpedientesID = exports.getExpedientesAnalisis = exports.getExpedientes = exports.getExpTeg = exports.deleteExpedientes_LEITZ = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

//CRUD EXPEDIENTES LEITZ
var getExpedientes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_consultas["default"].getAllExpedientes_LEITZ);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getExpedientes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getExpedientes = getExpedientes;

var getExpedientesID = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input("id", id).query(_consultas["default"].getExpediente_LEITZ);

          case 7:
            result = _context2.sent;
            res.json(result.recordset);
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            res.status(500);
            res.send(_context2.t0.message);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function getExpedientesID(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getExpedientesID = getExpedientesID;

var postExpedientes = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, NumeroExpediente, Anio, Imputados, Sinopsis, Observaciones, Id_Regional, LEITZ, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, NumeroExpediente = _req$body.NumeroExpediente, Anio = _req$body.Anio, Imputados = _req$body.Imputados, Sinopsis = _req$body.Sinopsis, Observaciones = _req$body.Observaciones, Id_Regional = _req$body.Id_Regional, LEITZ = _req$body.LEITZ, UbicacionFisica = _req$body.UbicacionFisica;
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().input('NumeroExpediente', _conexion.sql.VarChar, NumeroExpediente).input('Anio', _conexion.sql.VarChar, Anio).input('Imputados', _conexion.sql.Text, Imputados).input('Sinopsis', _conexion.sql.Text, Sinopsis).input('Observaciones', _conexion.sql.Text, Observaciones).input('Id_Regional', _conexion.sql.Int, Id_Regional).input('LEITZ', _conexion.sql.Int, LEITZ).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createExpediente_LEITZ);

          case 7:
            res.send({
              "status": 200,
              data: req.body
            });
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(500);
            res.send(_context3.t0.message);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function postExpedientes(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.postExpedientes = postExpedientes;

var deleteExpedientes_LEITZ = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context4.sent;
            _context4.next = 7;
            return pool.request().input("id", id).query(_consultas["default"].deleteExpediente_LEITZ);

          case 7:
            result = _context4.sent;
            res.json(result.recordset);
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            res.status(500);
            res.send(_context4.t0.message);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 11]]);
  }));

  return function deleteExpedientes_LEITZ(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteExpedientes_LEITZ = deleteExpedientes_LEITZ;

var putExpediente_LEITZ = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, NumeroExpediente, Año, Imputados, Sinopsis, Observaciones, Id_Regional, LEITZ, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, NumeroExpediente = _req$body2.NumeroExpediente, Año = _req$body2.Año, Imputados = _req$body2.Imputados, Sinopsis = _req$body2.Sinopsis, Observaciones = _req$body2.Observaciones, Id_Regional = _req$body2.Id_Regional, LEITZ = _req$body2.LEITZ, UbicacionFisica = _req$body2.UbicacionFisica;
            id = req.params.id;
            _context5.prev = 2;
            _context5.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context5.sent;
            _context5.next = 8;
            return pool.request().input('NumeroExpediente', _conexion.sql.VarChar, NumeroExpediente).input('Año', _conexion.sql.VarChar, Año).input('Imputados', _conexion.sql.Text, Imputados).input('Sinopsis', _conexion.sql.Text, Sinopsis).input('Observaciones', _conexion.sql.Text, Observaciones).input('Id_Regional', _conexion.sql.Int, Id_Regional).input('LEITZ', _conexion.sql.Int, LEITZ).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateExpediente_LEITZ);

          case 8:
            res.send({
              "status": 200,
              data: req.body
            });
            _context5.next = 15;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](2);
            res.status(500);
            res.send(_context5.t0.message);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 11]]);
  }));

  return function putExpediente_LEITZ(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //CRUD EXPEDIENTES LEITZ a ANALISIS


exports.putExpediente_LEITZ = putExpediente_LEITZ;

var getExpedientesAnalisis = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context6.sent;
            _context6.next = 6;
            return pool.request().query(_consultas["default"].getAllExpedientesAnalisis);

          case 6:
            result = _context6.sent;
            res.json(result.recordset);
            _context6.next = 14;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            res.status(500);
            res.send(_context6.t0.message);

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));

  return function getExpedientesAnalisis(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getExpedientesAnalisis = getExpedientesAnalisis;

var postExpedientesAnalisis = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body3, MarcaLEITZ, TituloLomo, Contenido, Observaciones, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body3 = req.body, MarcaLEITZ = _req$body3.MarcaLEITZ, TituloLomo = _req$body3.TituloLomo, Contenido = _req$body3.Contenido, Observaciones = _req$body3.Observaciones, UbicacionFisica = _req$body3.UbicacionFisica;
            _context7.prev = 1;
            _context7.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context7.sent;
            _context7.next = 7;
            return pool.request().input('MarcaLEITZ', _conexion.sql.VarChar, MarcaLEITZ).input('TituloLomo', _conexion.sql.VarChar, TituloLomo).input('Contenido', _conexion.sql.VarChar, Contenido).input('Observaciones', _conexion.sql.VarChar, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createExpediente_Analisis);

          case 7:
            res.send({
              "status": 200,
              data: req.body
            });
            _context7.next = 14;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](1);
            res.status(500);
            res.send(_context7.t0.message);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 10]]);
  }));

  return function postExpedientesAnalisis(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.postExpedientesAnalisis = postExpedientesAnalisis;

var putExpedientesAnalisis = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body4, MarcaLEITZ, TituloLomo, Contenido, Observaciones, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body4 = req.body, MarcaLEITZ = _req$body4.MarcaLEITZ, TituloLomo = _req$body4.TituloLomo, Contenido = _req$body4.Contenido, Observaciones = _req$body4.Observaciones, UbicacionFisica = _req$body4.UbicacionFisica;
            id = req.params.id;
            _context8.prev = 2;
            _context8.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context8.sent;
            _context8.next = 8;
            return pool.request().input('MarcaLEITZ', _conexion.sql.VarChar, MarcaLEITZ).input('TituloLomo', _conexion.sql.VarChar, TituloLomo).input('Contenido', _conexion.sql.VarChar, Contenido).input('Observaciones', _conexion.sql.VarChar, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateExpedientes_Analisis);

          case 8:
            res.send({
              "status": 200,
              data: req.body
            });
            _context8.next = 15;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](2);
            res.status(500);
            res.send(_context8.t0.message);

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 11]]);
  }));

  return function putExpedientesAnalisis(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}(); //CRUD EXPEDIENTES TEGUCIGALPA ACTUALES


exports.putExpedientesAnalisis = putExpedientesAnalisis;

var getExpTeg = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context9.sent;
            _context9.next = 6;
            return pool.request().query(_consultas["default"].getAllExpTeg);

          case 6:
            result = _context9.sent;
            res.json(result.recordset);
            _context9.next = 14;
            break;

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](0);
            res.status(500);
            res.send(_context9.t0.message);

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 10]]);
  }));

  return function getExpTeg(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getExpTeg = getExpTeg;

var postExpTeg = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var _req$body5, NumeroExpediente, Nombre, Sinopsis, Observaciones, Folios, Año, LEITZ, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body5 = req.body, NumeroExpediente = _req$body5.NumeroExpediente, Nombre = _req$body5.Nombre, Sinopsis = _req$body5.Sinopsis, Observaciones = _req$body5.Observaciones, Folios = _req$body5.Folios, Año = _req$body5.Año, LEITZ = _req$body5.LEITZ, UbicacionFisica = _req$body5.UbicacionFisica;
            _context10.prev = 1;
            _context10.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context10.sent;
            _context10.next = 7;
            return pool.request().input('NumeroExpediente', _conexion.sql.VarChar, NumeroExpediente).input('Nombre', _conexion.sql.VarChar, Nombre).input('Sinopsis', _conexion.sql.Text, Sinopsis).input('Observaciones', _conexion.sql.Text, Observaciones).input('Folios', _conexion.sql.VarChar, Folios).input('Año', _conexion.sql.VarChar, Año).input('LEITZ', _conexion.sql.Int, LEITZ).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createExp_Teg);

          case 7:
            res.send({
              "status": 200,
              data: req.body
            });
            _context10.next = 14;
            break;

          case 10:
            _context10.prev = 10;
            _context10.t0 = _context10["catch"](1);
            res.status(500);
            res.send(_context10.t0.message);

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 10]]);
  }));

  return function postExpTeg(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.postExpTeg = postExpTeg;

var putExpTeg = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var _req$body6, NumeroExpediente, Nombre, Sinopsis, Observaciones, Folios, Año, LEITZ, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body6 = req.body, NumeroExpediente = _req$body6.NumeroExpediente, Nombre = _req$body6.Nombre, Sinopsis = _req$body6.Sinopsis, Observaciones = _req$body6.Observaciones, Folios = _req$body6.Folios, Año = _req$body6.Año, LEITZ = _req$body6.LEITZ, UbicacionFisica = _req$body6.UbicacionFisica;
            id = req.params.id;
            _context11.prev = 2;
            _context11.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context11.sent;
            _context11.next = 8;
            return pool.request().input('NumeroExpediente', _conexion.sql.VarChar, NumeroExpediente).input('Nombre', _conexion.sql.VarChar, Nombre).input('Sinopsis', _conexion.sql.Text, Sinopsis).input('Observaciones', _conexion.sql.Text, Observaciones).input('Folios', _conexion.sql.VarChar, Folios).input('Año', _conexion.sql.VarChar, Año).input('LEITZ', _conexion.sql.Int, LEITZ).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateExpTeg);

          case 8:
            res.send({
              "status": 200,
              data: req.body
            });
            _context11.next = 15;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](2);
            res.status(500);
            res.send(_context11.t0.message);

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 11]]);
  }));

  return function putExpTeg(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.putExpTeg = putExpTeg;