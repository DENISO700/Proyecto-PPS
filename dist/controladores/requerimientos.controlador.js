"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putRequerimiemtos = exports.postRequerimiemtos = exports.getRequerimientos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

//CRUD SEGURIDAD
var getRequerimientos = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllRequerimientos);

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

  return function getRequerimientos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getRequerimientos = getRequerimientos;

var postRequerimiemtos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, NumeroRequerimiento, Imputados, Delito, Recibe, regional, FechaRequerimiento, FiscalAsignado, FechaEntregaFESCO, Observaciones, Año, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, NumeroRequerimiento = _req$body.NumeroRequerimiento, Imputados = _req$body.Imputados, Delito = _req$body.Delito, Recibe = _req$body.Recibe, regional = _req$body.regional, FechaRequerimiento = _req$body.FechaRequerimiento, FiscalAsignado = _req$body.FiscalAsignado, FechaEntregaFESCO = _req$body.FechaEntregaFESCO, Observaciones = _req$body.Observaciones, Año = _req$body.Año, UbicacionFisica = _req$body.UbicacionFisica;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('NumeroRequerimiento', _conexion.sql.VarChar, NumeroRequerimiento).input('Imputados', _conexion.sql.Text, Imputados).input('Delito', _conexion.sql.Text, Delito).input('Recibe', _conexion.sql.VarChar, Recibe).input('regional', _conexion.sql.VarChar, regional).input('FechaRequerimiento', _conexion.sql.VarChar, FechaRequerimiento).input('FiscalAsignado', _conexion.sql.VarChar, FiscalAsignado).input('FechaEntregaFESCO', _conexion.sql.VarChar, FechaEntregaFESCO).input('Observaciones', _conexion.sql.Text, Observaciones).input('Año', _conexion.sql.VarChar, Año).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createRequerimiento);

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

  return function postRequerimiemtos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postRequerimiemtos = postRequerimiemtos;

var putRequerimiemtos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, NumeroRequerimiento, Imputados, Delito, Recibe, regional, FechaRequerimiento, FiscalAsignado, FechaEntregaFESCO, Observaciones, Año, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, NumeroRequerimiento = _req$body2.NumeroRequerimiento, Imputados = _req$body2.Imputados, Delito = _req$body2.Delito, Recibe = _req$body2.Recibe, regional = _req$body2.regional, FechaRequerimiento = _req$body2.FechaRequerimiento, FiscalAsignado = _req$body2.FiscalAsignado, FechaEntregaFESCO = _req$body2.FechaEntregaFESCO, Observaciones = _req$body2.Observaciones, Año = _req$body2.Año, UbicacionFisica = _req$body2.UbicacionFisica;
            id = req.params.id;
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context3.sent;
            _context3.next = 8;
            return pool.request().input('NumeroRequerimiento', _conexion.sql.VarChar, NumeroRequerimiento).input('Imputados', _conexion.sql.Text, Imputados).input('Delito', _conexion.sql.Text, Delito).input('Recibe', _conexion.sql.VarChar, Recibe).input('regional', _conexion.sql.VarChar, regional).input('FechaRequerimiento', _conexion.sql.VarChar, FechaRequerimiento).input('FiscalAsignado', _conexion.sql.VarChar, FiscalAsignado).input('FechaEntregaFESCO', _conexion.sql.VarChar, FechaEntregaFESCO).input('Observaciones', _conexion.sql.Text, Observaciones).input('Año', _conexion.sql.VarChar, Año).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateRequerimientos);

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

  return function putRequerimiemtos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.putRequerimiemtos = putRequerimiemtos;