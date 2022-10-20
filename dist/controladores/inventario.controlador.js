"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putVHS = exports.putObjeto = exports.putLibroDigital = exports.putINvRequerimientos = exports.putDVD = exports.putCASETH = exports.postVHS = exports.postObjeto = exports.postLibroDigital = exports.postINvRequerimientos = exports.postDVD = exports.postCASETH = exports.getVHS = exports.getObjeto = exports.getLibroDigital = exports.getINvRequerimientos = exports.getDVD = exports.getCASETH = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _conexion = require("../base/conexion.js");

var _consultas = _interopRequireDefault(require("../base/consultas.js"));

//CRUD LIBRO DIGITAL
var getLibroDigital = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllLibroDigital);

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

  return function getLibroDigital(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getLibroDigital = getLibroDigital;

var postLibroDigital = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, NumeroExpediente, FechaHora, NumeroFolios, Departamento, NombreSolicitante, PlacaSolicitante, Año, Firma, Observaciones, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, NumeroExpediente = _req$body.NumeroExpediente, FechaHora = _req$body.FechaHora, NumeroFolios = _req$body.NumeroFolios, Departamento = _req$body.Departamento, NombreSolicitante = _req$body.NombreSolicitante, PlacaSolicitante = _req$body.PlacaSolicitante, Año = _req$body.Año, Firma = _req$body.Firma, Observaciones = _req$body.Observaciones, UbicacionFisica = _req$body.UbicacionFisica;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input('NumeroExpediente', _conexion.sql.VarChar, NumeroExpediente).input('FechaHora', _conexion.sql.VarChar, FechaHora).input('NumeroFolios', _conexion.sql.VarChar, NumeroFolios).input('Departamento', _conexion.sql.VarChar, Departamento).input('NombreSolicitante', _conexion.sql.VarChar, NombreSolicitante).input('PlacaSolicitante', _conexion.sql.VarChar, PlacaSolicitante).input('Año', _conexion.sql.VarChar, Año).input('Firma', _conexion.sql.VarChar, Firma).input('Observaciones', _conexion.sql.VarChar, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createLibroDigital);

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

  return function postLibroDigital(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postLibroDigital = postLibroDigital;

var putLibroDigital = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, NumeroExpediente, FechaHora, NumeroFolios, Departamento, NombreSolicitante, PlacaSolicitante, Año, Firma, Observaciones, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, NumeroExpediente = _req$body2.NumeroExpediente, FechaHora = _req$body2.FechaHora, NumeroFolios = _req$body2.NumeroFolios, Departamento = _req$body2.Departamento, NombreSolicitante = _req$body2.NombreSolicitante, PlacaSolicitante = _req$body2.PlacaSolicitante, Año = _req$body2.Año, Firma = _req$body2.Firma, Observaciones = _req$body2.Observaciones, UbicacionFisica = _req$body2.UbicacionFisica;
            id = req.params.id;
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context3.sent;
            _context3.next = 8;
            return pool.request().input('NumeroExpediente', _conexion.sql.VarChar, NumeroExpediente).input('FechaHora', _conexion.sql.VarChar, FechaHora).input('NumeroFolios', _conexion.sql.VarChar, NumeroFolios).input('Departamento', _conexion.sql.VarChar, Departamento).input('NombreSolicitante', _conexion.sql.VarChar, NombreSolicitante).input('PlacaSolicitante', _conexion.sql.VarChar, PlacaSolicitante).input('Año', _conexion.sql.VarChar, Año).input('Firma', _conexion.sql.VarChar, Firma).input('Observaciones', _conexion.sql.VarChar, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateLibroDigital);

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

  return function putLibroDigital(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //CRUD INV REQUERIMIENTOS


exports.putLibroDigital = putLibroDigital;

var getINvRequerimientos = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllInvRequerimientos);

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

  return function getINvRequerimientos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getINvRequerimientos = getINvRequerimientos;

var postINvRequerimientos = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, NumeroRequerimiento, Imputados, Observaciones, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, NumeroRequerimiento = _req$body3.NumeroRequerimiento, Imputados = _req$body3.Imputados, Observaciones = _req$body3.Observaciones, UbicacionFisica = _req$body3.UbicacionFisica;
            _context5.prev = 1;
            _context5.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context5.sent;
            _context5.next = 7;
            return pool.request().input('NumeroRequerimiento', _conexion.sql.VarChar, NumeroRequerimiento).input('Imputados', _conexion.sql.Text, Imputados).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createInvRequerimiento);

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

  return function postINvRequerimientos(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.postINvRequerimientos = postINvRequerimientos;

var putINvRequerimientos = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body4, NumeroRequerimiento, Imputados, Observaciones, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body4 = req.body, NumeroRequerimiento = _req$body4.NumeroRequerimiento, Imputados = _req$body4.Imputados, Observaciones = _req$body4.Observaciones, UbicacionFisica = _req$body4.UbicacionFisica;
            id = req.params.id;
            _context6.prev = 2;
            _context6.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context6.sent;
            _context6.next = 8;
            return pool.request().input('NumeroRequerimiento', _conexion.sql.VarChar, NumeroRequerimiento).input('Imputados', _conexion.sql.Text, Imputados).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateInvRequerimiento);

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

  return function putINvRequerimientos(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //CRUD VHS


exports.putINvRequerimientos = putINvRequerimientos;

var getVHS = /*#__PURE__*/function () {
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
            return pool.request().query(_consultas["default"].getAllVHS);

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

  return function getVHS(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getVHS = getVHS;

var postVHS = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body5, Cantidad, Descripcion, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body5 = req.body, Cantidad = _req$body5.Cantidad, Descripcion = _req$body5.Descripcion, UbicacionFisica = _req$body5.UbicacionFisica;
            _context8.prev = 1;
            _context8.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context8.sent;
            _context8.next = 7;
            return pool.request().input('Cantidad', _conexion.sql.Int, Cantidad).input('Descripcion', _conexion.sql.Text, Descripcion).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createVHS);

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

  return function postVHS(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.postVHS = postVHS;

var putVHS = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var _req$body6, Cantidad, Descripcion, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body6 = req.body, Cantidad = _req$body6.Cantidad, Descripcion = _req$body6.Descripcion, UbicacionFisica = _req$body6.UbicacionFisica;
            id = req.params.id;
            _context9.prev = 2;
            _context9.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context9.sent;
            _context9.next = 8;
            return pool.request().input('Cantidad', _conexion.sql.Int, Cantidad).input('Descripcion', _conexion.sql.Text, Descripcion).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateVHS);

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

  return function putVHS(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}(); //CRUD CASETH


exports.putVHS = putVHS;

var getCASETH = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context10.sent;
            _context10.next = 6;
            return pool.request().query(_consultas["default"].getAllCASETH);

          case 6:
            result = _context10.sent;
            res.json(result.recordset);
            _context10.next = 14;
            break;

          case 10:
            _context10.prev = 10;
            _context10.t0 = _context10["catch"](0);
            res.status(500);
            res.send(_context10.t0.message);

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 10]]);
  }));

  return function getCASETH(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.getCASETH = getCASETH;

var postCASETH = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var _req$body7, Cantidad, Marca, Descripcion, Tipo, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body7 = req.body, Cantidad = _req$body7.Cantidad, Marca = _req$body7.Marca, Descripcion = _req$body7.Descripcion, Tipo = _req$body7.Tipo, UbicacionFisica = _req$body7.UbicacionFisica;
            _context11.prev = 1;
            _context11.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context11.sent;
            _context11.next = 7;
            return pool.request().input('Cantidad', _conexion.sql.Int, Cantidad).input('Marca', _conexion.sql.VarChar, Marca).input('Descripcion', _conexion.sql.VarChar, Descripcion).input('Tipo', _conexion.sql.VarChar, Tipo).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createCASEHT);

          case 7:
            res.send({
              "status": 200,
              data: req.body
            });
            _context11.next = 14;
            break;

          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](1);
            res.status(500);
            res.send(_context11.t0.message);

          case 14:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 10]]);
  }));

  return function postCASETH(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.postCASETH = postCASETH;

var putCASETH = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var _req$body8, Cantidad, Marca, Descripcion, Tipo, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _req$body8 = req.body, Cantidad = _req$body8.Cantidad, Marca = _req$body8.Marca, Descripcion = _req$body8.Descripcion, Tipo = _req$body8.Tipo, UbicacionFisica = _req$body8.UbicacionFisica;
            id = req.params.id;
            _context12.prev = 2;
            _context12.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context12.sent;
            _context12.next = 8;
            return pool.request().input('Cantidad', _conexion.sql.Int, Cantidad).input('Marca', _conexion.sql.VarChar, Marca).input('Descripcion', _conexion.sql.VarChar, Descripcion).input('Tipo', _conexion.sql.VarChar, Tipo).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateCASETH);

          case 8:
            res.send({
              "status": 200,
              data: req.body
            });
            _context12.next = 15;
            break;

          case 11:
            _context12.prev = 11;
            _context12.t0 = _context12["catch"](2);
            res.status(500);
            res.send(_context12.t0.message);

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 11]]);
  }));

  return function putCASETH(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}(); //CRUD DVD


