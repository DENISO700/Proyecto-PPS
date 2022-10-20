"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putAvionetasR = exports.putAM = exports.putAL = exports.postAvionetasR = exports.postAM = exports.postAL = exports.getAvionetasR = exports.getAM = exports.getAL = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

//CRUD AVIONETAS LEITZ
var getAL = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllAvionetasLEITZ);

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

  return function getAL(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAL = getAL;

var postAL = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, Codigo, Investigados, Descripcion, CasosRelacionados, LEITZ, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, Codigo = _req$body.Codigo, Investigados = _req$body.Investigados, Descripcion = _req$body.Descripcion, CasosRelacionados = _req$body.CasosRelacionados, LEITZ = _req$body.LEITZ, UbicacionFisica = _req$body.UbicacionFisica;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('Codigo', _conexion.sql.VarChar, Codigo).input('Investigados', _conexion.sql.Text, Investigados).input('Descripcion', _conexion.sql.Text, Descripcion).input('CasosRelacionados', _conexion.sql.Text, CasosRelacionados).input('LEITZ', _conexion.sql.Int, LEITZ).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createAvionetaLEITZ);

          case 7:
            res.send({
              "status": 200,
              data: req.body
            });
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            res.status(500);
            res.send(_context2.t0.message);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function postAL(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postAL = postAL;

var putAL = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, Codigo, Investigados, Descripcion, CasosRelacionados, LEITZ, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, Codigo = _req$body2.Codigo, Investigados = _req$body2.Investigados, Descripcion = _req$body2.Descripcion, CasosRelacionados = _req$body2.CasosRelacionados, LEITZ = _req$body2.LEITZ, UbicacionFisica = _req$body2.UbicacionFisica;
            id = req.params.id;
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context3.sent;
            _context3.next = 8;
            return pool.request().input('Codigo', _conexion.sql.VarChar, Codigo).input('Investigados', _conexion.sql.Text, Investigados).input('Descripcion', _conexion.sql.Text, Descripcion).input('CasosRelacionados', _conexion.sql.Text, CasosRelacionados).input('LEITZ', _conexion.sql.Int, LEITZ).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateAvionetaLEITZ);

          case 8:
            res.send({
              "status": 200,
              data: req.body
            });
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);
            res.status(500);
            res.send(_context3.t0.message);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 11]]);
  }));

  return function putAL(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //CRUD AVIONETAS MATRICULA


exports.putAL = putAL;

var getAM = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().query(_consultas["default"].getAllAvionetasMatricula);

          case 6:
            result = _context4.sent;
            res.json(result.recordset);
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500);
            res.send(_context4.t0.message);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function getAM(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAM = getAM;

var postAM = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, Matricula, Fecha, Bandera, Lugar, Sospechosos, Nacionalidad, Situacion, Observaciones, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, Matricula = _req$body3.Matricula, Fecha = _req$body3.Fecha, Bandera = _req$body3.Bandera, Lugar = _req$body3.Lugar, Sospechosos = _req$body3.Sospechosos, Nacionalidad = _req$body3.Nacionalidad, Situacion = _req$body3.Situacion, Observaciones = _req$body3.Observaciones, UbicacionFisica = _req$body3.UbicacionFisica;
            _context5.prev = 1;
            _context5.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context5.sent;
            _context5.next = 7;
            return pool.request().input('Matricula', _conexion.sql.Text, Matricula).input('Fecha', _conexion.sql.VarChar, Fecha).input('Bandera', _conexion.sql.VarChar, Bandera).input('Lugar', _conexion.sql.Text, Lugar).input('Sospechosos', _conexion.sql.Text, Sospechosos).input('Nacionalidad', _conexion.sql.VarChar, Nacionalidad).input('Situacion', _conexion.sql.Text, Situacion).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createAvionetaMatricula);

          case 7:
            res.send({
              "status": 200,
              data: req.body
            });
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            res.status(500);
            res.send(_context5.t0.message);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 10]]);
  }));

  return function postAM(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.postAM = postAM;

var putAM = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body4, Matricula, Fecha, Bandera, Lugar, Sospechosos, Nacionalidad, Situacion, Observaciones, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body4 = req.body, Matricula = _req$body4.Matricula, Fecha = _req$body4.Fecha, Bandera = _req$body4.Bandera, Lugar = _req$body4.Lugar, Sospechosos = _req$body4.Sospechosos, Nacionalidad = _req$body4.Nacionalidad, Situacion = _req$body4.Situacion, Observaciones = _req$body4.Observaciones, UbicacionFisica = _req$body4.UbicacionFisica;
            id = req.params.id;
            _context6.prev = 2;
            _context6.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context6.sent;
            _context6.next = 8;
            return pool.request().input('Matricula', _conexion.sql.Text, Matricula).input('Fecha', _conexion.sql.VarChar, Fecha).input('Bandera', _conexion.sql.VarChar, Bandera).input('Lugar', _conexion.sql.Text, Lugar).input('Sospechosos', _conexion.sql.Text, Sospechosos).input('Nacionalidad', _conexion.sql.VarChar, Nacionalidad).input('Situacion', _conexion.sql.Text, Situacion).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateAvionetaMatricula);

          case 8:
            res.send({
              "status": 200,
              data: req.body
            });
            _context6.next = 15;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](2);
            res.status(500);
            res.send(_context6.t0.message);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 11]]);
  }));

  return function putAM(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //CRUD AVIONETAS REGISTRO


exports.putAM = putAM;

var getAvionetasR = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context7.sent;
            _context7.next = 6;
            return pool.request().query(_consultas["default"].getAllAvionetasRegistro);

          case 6:
            result = _context7.sent;
            res.json(result.recordset);
            _context7.next = 14;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            res.status(500);
            res.send(_context7.t0.message);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 10]]);
  }));

  return function getAvionetasR(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getAvionetasR = getAvionetasR;

var postAvionetasR = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body5, NumeroRegistro, Fecha, Lugar, Coordenadas, Delito, Sospechosos, Matricula, Alias, Nacionalidad, SituacionActual, Observaciones, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body5 = req.body, NumeroRegistro = _req$body5.NumeroRegistro, Fecha = _req$body5.Fecha, Lugar = _req$body5.Lugar, Coordenadas = _req$body5.Coordenadas, Delito = _req$body5.Delito, Sospechosos = _req$body5.Sospechosos, Matricula = _req$body5.Matricula, Alias = _req$body5.Alias, Nacionalidad = _req$body5.Nacionalidad, SituacionActual = _req$body5.SituacionActual, Observaciones = _req$body5.Observaciones, UbicacionFisica = _req$body5.UbicacionFisica;
            _context8.prev = 1;
            _context8.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context8.sent;
            _context8.next = 7;
            return pool.request().input('NumeroRegistro', _conexion.sql.VarChar, NumeroRegistro).input('Fecha', _conexion.sql.VarChar, Fecha).input('Lugar', _conexion.sql.Text, Lugar).input('Coordenadas', _conexion.sql.VarChar, Coordenadas).input('Delito', _conexion.sql.Text, Delito).input('Sospechosos', _conexion.sql.Text, Sospechosos).input('Matricula', _conexion.sql.Text, Matricula).input('Alias', _conexion.sql.VarChar, Alias).input('Nacionalidad', _conexion.sql.VarChar, Nacionalidad).input('SituacionActual', _conexion.sql.Text, SituacionActual).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createAvionetasRegistro);

          case 7:
            res.send({
              "status": 200,
              data: req.body
            });
            _context8.next = 14;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](1);
            res.status(500);
            res.send(_context8.t0.message);

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 10]]);
  }));

  return function postAvionetasR(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.postAvionetasR = postAvionetasR;

var putAvionetasR = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var _req$body6, NumeroRegistro, Fecha, Lugar, Coordenadas, Delito, Sospechosos, Matricula, Alias, Nacionalidad, SituacionActual, Observaciones, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body6 = req.body, NumeroRegistro = _req$body6.NumeroRegistro, Fecha = _req$body6.Fecha, Lugar = _req$body6.Lugar, Coordenadas = _req$body6.Coordenadas, Delito = _req$body6.Delito, Sospechosos = _req$body6.Sospechosos, Matricula = _req$body6.Matricula, Alias = _req$body6.Alias, Nacionalidad = _req$body6.Nacionalidad, SituacionActual = _req$body6.SituacionActual, Observaciones = _req$body6.Observaciones, UbicacionFisica = _req$body6.UbicacionFisica;
            id = req.params.id;
            _context9.prev = 2;
            _context9.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context9.sent;
            _context9.next = 8;
            return pool.request().input('NumeroRegistro', _conexion.sql.VarChar, NumeroRegistro).input('Fecha', _conexion.sql.VarChar, Fecha).input('Lugar', _conexion.sql.Text, Lugar).input('Coordenadas', _conexion.sql.VarChar, Coordenadas).input('Delito', _conexion.sql.Text, Delito).input('Sospechosos', _conexion.sql.Text, Sospechosos).input('Matricula', _conexion.sql.Text, Matricula).input('Alias', _conexion.sql.VarChar, Alias).input('Nacionalidad', _conexion.sql.VarChar, Nacionalidad).input('SituacionActual', _conexion.sql.Text, SituacionActual).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateAvionetaRegistro);

          case 8:
            res.send({
              "status": 200,
              data: req.body
            });
            _context9.next = 15;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](2);
            res.status(500);
            res.send(_context9.t0.message);

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 11]]);
  }));

  return function putAvionetasR(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.putAvionetasR = putAvionetasR;