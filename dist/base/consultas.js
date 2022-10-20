"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  getAllExpedientes_LEITZ: 'SELECT * FROM LEITZ_Regionales',
  createExpediente_LEITZ: 'INSERT INTO LEITZ_Regionales \
                            VALUES (@NumeroExpediente ,@Anio ,@Imputados,@Sinopsis,@Observaciones,@Id_Regional,@LEITZ, @UbicacionFisica)',
  getExpediente_LEITZ: 'SELECT * FROM LEITZ_Regionales WHERE Id=@id',
  deleteExpediente_LEITZ: 'DELETE FROM LEITZ_Regionales WHERE Id=@id',
  updateExpediente_LEITZ: 'UPDATE LEITZ_Regionales \
    SET  NumeroExpediente = @NumeroExpediente, Año = @Año, Imputados = @Imputados,\
    Sinopsis=@Sinopsis, Observaciones=@Observaciones, Id_Regional=@Id_Regional, LEITZ=@LEITZ,UbicacionFisica=@UbicacionFisica\
    WHERE Id=@id',
  searchGeneral: 'EXEC BUSQUEDA_GENERAL @criterio',
  viewHistory: 'SELECT * FROM HistorialBusquedas',
  setHistory: 'INSERT INTO HistorialBusquedas  VALUES(@NumeroFolio,@Valor,@Fecha)',
  getAllUsuarios: 'SELECT * FROM Usuarios',
  getAllBitacora: 'SELECT * FROM Bitacora',
  getAllExpedientesAnalisis: 'SELECT * FROM LEITZ_Analisis',
  getAllExpTeg: 'SELECT * FROM Expedientes_Tegu_Actuales',
  getAllFichasOrden: 'SELECT * FROM Fichas_Orden',
  getAllFichas2009: 'SELECT * FROM Fichas_DLCN_2009',
  getAllPQ: 'SELECT * FROM Precursores_Quimicos',
  getAllAR: 'SELECT * FROM Alto_Rendimiento',
  getAllReserva: 'SELECT * FROM Reserva',
  getAllCD: 'SELECT * FROM Casos_Diversos_LEITZ',
  getAllI: 'SELECT * FROM Casos_Infragantis',
  getAllSN: 'SELECT * FROM Casos_S_N',
  getAllRequerimientos: 'SELECT * FROM Requerimientos',
  getAllDocDiversos: 'SELECT * FROM Documentos_Diversos',
  getAllInformesGiras: 'SELECT * FROM Informes_Giras',
  getAllDocDireccion: 'SELECT * FROM Documentos_Direccion',
  getAllDocDireccionLEITZ: 'SELECT * FROM Documentos_Direccion_LEITZ',
  getAllAvionetasLEITZ: 'SELECT * FROM LEITZ_Avionetas',
  getAllAvionetasMatricula: 'SELECT * FROM Avionetas_Matricula',
  getAllAvionetasRegistro: 'SELECT * FROM Avionetas',
  getAllNavalesL: 'SELECT * FROM LEITZ_Navales',
  getAllNavalesN: 'SELECT *  FROM Navales',
  getAllLibroDigital: 'SELECT * FROM Libro_Digital',
  getAllInvRequerimientos: 'SELECT * FROM Inventario_Requerimientos',
  getAllVHS: 'SELECT * FROM Listado_VHS',
  getAllCASETH: 'SELECT * FROM Caseth',
  getAllDVD: 'SELECT * FROM CD_DVD',
  getAllObjetos: 'SELECT * FROM Inventario_Objetos',
  getAllEmbarcaciones: 'SELECT * FROM Embarcaciones',
  getAllTripulantes: 'SELECT * FROM Tripulantes',
  getRegionales: 'SELECT * FROM Regionales',
  createExpediente_Analisis: 'INSERT INTO LEITZ_Analisis \
                                VALUES(@MarcaLEITZ,@TituloLomo,@Contenido,@Observaciones,@UbicacionFisica)',
  createExp_Teg: 'INSERT INTO Expedientes_Tegu_Actuales \
                   VALUES(@NumeroExpediente,@Nombre,\
                   @Sinopsis,@Observaciones,@Folios,@Año,@LEITZ,@UbicacionFisica)',
  createFicha: 'INSERT INTO Fichas_Orden\
                 VALUES(@NumeroFicha,@Nombre,@Sinopsis,\
                 @Caso,@Observaciones,@UbicacionFisica)',
  createPQ: "INSERT INTO Precursores_Quimicos \
              VALUES(@NumeroCasoFiscalia,@NumeroCasoDLCN,@Imputados,@Tomos,@Folios,@Observaciones,@UbicacionFisica)",
  createAR: "INSERT INTO Alto_Rendimiento\
              VALUES (@NumeroCaso,@Fecha,@Imputados,@Sinopsis,@Observaciones,@LEITZ,@UbicacionFisica)",
  createReserva: "INSERT INTO Reserva\
                   VALUES (@NumeroCaso,@Imputados,@TotalTomos,@UbicacionFisica)",
  createDiversosLEITZ: "INSERT INTO Casos_Diversos_LEITZ\
                            VALUES(@NumeroCaso,@Fecha,@Investigados,@Sinopsis,@Observaciones,@LEITZ,@UbicacionFisica)",
  createInfragantis: "INSERT INTO Casos_Infragantis\
                       VALUES (@NumeroCaso,@Fecha,@Imputados,@Sinopsis,@Observaciones,@LEITZ,@UbicacionFisica)",
  createSN: "INSERT INTO Casos_S_N\
              VALUES (@NumeroCaso,@Fecha,@Imputados,@Sinopsis,@Observaciones,@LEITZ,@UbicacionFisica)",
  createRequerimiento: 'INSERT INTO Requerimientos\
                            VALUES (@NumeroRequerimiento,@Imputados,@Delito,@Recibe,@regional,@FechaRequerimiento,@FiscalAsignado,\
                                @FechaEntregaFESCO,@Observaciones,@Año,@UbicacionFisica)',
  createDocDiverso: "INSERT INTO Documentos_Diversos\
                      VALUES(@TipoDocumento,@Descripcion,@Observaciones,@Fecha,@UbicacionFisica)",
  createAvionetaLEITZ: "INSERT INTO LEITZ_Avionetas\
                         VALUES (@Codigo,@Investigados,@Descripcion,@CasosRelacionados,@LEITZ,@UbicacionFisica)",
  createAvionetaMatricula: "INSERT INTO Avionetas_Matricula\
                                VALUES (@Matricula,@Fecha,@Bandera,@Lugar,@Sospechosos,@Nacionalidad,@Situacion,@Observaciones,@UbicacionFisica)",
  createAvionetasRegistro: "INSERT INTO Avionetas\
                            VALUES (@NumeroRegistro,@Fecha,@Lugar,@Coordenadas,@Delito,@Sospechosos,@Matricula,@Alias,\
                                    @Nacionalidad,@SituacionActual,@Observaciones,@UbicacionFisica)",
  createNavalesLEITZ: "INSERT INTO LEITZ_Navales\
                        VALUES(@Nomenclatura,@Ubicacion,@TipoDocumento,@Fecha,@Sinopsis,@LEITZ,@UbicacionFisica)",
  createNavalesNormales: "INSERT INTO Navales\
                           VALUES(@Codigo,@FechaInforme,@Lugar,@Detectives,@Nombres,@NombreEmbarcacion, \
                                  @Descripcion,@Decomisos,@Observaciones,@UbicacionFisica)",
  createUser: "insert into Usuarios values (@Usuario,@Contraseña,@Empleado,@administrador)",
  createVHS: "INSERT INTO Listado_VHS\
               VALUES(@Cantidad,@Descripcion,@UbicacionFisica)",
  createCASEHT: "INSERT INTO Caseth\
                  VALUES (@Cantidad,@Marca,@Descripcion,@Tipo,@UbicacionFisica)",
  createDVD: "INSERT INTO CD_DVD\
                VALUES (@Marca,@Serie,@Formato,@Descripcion,@Observaciones,@UbicacionFisica)",
  createObjeto: "INSERT INTO Inventario_Objetos\
                   VALUES (@Nombre,@Descripcion,@UbicacionFisica)",
  createInvRequerimiento: "INSERT INTO Inventario_Requerimientos\
                            VALUES(@NumeroRequerimiento,@Imputados,@Observaciones,@UbicacionFisica)",
  createLibroDigital: "INSERT INTO Libro_Digital\
                        VALUES (@NumeroExpediente,@FechaHora,@NumeroFolios,@Departamento,@NombreSolicitante,\
                            @PlacaSolicitante,@Año,@Firma,@Observaciones,@UbicacionFisica)",
  createEmbarcacion: "INSERT INTO Embarcaciones\
        VALUES(@NumeroRegistro,@NombreEmbarcacion,@NombreCapitan,@CantidadTripulantes,@CantidadMotores,@Marca,@series,@color,@BanderaMatricula,\
        @ColorEmbarcacion,@LicenciaCapitan,@FechaInspeccion,@LugarInspecion,@MotoresCompradosEn,@HP,@Observaciones,@UbicacionFisica)",
  createTripulante: "INSERT INTO Tripulantes\
                      VALUES (@Identidad,@nombre,@NumeroRegistro,@Pasaporte,@Nacionalidad)",
  createLogin: "CREATE LOGIN @Usuario  \
	                WITH PASSWORD = @Contraseña \
                CREATE USER @Usuario FOR LOGIN @Usuario;\
                EXEC sp_defaultdb @Usuario, 'ExpedientesDLCN'",
  updateExpedientes_Analisis: 'UPDATE LEITZ_Analisis \
    SET MarcaLEITZ=@MarcaLEITZ,	TituloLomo=@TituloLomo,	 Contenido=@Contenido,Observaciones=@Observaciones,UbicacionFisica=@UbicacionFisica\
    WHERE Id=@id',
  updateExpTeg: 'UPDATE Expedientes_Tegu_Actuales \
    SET NumeroExpediente=@NumeroExpediente,  Nombre=@Nombre, Sinopsis=@Sinopsis, \
    Observaciones=@Observaciones, Folios=@Folios, Año=Año,LEITZ=@LEITZ, UbicacionFisica=@UbicacionFisica\
    WHERE Id=@id',
  updateFichasOrden: 'UPDATE Fichas_Orden \
    SET  NumeroFicha=@NumeroFicha,Nombre=@Nombre,Sinopsis=@Sinopsis,Caso=@Caso,Observaciones=@Observaciones,UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updatePQ: 'UPDATE Precursores_Quimicos \
    SET  NumeroCasoFiscalia=@NumeroCasoFiscalia, NumeroCasoDLCN=@NumeroCasoDLCN, Imputados=@Imputados,\
    Tomos=@Tomos, Folios=@Folios, Observaciones=@Observaciones,  UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateAR: 'UPDATE Alto_Rendimiento \
    SET  NumeroCaso=@NumeroCaso,Fecha=@Fecha, Imputados=@Imputados, Sinopsis=@Sinopsis,\
     Observaciones=@Observaciones, LEITZ=@LEITZ, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateR: 'UPDATE Reserva \
    SET  NumeroCaso=@NumeroCaso,Imputados=@Imputados, TotalTomos=@TotalTomos, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateDiversosLEITZ: 'UPDATE Casos_Diversos_LEITZ \
    SET NumeroCaso=@NumeroCaso, Fecha=@Fecha, Investigados=@Investigados, Sinopsis=@Sinopsis, Observaciones=Observaciones,\
    LEITZ=@LEITZ, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  UpdateInfragantis: 'UPDATE Casos_Infragantis\
    SET NumeroCaso=@NumeroCaso, Fecha=@Fecha, Imputados=@Imputados, Sinopsis=@Sinopsis, Observaciones=@Observaciones\
    ,LEITZ=@LEITZ, UbicacionFisica=@UbicacionFisica\   WHERE Numero=@id',
  updateSN: 'UPDATE Casos_S_N \
    SET  NumeroCaso=@NumeroCaso, Fecha=@Fecha, Imputados=@Imputados,  Sinopsis=@Sinopsis,\
    Observaciones=@Observaciones,LEITZ=@LEITZ, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateRequerimientos: 'UPDATE Requerimientos\
    SET NumeroRequerimiento=@NumeroRequerimiento, Imputados=@Imputados, Delito=@Delito, Recibe=@Recibe,\
    regional=@regional, FechaRequerimiento=@FechaRequerimiento,  FiscalAsignado=@FiscalAsignado,\
    FechaEntregaFESCO=@FechaEntregaFESCO, Observaciones=@Observaciones, Año=@Año, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateDocDiversos: 'UPDATE Documentos_Diversos \
    SET  TipoDocumento=@TipoDocumento, Descripcion=@Descripcion, Observaciones=@Observaciones, Fecha=@Fecha, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateAvionetaLEITZ: 'UPDATE LEITZ_Avionetas\
    SET Codigo=@Codigo, Investigados=@Investigados, Descripcion=@Descripcion,\
    CasosRelacionados=@CasosRelacionados, LEITZ=@LEITZ, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateAvionetaMatricula: 'UPDATE Avionetas_Matricula \
    SET Matricula=@Matricula, Fecha=@Fecha, Bandera=@Bandera, Lugar=@Lugar, Sospechosos=@Sospechosos,\
    Nacionalidad=@Nacionalidad, Situacion=@Situacion, Observaciones=@Observaciones, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateAvionetaRegistro: 'UPDATE Avionetas\
    SET  NumeroRegistro=@NumeroRegistro, Fecha=@Fecha, Lugar=@Lugar, Coordenadas=@Coordenadas, Delito=@Delito,\
    Sospechosos=@Sospechosos, Matricula=@Matricula, Alias=@Alias, Nacionalidad=@Nacionalidad, SituacionActual=@SituacionActual,\
    Observaciones=@Observaciones, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateLEITZ_Navales: 'UPDATE LEITZ_Navales \
    SET Nomenclatura=@Nomenclatura, Ubicacion=@Ubicacion, TipoDocumento=@TipoDocumento, Fecha=@Fecha,\
    Sinopsis=@Sinopsis, LEITZ=@LEITZ, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateNavales: 'UPDATE Navales \
    SET Codigo=@Codigo, FechaInforme=@FechaInforme, Lugar=@Lugar, Detectives=@Detectives, Nombres=@Nombres, NombreEmbarcacion=@NombreEmbarcacion,\
    Descripcion=@Descripcion, Decomisos=@Decomisos, Observaciones=@Observaciones, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateLibroDigital: 'UPDATE Libro_Digital \
    SET  NumeroExpediente=@NumeroExpediente, FechaHora=@FechaHora, NumeroFolios=@NumeroFolios, Departamento=@Departamento, \
    NombreSolicitante=@NombreSolicitante, PlacaSolicitante=@PlacaSolicitante, Año=@Año, Firma=@Firma,\
    Observaciones=@Observaciones, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateInvRequerimiento: 'UPDATE Inventario_Requerimientos \
    SET  NumeroRequerimiento=@NumeroRequerimiento, Imputados=@Imputados, Observaciones=@Observaciones, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateVHS: 'UPDATE Listado_VHS \
    SET Cantidad=@Cantidad,Descripcion=@Descripcion, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateCASETH: 'UPDATE Caseth \
    SET Cantidad=@Cantidad, Marca=@Marca, Descripcion=@Descripcion,Tipo=@Tipo, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateDVD: 'UPDATE CD_DVD \
    SET Marca=@Marca, Serie=@Serie, Formato=@Formato, Descripcion=@Descripcion, Observaciones=@Observaciones, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateObjeto: 'UPDATE Inventario_Objetos \
    SET Nombre=@Nombre,Descripcion=@Descripcion, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateEmbarcacion: 'UPDATE Embarcaciones \
    SET  NumeroRegistro=@NumeroRegistro, NombreEmbarcacion=@NombreEmbarcacion, NombreCapitan=@NombreCapitan, CantidadTripulantes=@CantidadTripulantes,\
    CantidadMotores=@CantidadMotores, Marca=@Marca, series=@series, color=@color,  BanderaMatricula=@BanderaMatricula,  ColorEmbarcacion=@ColorEmbarcacion,\
    LicenciaCapitan=@LicenciaCapitan, FechaInspeccion=FechaInspeccion, LugarInspecion=@LugarInspecion, MotoresCompradosEn=@MotoresCompradosEn, HP=@HP,\
    Observaciones=@Observaciones, UbicacionFisica=@UbicacionFisica\
    WHERE Numero=@id',
  updateTripulante: 'UPDATE Tripulantes \
    SET  Identidad=@Identidad, nombre=@nombre, NumeroRegistro=@NumeroRegistro, Pasaporte=@Pasaporte, Nacionalidad=@Nacionalidad\
    WHERE Numero=@id',
  getAuth: 'SELECT * FROM Usuarios\
             WHERE Usuario=@Usuario and Contraseña=@Contraseña'
};
exports["default"] = _default;