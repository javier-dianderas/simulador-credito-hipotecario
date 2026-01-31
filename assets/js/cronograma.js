const BASE_100_PORCENTUAL = 100;
const NRO_CUOTAS_RANGO_INICIAL = 12;
const NRO_CUOTAS_RANGO_FINAL = 360;

const formatLocalDate = (date) => {
    if (!(date instanceof Date)) return "";
    const dateParsed = new Date(date);
    const year = dateParsed.getFullYear();
    //getMonth() empieza con el indice en 0, por eso es necesario agregar 1
    const month = String(dateParsed.getMonth() + 1).padStart(2, "0");
    const day = String(dateParsed.getDay()).padStart(2, "0");
    return `${day}/${month}/${year}`;
}

/**
 * @description Valida que el numero sea mayor a 0, si es así devuelve true, caso contrario devuelve false.
 * @param {string} dato - Número a validar. 
 * @returns {boolean} true o false.
 * @example
 * validarNumeroMayorACero(400000) // se devolverá true o false
 */
const validarNumeroMayorACero = (dato) => {
    if (dato === null
        || dato.trim().length <= 0
        || isNaN(Number(dato))
        || Number(dato) <= 0) {
        return false;
    }
    return true;
}

/**
 * @description Valida que la cuota inicial sea menor al valor del inmueble, si es así devuelve true, caso contrario devuelve false.
 * @param {number} valorInmueble - Valor del inmueble.
 * @param {number} cuotaInicial - Valor de la cuota inicial.
 * @returns {boolean} true o false.
 * @example
 * validarCuotaInicial(400000, 100000) // se devolverá true o false
 */
const validarCuotaInicial = (valorInmueble, cuotaInicial) => {
    if (cuotaInicial >= valorInmueble) {
        return false;
    }
    return true;
}

/**
 * @description Valida que un numero este en un rango de números (limiteInferior y limiteSuperior), si es así devuelve true, caso contrario devuelve false.
 * @param {number} numero - Número a validar.
 * @param {number} limiteInferior - Número inferior a validar.
 * @param {number} limiteSuperior - Número superior a validar.
 * @returns {boolean} true o false.
 * @example
 * validarNumeroRango(240, 12, 360) // se devolverá true o false
 */
const validarNumeroRango = (dato, limiteInferior, limiteSuperior) => {
    if (dato === null
        || dato.trim().length <= 0
        || isNaN(Number(dato))
        || Number(dato) < limiteInferior
        || Number(dato) > limiteSuperior) {
        return false;
    }
    return true;
}

class DataEntry {
    constructor(dato, valido) {
        this.dato = dato;
        this.valido = valido;
        this.mensajes = [];
    }

    agregarMensaje(mensaje) {
        this.mensajes.push(mensaje);
    }
}

class Cuota {
    constructor(nroCuota, fechaVencimiento, amortizacion, interes, seguroDesgravamen, seguroBien, montoCuota, saldoCapital) {
        this.nroCuota = nroCuota;
        this.fechaVencimiento = fechaVencimiento;
        this.amortizacion = amortizacion;
        this.interes = interes;
        this.seguroDesgravamen = seguroDesgravamen;
        this.seguroBien = seguroBien;
        this.montoCuota = montoCuota;
        this.saldoCapital = saldoCapital;
    }

    get fechaVencimientoFormat() {
        return formatLocalDate(this.fechaVencimiento);
    }

    get amortizacionFixed() {
        return Number(this.amortizacion).toFixed(2);
    }

    get interesFixed() {
        return Number(this.interes).toFixed(2);
    }

    get seguroDesgravamenFixed() {
        return Number(this.seguroDesgravamen).toFixed(2);
    }

    get seguroBienFixed() {
        return Number(this.seguroBien).toFixed(2);
    }

    get montoCuotaFixed() {
        return Number(this.montoCuota).toFixed(2);
    }

    get saldoCapitalFixed() {
        return Number(this.saldoCapital).toFixed(2);
    }
}

class Simulador {

}

