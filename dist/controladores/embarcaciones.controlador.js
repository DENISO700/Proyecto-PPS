"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putTripulantes = exports.putEmbarcaciones = exports.postTripulantes = exports.postEmbarcaciones = exports.getTripulantes = exports.getEmbarcaciones = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

//CRUD EMBARCACIONES
var getEmbarcaciones = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllEmbarcaciones);

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

  return function getEmbarcaciones(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getEmbarcaciones = getEmbarcaciones;

var postEmbarcaciones = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, NumeroRegistro, NombreEmbarcacion, NombreCapitan, CantidadTripulantes, CantidadMotores, Marca, series, color, BanderaMatricula, ColorEmbarcacion, LicenciaCapitan, FechaInspeccion, LugarInspecion, MotoresCompradosEn, HP, Observaciones, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, NumeroRegistro = _req$body.NumeroRegistro, NombreEmbarcacion = _req$body.NombreEmbarcacion, NombreCapitan = _req$body.NombreCapitan, CantidadTripulantes = _req$body.CantidadTripulantes, CantidadMotores = _req$body.CantidadMotores, Marca = _req$body.Marca, series = _req$body.series, color = _req$body.color, BanderaMatricula = _req$body.BanderaMatricula, ColorEmbarcacion = _req$body.ColorEmbarcacion, LicenciaCapitan = _req$body.LicenciaCapitan, FechaInspeccion = _req$body.FechaInspeccion, LugarInspecion = _req$body.LugarInspecion, MotoresCompradosEn = _req$body.MotoresCompradosEn, HP = _req$body.HP, Observaciones = _req$body.Observaciones, UbicacionFisica = _req$body.UbicacionFisica;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('NumeroRegistro', _conexion.sql.VarChar, NumeroRegistro).input('NombreEmbarcacion', _conexion.sql.VarChar, NombreEmbarcacion).input('NombreCapitan', _conexion.sql.VarChar, NombreCapitan).input('CantidadTripulantes', _conexion.sql.Int, CantidadTripulantes).input('CantidadMotores', _conexion.sql.VarChar, CantidadMotores).input('Marca', _conexion.sql.VarChar, Marca).input('series', _conexion.sql.VarChar, series).input('color', _conexion.sql.VarChar, color).input('BanderaMatricula', _conexion.sql.VarChar, BanderaMatricula).input('ColorEmbarcacion', _conexion.sql.VarChar, ColorEmbarcacion).input('LicenciaCapitan', _conexion.sql.VarChar, LicenciaCapitan).input('FechaInspeccion', _conexion.sql.VarChar, FechaInspeccion).input('LugarInspecion', _conexion.sql.Text, LugarInspecion).input('MotoresCompradosEn', _conexion.sql.VarChar, MotoresCompradosEn).input('HP', _conexion.sql.Text, HP).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createEmbarcacion);

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

  return function postEmbarcaciones(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postEmbarcaciones = postEmbarcaciones;

var putEmbarcaciones = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, NumeroRegistro, NombreEmbarcacion, NombreCapitan, CantidadTripulantes, CantidadMotores, Marca, series, color, BanderaMatricula, ColorEmbarcacion, LicenciaCapitan, FechaInspeccion, LugarInspecion, MotoresCompradosEn, HP, Observaciones, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, NumeroRegistro = _req$body2.NumeroRegistro, NombreEmbarcacion = _req$body2.NombreEmbarcacion, NombreCapitan = _req$body2.NombreCapitan, CantidadTripulantes = _req$body2.CantidadTripulantes, CantidadMotores = _req$body2.CantidadMotores, Marca = _req$body2.Marca, series = _req$body2.series, color = _req$body2.color, BanderaMatricula = _req$body2.BanderaMatricula, ColorEmbarcacion = _req$body2.ColorEmbarcacion, LicenciaCapitan = _req$body2.LicenciaCapitan, FechaInspeccion = _req$body2.FechaInspeccion, LugarInspecion = _req$body2.LugarInspecion, MotoresCompradosEn = _req$body2.MotoresCompradosEn, HP = _req$body2.HP, Observaciones = _req$body2.Observaciones, UbicacionFisica = _req$body2.UbicacionFisica;
            id = req.params.id;
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context3.sent;
            _context3.next = 8;
            return pool.request().input('NumeroRegistro', _conexion.sql.VarChar, NumeroRegistro).input('NombreEmbarcacion', _conexion.sql.VarChar, NombreEmbarcacion).input('NombreCapitan', _conexion.sql.VarChar, NombreCapitan).input('CantidadTripulantes', _conexion.sql.Int, CantidadTripulantes).input('CantidadMotores', _conexion.sql.VarChar, CantidadMotores).input('Marca', _conexion.sql.VarChar, Marca).input('series', _conexion.sql.VarChar, series).input('color', _conexion.sql.VarChar, color).input('BanderaMatricula', _conexion.sql.VarChar, BanderaMatricula).input('ColorEmbarcacion', _conexion.sql.VarChar, ColorEmbarcacion).input('LicenciaCapitan', _conexion.sql.VarChar, LicenciaCapitan).input('FechaInspeccion', _conexion.sql.VarChar, FechaInspeccion).input('LugarInspecion', _conexion.sql.Text, LugarInspecion).input('MotoresCompradosEn', _conexion.sql.VarChar, MotoresCompradosEn).input('HP', _conexion.sql.Text, HP).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateEmbarcacion);

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

  return function putEmbarcaciones(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //CRUD TRIPULANTES


exports.putEmbarcaciones = putEmbarcaciones;

var getTripulantes = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllTripulantes);

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

  return function getTripulantes(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getTripulantes = getTripulantes;

var postTripulantes = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, Identidad, nombre, NumeroRegistro, Pasaporte, Nacionalidad, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, Identidad = _req$body3.Identidad, nombre = _req$body3.nombre, NumeroRegistro = _req$body3.NumeroRegistro, Pasaporte = _req$body3.Pasaporte, Nacionalidad = _req$body3.Nacionalidad;
            _context5.prev = 1;
            _context5.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context5.sent;
            _context5.next = 7;
            return pool.request().input('Identidad', _conexion.sql.VarChar, Identidad).input('nombre', _conexion.sql.VarChar, nombre).input('NumeroRegistro', _conexion.sql.VarChar, NumeroRegistro).input('Pasaporte', _conexion.sql.VarChar, Pasaporte).input('Nacionalidad', _conexion.sql.VarChar, Nacionalidad).query(_consultas["default"].createTripulante);

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

  return function postTripulantes(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.postTripulantes = postTripulantes;

var putTripulantes = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body4, Identidad, nombre, NumeroRegistro, Pasaporte, Nacionalidad, id, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body4 = req.body, Identidad = _req$body4.Identidad, nombre = _req$body4.nombre, NumeroRegistro = _req$body4.NumeroRegistro, Pasaporte = _req$body4.Pasaporte, Nacionalidad = _req$body4.Nacionalidad;
            id = req.params.id;
            _context6.prev = 2;
            _context6.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context6.sent;
            _context6.next = 8;
            return pool.request().input('Identidad', _conexion.sql.VarChar, Identidad).input('nombre', _conexion.sql.VarChar, nombre).input('NumeroRegistro', _conexion.sql.VarChar, NumeroRegistro).input('Pasaporte', _conexion.sql.VarChar, Pasaporte).input('Nacionalidad', _conexion.sql.VarChar, Nacionalidad).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateTripulante);

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

  return function putTripulantes(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.putTripulantes = putTripulantes;