exports.putCASETH = putCASETH;

var getDVD = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context13.sent;
            _context13.next = 6;
            return pool.request().query(_consultas["default"].getAllDVD);

          case 6:
            result = _context13.sent;
            res.json(result.recordset);
            _context13.next = 14;
            break;

          case 10:
            _context13.prev = 10;
            _context13.t0 = _context13["catch"](0);
            res.status(500);
            res.send(_context13.t0.message);

          case 14:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 10]]);
  }));

  return function getDVD(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

exports.getDVD = getDVD;

var postDVD = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var _req$body9, Marca, Serie, Formato, Descripcion, Observaciones, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _req$body9 = req.body, Marca = _req$body9.Marca, Serie = _req$body9.Serie, Formato = _req$body9.Formato, Descripcion = _req$body9.Descripcion, Observaciones = _req$body9.Observaciones, UbicacionFisica = _req$body9.UbicacionFisica;
            _context14.prev = 1;
            _context14.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context14.sent;
            _context14.next = 7;
            return pool.request().input('Marca', _conexion.sql.VarChar, Marca).input('Serie', _conexion.sql.VarChar, Serie).input('Formato', _conexion.sql.VarChar, Formato).input('Descripcion', _conexion.sql.VarChar, Descripcion).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createDVD);

          case 7:
            res.send({
              "status": 200,
              data: req.body
            });
            _context14.next = 14;
            break;

          case 10:
            _context14.prev = 10;
            _context14.t0 = _context14["catch"](1);
            res.status(500);
            res.send(_context14.t0.message);

          case 14:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 10]]);
  }));

  return function postDVD(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

exports.postDVD = postDVD;

var putDVD = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var _req$body10, Marca, Serie, Formato, Descripcion, Observaciones, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$body10 = req.body, Marca = _req$body10.Marca, Serie = _req$body10.Serie, Formato = _req$body10.Formato, Descripcion = _req$body10.Descripcion, Observaciones = _req$body10.Observaciones, UbicacionFisica = _req$body10.UbicacionFisica;
            id = req.params.id;
            _context15.prev = 2;
            _context15.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context15.sent;
            _context15.next = 8;
            return pool.request().input('Marca', _conexion.sql.VarChar, Marca).input('Serie', _conexion.sql.VarChar, Serie).input('Formato', _conexion.sql.VarChar, Formato).input('Descripcion', _conexion.sql.VarChar, Descripcion).input('Observaciones', _conexion.sql.Text, Observaciones).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateDVD);

          case 8:
            res.send({
              "status": 200,
              data: req.body
            });
            _context15.next = 15;
            break;

          case 11:
            _context15.prev = 11;
            _context15.t0 = _context15["catch"](2);
            res.status(500);
            res.send(_context15.t0.message);

          case 15:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[2, 11]]);
  }));

  return function putDVD(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}(); //CRUD Objetos


