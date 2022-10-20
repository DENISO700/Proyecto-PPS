"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putNavalesN = exports.putNavalesL = exports.postNavalesN = exports.postNavalesL = exports.getNavalesN = exports.getNavalesL = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

//CRUD NAVALES LEITZ
var getNavalesL = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllNavalesL);

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

  return function getNavalesL(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getNavalesL = getNavalesL;

var postNavalesL = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, Nomenclatura, Ubicacion, TipoDocumento, Fecha, Sinopsis, LEITZ, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, Nomenclatura = _req$body.Nomenclatura, Ubicacion = _req$body.Ubicacion, TipoDocumento = _req$body.TipoDocumento, Fecha = _req$body.Fecha, Sinopsis = _req$body.Sinopsis, LEITZ = _req$body.LEITZ, UbicacionFisica = _req$body.UbicacionFisica;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('Nomenclatura', _conexion.sql.Text, Nomenclatura).input('Ubicacion', _conexion.sql.Text, Ubicacion).input('TipoDocumento', _conexion.sql.VarChar, TipoDocumento).input('Fecha', _conexion.sql.VarChar, Fecha).input('Sinopsis', _conexion.sql.Text, Sinopsis).input('LEITZ', _conexion.sql.Int, LEITZ).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createNavalesLEITZ);

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

  return function postNavalesL(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postNavalesL = postNavalesL;

var putNavalesL = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, Nomenclatura, Ubicacion, TipoDocumento, Fecha, Sinopsis, LEITZ, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, Nomenclatura = _req$body2.Nomenclatura, Ubicacion = _req$body2.Ubicacion, TipoDocumento = _req$body2.TipoDocumento, Fecha = _req$body2.Fecha, Sinopsis = _req$body2.Sinopsis, LEITZ = _req$body2.LEITZ, UbicacionFisica = _req$body2.UbicacionFisica;
            id = req.params.id;
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context3.sent;
            _context3.next = 8;
            return pool.request().input('Nomenclatura', _conexion.sql.Text, Nomenclatura).input('Ubicacion', _conexion.sql.Text, Ubicacion).input('TipoDocumento', _conexion.sql.VarChar, TipoDocumento).input('Fecha', _conexion.sql.VarChar, Fecha).input('Sinopsis', _conexion.sql.Text, Sinopsis).input('LEITZ', _conexion.sql.Int, LEITZ).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateLEITZ_Navales);

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

  return function putNavalesL(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //CRUD NAVALES NORMALES


exports.putNavalesL = putNavalesL;

var getNavalesN = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllNavalesN);

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

  return function getNavalesN(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getNavalesN = getNavalesN;

var postNavalesN = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, Codigo, FechaInforme, Lugar, Detectives, Nombres, NombreEmbarcacion, Descripcion, Decomisos, Observaciones, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, Codigo = _req$body3.Codigo, FechaInforme = _req$body3.FechaInforme, Lugar = _req$body3.Lugar, Detectives = _req$body3.Detectives, Nombres = _req$body3.Nombres, NombreEmbarcacion = _req$body3.NombreEmbarcacion, Descripcion = _req$body3.Descripcion, Decomisos = _req$body3.Decomisos, Observaciones = _req$body3.Observaciones, UbicacionFisica = _req$body3.UbicacionFisica;
            _context5.prev = 1;
            _context5.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context5.sent;
            _context5.next = 7;
            return pool.request().input('Codigo', _conexion.sql.VarChar, Codigo).input('FechaInforme', _conexion.sql.VarChar, FechaInforme).input('Lugar', _conexion.sql.Text, Lugar).input('Detectives', _conexion.sql.Text, Detectives).input('Nombres', _conexion.sql.Text, Nombres).input('NombreEmbarcacion', _conexion.sql.Text, NombreEmbarcacion).input('Descripcion', _conexion.sql.Text, Descripcion).input('Decomisos', _conexion.sql.Text, Decomisos).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createNavalesNormales);

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

  return function postNavalesN(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.postNavalesN = postNavalesN;

var putNavalesN = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body4, Codigo, FechaInforme, Lugar, Detectives, Nombres, NombreEmbarcacion, Descripcion, Decomisos, Observaciones, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body4 = req.body, Codigo = _req$body4.Codigo, FechaInforme = _req$body4.FechaInforme, Lugar = _req$body4.Lugar, Detectives = _req$body4.Detectives, Nombres = _req$body4.Nombres, NombreEmbarcacion = _req$body4.NombreEmbarcacion, Descripcion = _req$body4.Descripcion, Decomisos = _req$body4.Decomisos, Observaciones = _req$body4.Observaciones, UbicacionFisica = _req$body4.UbicacionFisica;
            id = req.params.id;
            _context6.prev = 2;
            _context6.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context6.sent;
            _context6.next = 8;
            return pool.request().input('Codigo', _conexion.sql.VarChar, Codigo).input('FechaInforme', _conexion.sql.VarChar, FechaInforme).input('Lugar', _conexion.sql.Text, Lugar).input('Detectives', _conexion.sql.Text, Detectives).input('Nombres', _conexion.sql.Text, Nombres).input('NombreEmbarcacion', _conexion.sql.Text, NombreEmbarcacion).input('Descripcion', _conexion.sql.Text, Descripcion).input('Decomisos', _conexion.sql.Text, Decomisos).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateNavales);

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

  return function putNavalesN(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.putNavalesN = putNavalesN;