const obtenerValorInmueble = () => {
    const valorInmueble = document.getElementById("valorInmueble");
    const dataEntry = new DataEntry(valorInmueble.value, false);
    if (!validarNumeroMayorACero(valorInmueble.value)) {
        dataEntry.agregarMensaje(`El valor del inmueble debe ser mayor a 0.`);
    }
    else {
        dataEntry.dato = Number(valorInmueble.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

const obtenerCuotaInicial = (valorInmueble) => {
    const cuotaInicial = document.getElementById("cuotaInicial");
    const dataEntry = new DataEntry(cuotaInicial.value, false);
    if (!validarNumeroMayorACero(cuotaInicial.value)) {
        dataEntry.agregarMensaje(`La cuota inicial debe ser mayor a 0.`);
    }
    else if (!validarCuotaInicial(valorInmueble, Number(cuotaInicial.value))) {
        dataEntry.agregarMensaje(`La cuota inicial no puede ser mayor o igual al valor del inmueble.`);
    }
    else {
        dataEntry.dato = Number(cuotaInicial.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

const obtenerTeaPorcentaje = () => {
    const tea = document.getElementById("tea");
    const dataEntry = new DataEntry(tea.value, false);
    if (!validarNumeroMayorACero(tea.value)) {
        dataEntry.agregarMensaje(`La TEA (%) debe ser mayor a 0.`);
    }
    else {
        dataEntry.dato = Number(tea.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

const obtenerNroCuotas = () => {
    const nroCuotas = document.getElementById("nroCuotas");
    const dataEntry = new DataEntry(nroCuotas.value, false);
    if (!validarNumeroRango(nroCuotas.value, NRO_CUOTAS_RANGO_INICIAL, NRO_CUOTAS_RANGO_FINAL)) {
        dataEntry.agregarMensaje(`El número de cuotas debe ser entre 12 y 360.`);
    }
    else {
        dataEntry.dato = Number(nroCuotas.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

const obtenerSeguroDesgravamenMensualPorcentaje = () => {
    const seguroDesgravamenMensual = document.getElementById("seguroDesgravamenMensual");
    const dataEntry = new DataEntry(seguroDesgravamenMensual.value, false);
    if (!validarNumeroMayorACero(seguroDesgravamenMensual.value)) {
        dataEntry.agregarMensaje(`El porcentaje del desgravamen mensual (%) debe ser mayor a 0.`);
    }
    else {
        dataEntry.dato = Number(seguroDesgravamenMensual.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

const obtenerSeguroBienAnualPorcentaje = () => {
    const seguroInmueble = document.getElementById("seguroInmueble");
    const dataEntry = new DataEntry(seguroInmueble.value, false);
    if (!validarNumeroMayorACero(seguroInmueble.value)) {
        dataEntry.agregarMensaje(`El porcentaje de seguro del inmueble (%) debe ser mayor a 0.`);
    }
    else {
        dataEntry.dato = Number(seguroInmueble.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el monto del crédito a ser financiado.
 * @param {number} valorInmueble - Valor del inmueble.
 * @param {number} cuotaInicial - Valor de la cuota inicial. 
 * @returns {number} Resta del inmueble menos la cuota inicial.
 * @example
 * let montoCredito = obtenerMontoCredito(valorInmueble, cuotaInicial); // montoCredito obtiene el monto a ser financiado
 */
const obtenerMontoCredito = (valorInmueble, cuotaInicial) => {
    let montoCredito = valorInmueble - cuotaInicial;
    return montoCredito;
}

/**
 * @description Obtiene el seguro de desgravamen mensual entre la base porcentual.
 * @param {number} seguroDesgravamenMensualPorcentaje - Porcentaje del seguro de desgravamen mensual.
 * @param {number} basePorcentual - Base porcentual (100). 
 * @returns {number} División del seguro de desgravamen mensual entre la base porcentual (100).
 * @example
 * let seguroDesgravamenMensual = obtenerSeguroDesgravamenMensual(0.03, 100); // seguroDesgravamenMensual obtiene el seguro de desgravamen mensual entre 100
 */
const obtenerSeguroDesgravamenMensual = (seguroDesgravamenMensualPorcentaje, basePorcentual) => {
    let seguroDesgravamenMensual = seguroDesgravamenMensualPorcentaje / basePorcentual;
    return seguroDesgravamenMensual;
}

/**
 * @description Obtiene la TEA mensual.
 * @param {number} teaPorcentaje - Porcentaje de la TEA.
 * @param {number} basePorcentual - Base porcentual (100). 
 * @returns {number} TEA mensual.
 * @example
 * let tasaMensual = obtenerTeaMensual(8, 100); // tasaMensual obtiene la TEA en un mes
 */
const obtenerTeaMensual = (teaPorcentaje, basePorcentual) => {
    //Tasa mensual (TEA → TEM): Se calcula con la siguiente formula i=(1+TEA)^1/12−1; donde TEA = TEA en porcentaje
    let tea = teaPorcentaje / basePorcentual;
    let tasaMensual = ((1 + tea) ** (1 / 12)) - 1;
    return tasaMensual;
}

/**
 * @description Obtiene la cuota base (sin intereses, sin seguro, ni otros conceptos).
 * @param {number} montoCredito - Monto del crédito.
 * @param {number} tasaMensual - TEA mensual. 
 * @param {number} nroCuotas - Número de cuotas para el crédito. 
 * @returns {number} Cuota base.
 * @example
 * let cuotaBase = obtenerCuotaBase(montoCredito, tasaMensual, nroCuotas); // cuotaBase obtiene el monto capital de cada cuota 
 */
const obtenerCuotaBase = (montoCredito, tasaMensual, nroCuotas) => {
    //Cuota base sin seguros: Se calcula con la siguiente formula CuotaBase=P * i(1+i)^n / (1+i)^n−1​ donde P = monto, i = interés por periodo y n = número de cuotas
    let cuotaBaseSinSeguros = montoCredito * tasaMensual * ((1 + tasaMensual) ** nroCuotas) / (((1 + tasaMensual) ** nroCuotas) - 1);
    return cuotaBaseSinSeguros;
}

/**
 * @description Obtiene el monto del seguro mensual del inmueble.
 * @param {number} valorInmueble - Valor del inmueble.
 * @param {number} seguroBienAnualPorcentaje - Tasa anual del seguro del bien. 
 * @param {number} basePorcentual - Base porcentual. 
 * @returns {number} Monto del seguro mensual del inmueble.
 * @example
 * let seguroBienMensual = obtenerSeguroBienMensual(valorInmueble, seguroBienAnualPorcentaje, 100); // seguroBienMensual obtiene el monto del seguro mensual del inmueble
 */
const obtenerSeguroBienMensual = (valorInmueble, seguroBienAnualPorcentaje, basePorcentual) => {
    //Seguro del bien mensual (fijo): Se calcula con la siguiente formula (ValorBien * SegurobienAnual) / 12 donde ValorBien = valor del bien y seguroBienAnual = porcentaje del bien para asegurarlo
    let seguroBienAnual = seguroBienAnualPorcentaje / basePorcentual;
    let seguroBienMensualFijo = (valorInmueble * seguroBienAnual) / 12;
    return seguroBienMensualFijo;
}

const mostrarMensajeError = (dataEntry) => {
    if (!dataEntry.valido) {
        dataEntry.mensajes.forEach((mensaje) => {
            const listaMensajes = document.getElementById("listaMensajes");
            const mensajeLi = document.createElement("li");
            mensajeLi.innerText = mensaje;
            listaMensajes.appendChild(mensajeLi);
        });
        // const panelMensajes = document.getElementById("panelMensajes");
    }
}

const eliminarMensajesError = () => {
    const listaMensajes = document.querySelectorAll("li");
    listaMensajes.forEach((mensaje) => {
        mensaje.remove();
    });
}

const eliminarFilasResultado = () => {
    const filas = document.querySelectorAll("tbody tr");
    filas.forEach((fila) => {
        fila.remove();
    });
}

/**
 * @description Genera el cronograma de cuotas del crédito hipotecario.
 * @param {number} montoCredito - Monto del crédito.
 * @param {Date} fechaDesembolso - Fecha de desembolso del crédito. 
 * @param {number} nroCuotas - Número de cuotas para el crédito. 
 * @param {number} seguroDesgravamenMensual - Seguro de desgravamen mensual. 
 * @param {number} cuotaBaseSinSeguros - Cuota base de la cuota. 
 * @param {number} seguroBienMensual - Seguro del bien mensual. 
 * @param {number} tasaMensual - TEA mensual. 
 * @returns {Array} Arreglo de cuotas.
 * @example
 * let cuotas = simularCronograma(300000, new Date(), 240, seguroDesgravamenMensual, cuotaBase, seguroBienMensual, tasaMensual); // cuotas obtiene las cuotas del cronograma
 */
const simularCronograma = (montoCredito, fechaDesembolso, nroCuotas, seguroDesgravamenMensual, cuotaBaseSinSeguros, seguroBienMensual, tasaMensual) => {
    const cuotas = [];
    // Antes de iniciar la simulación el saldo de capital es el monto total del crédito
    let saldoCapitalAnterior = montoCredito;
    // Antes de iniciar la simulación la fecha de vencimiento es la fecha de desembolso
    let fechaVencimientoAnterior = fechaDesembolso;
    // Se itera por la cantidad de cuotas
    for (let nroCuota = 1; nroCuota <= nroCuotas; nroCuota++) {
        // Se calcula el monto del seguro de desgravamen
        let seguroDesgravamen = saldoCapitalAnterior * seguroDesgravamenMensual;
        // Se calcula el monto total de la cuota
        let montoCuota = cuotaBaseSinSeguros + seguroDesgravamen + seguroBienMensual;
        // Se calcula el interes de la cuota
        let interes = saldoCapitalAnterior * tasaMensual;
        // Se calcula el capital de la cuota
        let amortizacion = cuotaBaseSinSeguros - interes;
        // Se calcula el saldo capital despues de pagada la cuota
        let saldoCapital = saldoCapitalAnterior - amortizacion;
        // Se calcula la fecha de vencimiento de la cuota
        let fechaVencimiento = new Date(new Date(fechaVencimientoAnterior).setMonth(fechaVencimientoAnterior.getMonth() + 1));

        // Se crea el objeto cuota
        const cuota = new Cuota(
            nroCuota,
            fechaVencimiento,
            amortizacion,
            interes,
            seguroDesgravamen,
            seguroBienMensual,
            montoCuota,
            saldoCapital);

        // Se agrega al arreglo de cuotas
        cuotas.push(cuota);

        // Se actualiza el saldo capital para el calculo de la siguiente iteración
        saldoCapitalAnterior = saldoCapital;
        // Se actualiza la fecha de vencimiento para el calculo de la siguiente iteración
        fechaVencimientoAnterior = fechaVencimiento;
    }
    return cuotas;
}

/**
 * @description Muestra las cuotas del crédito hipotecario por consola.
 * @param {Array} cuotas - Array con todas las cuotas de un cronograma.
 * @example
 * mostrarCronograma(cuotas);
 */
const mostrarCronograma = (cuotas) => {
    // console.log(`\nSIMULACIÓN DE CUOTAS\n`);
    // console.table(cuotas);

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
}

const usarDatosPredeterminadosClick = () => {
    const valorInmueble = document.getElementById("valorInmueble");
    valorInmueble.value = "400000";
    const cuotaInicial = document.getElementById("cuotaInicial");
    cuotaInicial.value = "100000";
    const tea = document.getElementById("tea");
    tea.value = "8";
    const nroCuotas = document.getElementById("nroCuotas");
    nroCuotas.value = "240"
    const seguroDesgravamenMensual = document.getElementById("seguroDesgravamenMensual");
    seguroDesgravamenMensual.value = "0.03";
    const seguroInmueble = document.getElementById("seguroInmueble");
    seguroInmueble.value = "0.3";
}

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

const calcularClick = () => {
    let hayErrores = false;
    eliminarMensajesError();
    eliminarFilasResultado();
    // Se solicitan todos los datos necesarios para simular el cronograma del crédito hipotecario
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
    // La fecha de desembolso es la fecha en la que se simula el cronograma
    let fechaDesembolso = new Date();
    let seguroDesgravamenMensualPorcentaje = seguroDesgravamenMensualPorcentajeDataEntry.dato;
    let seguroBienAnualPorcentaje = seguroBienAnualPorcentajeDataEntry.dato;

    // Se calcula el monto a financiar
    let montoCredito = obtenerMontoCredito(valorInmueble, cuotaInicial);
    // Se calcula el seguro de desgravamen mensual
    let seguroDesgravamenMensual = obtenerSeguroDesgravamenMensual(seguroDesgravamenMensualPorcentaje, BASE_100_PORCENTUAL);
    // Se calcula la tasa de interés mensual
    let tasaMensual = obtenerTeaMensual(teaPorcentaje, BASE_100_PORCENTUAL);
    // Se calcula la cuota base (monto al cual se le agregan otros conceptos para obtener el total de la cuota)
    let cuotaBase = obtenerCuotaBase(montoCredito, tasaMensual, nroCuotas);
    // Se calcula el seguro del bien mensual
    let seguroBienMensual = obtenerSeguroBienMensual(valorInmueble, seguroBienAnualPorcentaje, BASE_100_PORCENTUAL);
    // Se simula el cronograma de cuotas del prestamo hipotecario
    let cuotas = simularCronograma(montoCredito, fechaDesembolso, nroCuotas, seguroDesgravamenMensual, cuotaBase, seguroBienMensual, tasaMensual);
    // Se muestra el cronograma simulado en consola
    mostrarCronograma(cuotas);
}

const usarDatosPredeterminados = document.getElementById("usarDatosPredeterminados");
usarDatosPredeterminados.addEventListener("click", usarDatosPredeterminadosClick);

const limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", limpiarClick);

const calcular = document.getElementById("calcular");
calcular.addEventListener("click", calcularClick);

