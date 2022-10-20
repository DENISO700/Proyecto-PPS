"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postUsuarios = exports.postLogin = exports.login = exports.getUsuarios = exports.getBitacora = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

//CRUD SEGURIDAD
var getUsuarios = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllUsuarios);

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

  return function getUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsuarios = getUsuarios;

var postUsuarios = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, Usuario, Contraseña, Empleado, administrador, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, Usuario = _req$body.Usuario, Contraseña = _req$body.Contraseña, Empleado = _req$body.Empleado, administrador = _req$body.administrador;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('Usuario', _conexion.sql.VarChar, Usuario).input('Contraseña', _conexion.sql.VarChar, Contraseña).input('Empleado', _conexion.sql.VarChar, Empleado).input('administrador', _conexion.sql.Bit, administrador).query(_consultas["default"].createUser);

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

  return function postUsuarios(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postUsuarios = postUsuarios;

var postLogin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$params, user, pass, test, pool, result, index;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$params = req.params, user = _req$params.user, pass = _req$params.pass;
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().query(_consultas["default"].getAllUsuarios);

          case 7:
            result = _context3.sent;

            if (!(result.recordset.length > 0)) {
              _context3.next = 21;
              break;
            }

            index = 0;

          case 10:
            if (!(index < result.recordset.length)) {
              _context3.next = 18;
              break;
            }

            if (!(result.recordset[index].Usuario === user && result.recordset[index].Contraseña === pass)) {
              _context3.next = 15;
              break;
            }

            res.send({
              "status": 200,
              data: result.recordset[index]
            });
            test = true;
            return _context3.abrupt("break", 18);

          case 15:
            index++;
            _context3.next = 10;
            break;

          case 18:
            if (!test) {
              res.status(500);
              res.send(error.message);
            }

            _context3.next = 22;
            break;

          case 21:
            res.send('No hay usurios Registrados ');

          case 22:
            _context3.next = 28;
            break;

          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](1);
            res.status(500);
            res.send(_context3.t0.message);

          case 28:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 24]]);
  }));

  return function postLogin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.postLogin = postLogin;

var login = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, Usuario, Contraseña, administrador;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, Usuario = _req$body2.Usuario, Contraseña = _req$body2.Contraseña, administrador = _req$body2.administrador;

            try {
              _jsonwebtoken["default"].sign({
                user: {
                  Usuario: Usuario,
                  Contraseña: Contraseña,
                  administrador: administrador
                }
              }, 'secretkey', function (err, token) {
                res.json({
                  token: token
                });
              });
            } catch (error) {
              res.status(500);
              res.send(error.message);
            }

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function login(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.login = login;

var getBitacora = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllBitacora);

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

  return function getBitacora(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getBitacora = getBitacora;