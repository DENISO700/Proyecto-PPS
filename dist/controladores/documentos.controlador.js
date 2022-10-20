"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putDocDiversos = exports.postDocDiversos = exports.getInformes = exports.getDocDiversos = exports.getDocDireccionLEITZ = exports.getDocDireccion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

//CRUD DOCUMENTOS DIVERSOS
var getDocDiversos = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllDocDiversos);

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

  return function getDocDiversos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDocDiversos = getDocDiversos;

var postDocDiversos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, TipoDocumento, Descripcion, Observaciones, Fecha, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, TipoDocumento = _req$body.TipoDocumento, Descripcion = _req$body.Descripcion, Observaciones = _req$body.Observaciones, Fecha = _req$body.Fecha, UbicacionFisica = _req$body.UbicacionFisica;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('TipoDocumento', _conexion.sql.VarChar, TipoDocumento).input('Descripcion', _conexion.sql.Text, Descripcion).input('Observaciones', _conexion.sql.Text, Observaciones).input('Fecha', _conexion.sql.VarChar, Fecha).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createDocDiverso);

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

  return function postDocDiversos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postDocDiversos = postDocDiversos;

var putDocDiversos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, TipoDocumento, Descripcion, Observaciones, Fecha, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, TipoDocumento = _req$body2.TipoDocumento, Descripcion = _req$body2.Descripcion, Observaciones = _req$body2.Observaciones, Fecha = _req$body2.Fecha, UbicacionFisica = _req$body2.UbicacionFisica;
            id = req.params.id;
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context3.sent;
            _context3.next = 8;
            return pool.request().input('TipoDocumento', _conexion.sql.VarChar, TipoDocumento).input('Descripcion', _conexion.sql.Text, Descripcion).input('Observaciones', _conexion.sql.Text, Observaciones).input('Fecha', _conexion.sql.VarChar, Fecha).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateDocDiversos);

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

  return function putDocDiversos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //CRUD INFORMES GIRAS


exports.putDocDiversos = putDocDiversos;

var getInformes = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllInformesGiras);

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

  return function getInformes(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //CRUD DOCUMENTOS DIRECION


exports.getInformes = getInformes;

var getDocDireccion = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().query(_consultas["default"].getAllDocDireccion);

          case 6:
            result = _context5.sent;
            res.json(result.recordset);
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500);
            res.send(_context5.t0.message);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function getDocDireccion(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //CRUD DOCUMENTOS DIRECION LEITZ


exports.getDocDireccion = getDocDireccion;

var getDocDireccionLEITZ = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllDocDireccionLEITZ);

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

  return function getDocDireccionLEITZ(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getDocDireccionLEITZ = getDocDireccionLEITZ;