exports.putDVD = putDVD;

var getObjeto = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return (0, _conexion.conexion)();

          case 3:
            pool = _context16.sent;
            _context16.next = 6;
            return pool.request().query(_consultas["default"].getAllObjetos);

          case 6:
            result = _context16.sent;
            res.json(result.recordset);
            _context16.next = 14;
            break;

          case 10:
            _context16.prev = 10;
            _context16.t0 = _context16["catch"](0);
            res.status(500);
            res.send(_context16.t0.message);

          case 14:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 10]]);
  }));

  return function getObjeto(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();

exports.getObjeto = getObjeto;

var postObjeto = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var _req$body11, Nombre, Descripcion, UbicacionFisica, pool;

    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _req$body11 = req.body, Nombre = _req$body11.Nombre, Descripcion = _req$body11.Descripcion, UbicacionFisica = _req$body11.UbicacionFisica;
            _context17.prev = 1;
            _context17.next = 4;
            return (0, _conexion.conexion)();

          case 4:
            pool = _context17.sent;
            _context17.next = 7;
            return pool.request().input('Nombre', _conexion.sql.VarChar, Nombre).input('Descripcion', _conexion.sql.Text, Descripcion).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).query(_consultas["default"].createObjeto);

          case 7:
            res.send({
              "status": 200,
              data: req.body
            });
            _context17.next = 14;
            break;

          case 10:
            _context17.prev = 10;
            _context17.t0 = _context17["catch"](1);
            res.status(500);
            res.send(_context17.t0.message);

          case 14:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[1, 10]]);
  }));

  return function postObjeto(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();

exports.postObjeto = postObjeto;

var putObjeto = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    var _req$body12, Nombre, Descripcion, UbicacionFisica, id, pool;

    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _req$body12 = req.body, Nombre = _req$body12.Nombre, Descripcion = _req$body12.Descripcion, UbicacionFisica = _req$body12.UbicacionFisica;
            id = req.params.id;
            _context18.prev = 2;
            _context18.next = 5;
            return (0, _conexion.conexion)();

          case 5:
            pool = _context18.sent;
            _context18.next = 8;
            return pool.request().input('Nombre', _conexion.sql.VarChar, Nombre).input('Descripcion', _conexion.sql.Text, Descripcion).input('UbicacionFisica', _conexion.sql.VarChar, UbicacionFisica).input('id', _conexion.sql.Int, id).query(_consultas["default"].updateObjeto);

          case 8:
            res.send({
              "status": 200,
              data: req.body
            });
            _context18.next = 15;
            break;

          case 11:
            _context18.prev = 11;
            _context18.t0 = _context18["catch"](2);
            res.status(500);
            res.send(_context18.t0.message);

          case 15:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[2, 11]]);
  }));

  return function putObjeto(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();

exports.putObjeto = putObjeto;