"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postHistory = exports.getHistory = exports.getAll = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

//CRUD BUSQUEDA GENERAL
var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var criterio, resultado, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            criterio = req.params.criterio;
            resultado = [];
            _context.prev = 2;
            _context.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context.sent;
            _context.next = 8;
            return pool.request().input("criterio", criterio).query(_consultas["default"].searchGeneral);

          case 8:
            result = _context.sent;
            //res.json(result.recordsets);
            result.recordsets.map(function (item, index) {
              item.map(function (item2, index2) {
                resultado.push(item2);
              });
            });
            res.json(resultado);
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);
            res.status(500);
            res.send(_context.t0.message);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));

  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getHistory = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context2.sent;
            _context2.next = 6;
            return pool.request().query(_consultas["default"].viewHistory);

          case 6:
            result = _context2.sent;
            res.json(result.recordset);
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(_context2.t0.message);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getHistory(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getHistory = getHistory;

var postHistory = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, NumeroFolio, Valor, Fecha, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, NumeroFolio = _req$body.NumeroFolio, Valor = _req$body.Valor, Fecha = _req$body.Fecha;
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().input('NumeroFolio', _conexion.sql.VarChar, NumeroFolio).input('Valor', _conexion.sql.VarChar, Valor).input('Fecha', _conexion.sql.DateTime, Fecha).query(_consultas["default"].setHistory);

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

  return function postHistory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.postHistory = postHistory;