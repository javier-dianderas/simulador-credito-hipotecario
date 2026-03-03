/**
 * @description Valida que la cuota inicial sea menor al valor del inmueble, si es así devuelve true, caso contrario devuelve false.
 * @param {number} valorInmueble - Valor del inmueble.
 * @param {number} cuotaInicial - Valor de la cuota inicial.
 * @returns {boolean} true o false.
 * @example
 * validarCuotaInicial(400000, 100000) // se devolverá true
 */
const validarCuotaInicial = (valorInmueble, cuotaInicial) => {
    if (cuotaInicial >= valorInmueble) {
        return false;
    }
    return true;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto valorInmueble.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerValorInmueble() // se devolverá el objeto DataEntry
 */
const obtenerValorInmueble = () => {
    const valorInmueble = document.getElementById("valorInmueble");
    const dataEntry = new DataEntry(false, false);
    if (!validarNumeroMayorACero(valorInmueble.value)) {
        dataEntry.agregarMensaje(`El valor del inmueble debe ser mayor a 0.`);
    }
    else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(valorInmueble.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto cuotaInicial.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerCuotaInicial() // se devolverá el objeto DataEntry
 */
const obtenerCuotaInicial = (valorInmueble) => {
    const cuotaInicial = document.getElementById("cuotaInicial");
    const dataEntry = new DataEntry(false, false);
    if (!validarNumeroMayorACero(cuotaInicial.value)) {
        dataEntry.agregarMensaje(`La cuota inicial debe ser mayor a 0.`);
    }
    else if (!validarCuotaInicial(valorInmueble, Number(cuotaInicial.value))) {
        dataEntry.agregarMensaje(`La cuota inicial no puede ser mayor o igual al valor del inmueble.`);
    }
    else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(cuotaInicial.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto tea.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerTeaPorcentaje() // se devolverá el objeto DataEntry
 */
const obtenerTeaPorcentaje = () => {
    const tea = document.getElementById("tea");
    const dataEntry = new DataEntry(false, false);
    if (!validarNumeroMayorACero(tea.value)) {
        dataEntry.agregarMensaje(`La TEA (%) debe ser mayor a 0.`);
    }
    else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(tea.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto nroCuotas.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerNroCuotas() // se devolverá el objeto DataEntry
 */
const obtenerNroCuotas = () => {
    const nroCuotas = document.getElementById("nroCuotas");
    const dataEntry = new DataEntry(false, false);
    if (!validarNumeroRango(nroCuotas.value, NRO_CUOTAS_RANGO_INICIAL, NRO_CUOTAS_RANGO_FINAL)) {
        dataEntry.agregarMensaje(`El número de cuotas debe ser entre 12 y 360.`);
    }
    else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(nroCuotas.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto seguroDesgravamenMensual.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerSeguroDesgravamenMensualPorcentaje() // se devolverá el objeto DataEntry
 */
const obtenerSeguroDesgravamenMensualPorcentaje = () => {
    const seguroDesgravamenMensual = document.getElementById("seguroDesgravamenMensual");
    const dataEntry = new DataEntry(false, false);
    if (!validarNumeroMayorACero(seguroDesgravamenMensual.value)) {
        dataEntry.agregarMensaje(`El porcentaje del desgravamen mensual (%) debe ser mayor a 0.`);
    }
    else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(seguroDesgravamenMensual.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto seguroInmueble.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerSeguroBienAnualPorcentaje() // se devolverá el objeto DataEntry
 */
const obtenerSeguroBienAnualPorcentaje = () => {
    const seguroInmueble = document.getElementById("seguroInmueble");
    const dataEntry = new DataEntry(false, false);
    if (!validarNumeroMayorACero(seguroInmueble.value)) {
        dataEntry.agregarMensaje(`El porcentaje de seguro del inmueble (%) debe ser mayor a 0.`);
    }
    else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(seguroInmueble.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Muestra mensajes si el objeto DataEntry tiene uno o mas mensajes.
 * @example
 * mostrarMensajeError(dataEntry)
 */
const mostrarMensajeError = (dataEntry) => {
    if (!dataEntry.valido) {
        dataEntry.mensajes.forEach((mensaje) => {
            const listaMensajes = document.getElementById("listaMensajes");
            const mensajeLi = document.createElement("li");
            mensajeLi.innerText = mensaje;
            listaMensajes.appendChild(mensajeLi);
        });
    }
}

/**
 * @description Elimina la lista de mensajes si hubiera.
 * @example
 * eliminarMensajesError()
 */
const eliminarMensajesError = () => {
    const listaMensajes = document.querySelectorAll("li");
    listaMensajes.forEach((mensaje) => {
        mensaje.remove();
    });
}

/**
 * @description Elimina las filas de la tabla si hubiera.
 * @example
 * eliminarFilasResultado()
 */
const eliminarFilasResultado = () => {
    const filas = document.querySelectorAll("tbody tr");
    filas.forEach((fila) => {
        fila.remove();
    });
}

/**
 * @description Muestra las cuotas del crédito hipotecario en una tabla.
 * @param {Array} cuotas - Array con todas las cuotas generadas.
 * @param {Promise} - Promise para actualizar la tabla de cuotas.
 * @example
 * mostrarCronogramaPromise(cuotas);
 */
const mostrarCronogramaPromise = (cuotas) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            try {
                cuotas.forEach((cuota) => {
                    const filas = document.getElementById("filas");
                    const fila = document.createElement("tr");
                    // <td>Nro. cuota</td>
                    const nroCuota = document.createElement("td");
                    nroCuota.innerText = cuota.nroCuota;
                    fila.appendChild(nroCuota);
                    // <td>Fecha de vencimiento</td>
                    const fechaVencimiento = document.createElement("td");
                    fechaVencimiento.innerText = cuota.fechaVencimientoFormat;
                    fila.appendChild(fechaVencimiento);
                    // <td>Amortización</td>
                    const amortizacion = document.createElement("td");
                    amortizacion.innerText = cuota.amortizacionFixed;
                    fila.appendChild(amortizacion);
                    // <td>Interés</td>
                    const interes = document.createElement("td");
                    interes.innerText = cuota.interesFixed;
                    fila.appendChild(interes);
                    // <td>Seguro de desgravamen</td>
                    const seguroDesgravamen = document.createElement("td");
                    seguroDesgravamen.innerText = cuota.seguroDesgravamenFixed;
                    fila.appendChild(seguroDesgravamen);
                    // <td>Seguro del bien</td>
                    const seguroBien = document.createElement("td");
                    seguroBien.innerText = cuota.seguroBienFixed;
                    fila.appendChild(seguroBien);
                    // <td>Monto cuota</td>
                    const montoCuota = document.createElement("td");
                    montoCuota.innerText = cuota.montoCuotaFixed;
                    fila.appendChild(montoCuota);
                    // <td>Seguro del capital</td>
                    const saldoCapital = document.createElement("td");
                    saldoCapital.innerText = cuota.saldoCapitalFixed;
                    fila.appendChild(saldoCapital);
                    filas.appendChild(fila);
                });
                resolve(true);
            }
            catch (error) {
                reject(error);
            }

        }, 1000);
    })
}

/**
 * @description Asigna valores a las cajas de texto valorInmueble, cuotaInicial, tea, nroCuotas, seguroDesgravamenMensual y seguroInmueble.
 * @param {number} valorInmueble - Valor del inmueble.
 * @param {number} cuotaInicial - Valor de la cuota inicial.
 * @param {number} tea - Valor de la TEA.
 * @param {number} nroCuotas - Valor del número de cuotas.
 * @param {number} seguroDesgravamenMensual - Valor del seguro de desgravamen mensual.
 * @param {number} seguroInmueble - Valor del seguro del inmueble.
 * @example
 * mostrarDatos("400000", "100000", "8", "240", "0.03", "0.3") // se devolverá true
 */
const mostrarDatos = (valorInmueble, cuotaInicial, tea, nroCuotas, seguroDesgravamenMensual, seguroInmueble) => {
    const valorInmuebleInput = document.getElementById("valorInmueble");
    valorInmuebleInput.value = valorInmueble;
    const cuotaInicialInput = document.getElementById("cuotaInicial");
    cuotaInicialInput.value = cuotaInicial;
    const teaInput = document.getElementById("tea");
    teaInput.value = tea;
    const nroCuotasInput = document.getElementById("nroCuotas");
    nroCuotasInput.value = nroCuotas;
    const seguroDesgravamenMensualInput = document.getElementById("seguroDesgravamenMensual");
    seguroDesgravamenMensualInput.value = seguroDesgravamenMensual;
    const seguroInmuebleInput = document.getElementById("seguroInmueble");
    seguroInmuebleInput.value = seguroInmueble;
}


/**
 * @description Manejador del evento click para usar datos predeterminados.
 * @example
 * usarDatosPredeterminadosClick()
 */
const usarDatosPredeterminadosClick = () => {
    mostrarDatos("400000", "100000", "8", "240", "0.03", "0.3");
}

/**
 * @description Manejador del evento click para limpiar los datos.
 * @example
 * limpiarClick()
 */
const limpiarClick = () => {
    const valorInmueble = document.getElementById("valorInmueble");
    valorInmueble.value = "";
    const cuotaInicial = document.getElementById("cuotaInicial");
    cuotaInicial.value = "";
    const tea = document.getElementById("tea");
    tea.value = "";
    const nroCuotas = document.getElementById("nroCuotas");
    nroCuotas.value = ""
    const seguroDesgravamenMensual = document.getElementById("seguroDesgravamenMensual");
    seguroDesgravamenMensual.value = "";
    const seguroInmueble = document.getElementById("seguroInmueble");
    seguroInmueble.value = "";
    eliminarMensajesError();
    eliminarFilasResultado();
}

/**
 * @description Manejador del evento submit para calcular el cronograma de pago.
 * @example
 * calcularSubmit(event)
 */
const calcularSubmit = (event) => {
    event.preventDefault();

    let hayErrores = false;
    eliminarMensajesError();
    eliminarFilasResultado();
    // Se solicitan todos los datos necesarios para simular el cronograma del crédito hipotecario. Si alguno de los datos es inválido se muestra un mensaje de error.
    const valorInmuebleDataEntry = obtenerValorInmueble();
    if (!valorInmuebleDataEntry.valido) {
        mostrarMensajeError(valorInmuebleDataEntry);
        hayErrores = true;
    }
    const cuotaInicialDataEntry = obtenerCuotaInicial(valorInmuebleDataEntry.dato);
    if (!cuotaInicialDataEntry.valido) {
        mostrarMensajeError(cuotaInicialDataEntry);
        hayErrores = true;
    }
    const teaPorcentajeDataEntry = obtenerTeaPorcentaje();
    if (!teaPorcentajeDataEntry.valido) {
        mostrarMensajeError(teaPorcentajeDataEntry);
        hayErrores = true;
    }
    const nroCuotasDataEntry = obtenerNroCuotas();
    if (!nroCuotasDataEntry.valido) {
        mostrarMensajeError(nroCuotasDataEntry);
        hayErrores = true;
    }
    const seguroDesgravamenMensualPorcentajeDataEntry = obtenerSeguroDesgravamenMensualPorcentaje();
    if (!seguroDesgravamenMensualPorcentajeDataEntry.valido) {
        mostrarMensajeError(seguroDesgravamenMensualPorcentajeDataEntry);
        hayErrores = true;
    }
    const seguroBienAnualPorcentajeDataEntry = obtenerSeguroBienAnualPorcentaje();
    if (!seguroBienAnualPorcentajeDataEntry.valido) {
        mostrarMensajeError(seguroBienAnualPorcentajeDataEntry);
        hayErrores = true;
    }
    if (hayErrores) {
        return;
    }

    let valorInmueble = valorInmuebleDataEntry.dato;
    let cuotaInicial = cuotaInicialDataEntry.dato;
    let teaPorcentaje = teaPorcentajeDataEntry.dato;
    let nroCuotas = nroCuotasDataEntry.dato;
    let seguroDesgravamenMensualPorcentaje = seguroDesgravamenMensualPorcentajeDataEntry.dato;
    let seguroBienAnualPorcentaje = seguroBienAnualPorcentajeDataEntry.dato;

    Swal.fire({
        title: "¿Estás seguro que deseas calcular el cronograma?",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        denyButtonText: "Cancelar",
        confirmButtonColor: "rgb(200, 41, 37)",
        cancelButtonColor: "rgb(149, 177, 199)",
    }).then((result) => {
        if (result.isConfirmed) {

            // Se genera el cronograma
            const simulador = new Simulador();
            const now = DateTime.utc();
            const cuotas = simulador.generarCronograma(now, valorInmueble, cuotaInicial, teaPorcentaje, nroCuotas, seguroDesgravamenMensualPorcentaje, seguroBienAnualPorcentaje, now);
            // Se muestra el cronograma
            mostrarCronogramaPromise(cuotas)
                .then((resultado) => {
                    if (resultado) {
                        // Se muestra mensaje de confirmación en Toastify
                        Toastify({
                            text: "¡Cronograma generado exitosamente!",
                            gravity: "top",
                            position: "right",
                            close: true,
                            style: {
                                background: "rgba(11,156,49,0.8)"
                            }
                        }).showToast();
                    }
                })
                .catch((error) => {
                    console.warn("Ocurrió un error en calcularSubmit", error);

                    Toastify({
                        text: "No se pudo generar el cronograma. Vuelte a intentarlo mas tarde!",
                        gravity: "top",
                        position: "right",
                        close: true,
                        style: {
                            background: "rgba(156, 11, 11, 0.8)"
                        }
                    }).showToast();
                });

        }
    });
}

/**
 * @description Manejador del evento click para regresar a la página principal.
 * @example
 * regresarClick()
 */
const regresarClick = () => {
    document.location.href = "../../index.html";
}

// Agregar un manejador del evento click al botón usarDatosPredeterminados
const usarDatosPredeterminados = document.getElementById("usarDatosPredeterminados");
usarDatosPredeterminados.addEventListener("click", usarDatosPredeterminadosClick);

// Agregar un manejador del evento click al botón limpiar
const limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", limpiarClick);

// Agregar un manejador del evento submit en el formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", calcularSubmit);

// Agregar un manejador del evento click al botón regresar de la parte superior
const regresarSuperior = document.getElementById("regresarSuperior");
regresarSuperior.addEventListener("click", regresarClick);

// Agregar un manejador del evento click al botón regresar
const regresar = document.getElementById("regresar");
regresar.addEventListener("click", regresarClick);

/**
 * @description Manejador de la página principal. Si en el query string de la url hay un id, se busca el crédito
 * en el local storage, se muestran los datos de dicho crédito y su cronograma de pagos
 * @example
 * cronograma()
 */
const cronograma = () => {
    const queryString = document.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    if (id) {
        const simulador = new Simulador();
        const credito = simulador.obtenerCredito(id);
        if (credito !== undefined) {
            mostrarDatos(credito.valorInmueble, credito.cuotaInicial, credito.teaPorcentaje, credito.nroCuotas, credito.seguroDesgravamenMensualPorcentaje, credito.seguroInmueblePorcentaje); //credito.fechaDesembolso            
            const cuotas = credito.cuotas.map((c) => {
                return new Cuota(c.nroCuota, DateTime.fromISO(c.fechaVencimiento), c.amortizacion, c.interes, c.seguroDesgravamen, c.seguroBien, c.montoCuota, c.saldoCapital)
            });
            const usarDatosPredeterminados = document.getElementById("usarDatosPredeterminados");
            usarDatosPredeterminados.disabled = true;
            const calcular = document.getElementById("calcular");
            calcular.disabled = true;
            const limpiar = document.getElementById("limpiar");
            limpiar.disabled = true;
            mostrarCronogramaPromise(cuotas)
                .then((resultado) => {
                })
                .catch((error) => {
                    console.warn("Ocurrió un error en cronograma", error);
                });
        }
    }
}

// Ejecutar la función principal de la página
cronograma();