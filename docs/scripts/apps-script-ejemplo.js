function procesarDatosERP() {
  const hojaOrigen = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Datos_ERP");
  const hojaDestino = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Datos_Procesados");

  const datos = hojaOrigen.getDataRange().getValues();

  if (datos.length <= 1) {
    Logger.log("No hay datos para procesar.");
    return;
  }

  const encabezados = datos[0];
  const registros = datos.slice(1);

  const datosProcesados = registros.map(function(fila) {
    return fila.map(function(valor) {
      if (typeof valor === "string") {
        return valor.trim().toUpperCase();
      }
      return valor;
    });
  });

  hojaDestino.clearContents();
  hojaDestino.getRange(1, 1, 1, encabezados.length).setValues([encabezados]);
  hojaDestino.getRange(2, 1, datosProcesados.length, encabezados.length).setValues(datosProcesados);
}
