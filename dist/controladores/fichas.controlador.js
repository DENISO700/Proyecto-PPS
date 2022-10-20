"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putFichasOrden = exports.postFichasOrden = exports.getFichasOrden = exports.getFichas2009 = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

//CRUD FICHAS ORDEN
var getFichasOrden = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllFichasOrden);

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

  return function getFichasOrden(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getFichasOrden = getFichasOrden;

var postFichasOrden = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, NumeroFicha, Nombre, Sinopsis, Caso, Observaciones, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, NumeroFicha = _req$body.NumeroFicha, Nombre = _req$body.Nombre, Sinopsis = _req$body.Sinopsis, Caso = _req$body.Caso, Observaciones = _req$body.Observaciones, UbicacionFisica = _req$body.UbicacionFisica;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('NumeroFicha', _conexion.sql.VarChar, NumeroFicha).input('Nombre', _conexion.sql.VarChar, Nombre).input('Sinopsis', _conexion.sql.Text, Sinopsis).input('Caso', _conexion.sql.Text, Caso).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createFicha);

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

  return function postFichasOrden(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postFichasOrden = postFichasOrden;

var putFichasOrden = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, NumeroFicha, Nombre, Sinopsis, Caso, Observaciones, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, NumeroFicha = _req$body2.NumeroFicha, Nombre = _req$body2.Nombre, Sinopsis = _req$body2.Sinopsis, Caso = _req$body2.Caso, Observaciones = _req$body2.Observaciones, UbicacionFisica = _req$body2.UbicacionFisica;
            id = req.params.id;
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context3.sent;
            _context3.next = 8;
            return pool.request().input('NumeroFicha', _conexion.sql.VarChar, NumeroFicha).input('Nombre', _conexion.sql.VarChar, Nombre).input('Sinopsis', _conexion.sql.Text, Sinopsis).input('Caso', _conexion.sql.Text, Caso).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateFichasOrden);

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

  return function putFichasOrden(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //CRUD FICHAS DLCN 2009


exports.putFichasOrden = putFichasOrden;

var getFichas2009 = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllFichas2009);

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

  return function getFichas2009(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getFichas2009 = getFichas2009;