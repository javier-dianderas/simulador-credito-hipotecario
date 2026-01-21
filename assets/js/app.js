// Variables
const BASE_100_PORCENTUAL = 100;
const NRO_INTENTOS = 3;
const MENSAJE_MAXIMA_CANTIDAD_INTENTOS = `Ha superado el número máximo de intentos! Vuelva a iniciar el simulador presionando F5 en el navegador.`;
const NRO_CUOTAS_RANGO_INICIAL = 12;
const NRO_CUOTAS_RANGO_FINAL = 360;

/**
 * @description Solicita un número mediante el Prompt del navegador, se realizan "N" intentos.
 * @param {string} mensaje - Mensaje que se muestra en el prompt del navegador.
 * @returns {number} El número devuelto por el prompt del navegador.
 * @example
 * const valorInmueble = ingresarNumero(`Ingrese el valor del inmueble. Por ejemplo: 400000`); // valorInmueble será null o un número
 */
const ingresarNumero = (mensaje) => {
    let dato;
    let nroIntento = 0;
    do {
        // Si supera el número de intentos devuelve valor null
        if (nroIntento >= NRO_INTENTOS) {
            return null;
        }
        dato = prompt(mensaje);
        nroIntento++;
        // Se intenta hasta que el valor ingresado por el usurio sea un número 
    }
    while (dato === null || dato.trim().length <= 0 || isNaN(Number(dato)));
    return Number(dato);
}

/**
 * @description Muestra un texto en consola.
 * @param {string} cadena - Texto a mostrar. 
 * @example
 * mostrarIngreso(`Valor Inmueble: ${valorInmueble}`);
 */
const mostrarIngreso = (cadena) => {
    console.log(cadena);
}

/**
 * @description Muestra una alerta de maximo número de intentos en caso el dato sea null, caso contrario se mostrará la cadena en consola.
 * @param {string} dato - Dato a validar.
 * @param {string} cadena - Mensaje que se muestra en caso el dato sea diferente de null.
 * @returns {null} null o nada.
 * @example
 * validarIngreso(valorInmueble, `Valor Inmueble: ${valorInmueble}`); // se devolverá null o nada
 */
const validarIngreso = (dato, cadena) => {
    if (dato === null) {
        alert(MENSAJE_MAXIMA_CANTIDAD_INTENTOS);
        return null;
    }
    else {
        mostrarIngreso(cadena);
    }
}

/**
 * @description Valida que el numero sea mayor a 0, caso contrario se muestra el mensaje en consola y devuelve null.
 * @param {number} numero - Número a validar.
 * @param {string} mensaje - Mensaje que se muestra en caso el numero sea menor o igual a cero.
 * @returns {null} null o nada.
 * @example
 * validarNumeroMayorACero(valorInmueble, `El valor del inmueble debe ser mayor a 0.`) // se devolverá null o nada
 */
const validarNumeroMayorACero = (numero, mensaje) => {
    if (numero <= 0) {
        console.log(mensaje);
        return null;
    }
}

/**
 * @description Valida que un numero este en un rango de números (limiteInferior y limiteSuperior), en caso contrario se muestra un mensaje en consola y se devuelve null.
 * @param {number} numero - Número a validar.
 * @param {number} limiteInferior - Número inferior a validar.
 * @param {number} limiteSuperior - Número superior a validar.
 * @param {string} mensaje - Mensaje que se muestra en caso el numero sea menor al límite inferior o mayor al límite superior.
 * @returns {null} null o nada.
 * @example
 * validarNumeroRango(nroCuotas, 12, 240, `El número de cuotas debe ser entre 12 y 360).`) // se devolverá null o nada
 */
const validarNumeroRango = (numero, limiteInferior, limiteSuperior, mensaje) => {
    if (numero < limiteInferior || numero > limiteSuperior) {
        console.log(mensaje);
        return null;
    }
}

/**
 * @description Valida que la cuota inicial sea menor al valor del inmueble, en caso contrario se muestra un mensaje en consola y se devuelve null.
 * @param {number} valorInmueble - Valor del inmueble.
 * @param {number} cuotaInicial - Valor de la cuota inicial.
 * @param {string} mensaje - Mensaje que se muestra en caso la cuota inicial sea mayor o igual al valor del inmueble.
 * @returns {null} null o nada.
 * @example
 * validarCuotaInicial(400000, 100000, `La cuota inicial no puede ser mayor o igual al valor del inmueble.`) // se devolverá null o nada
 */
const validarCuotaInicial = (valorInmueble, cuotaInicial, mensaje) => {
    if (cuotaInicial >= valorInmueble) {
        console.log(mensaje);
        return null;
    }
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
 let seguroBienMensual = obtenerSeguroBienMensual(valorInmueble, seguroBienAnualPorcentaje, 100); // seguroBienMensual obtiene el monto del seguro mensual del inmueble
 */
const obtenerSeguroBienMensual = (valorInmueble, seguroBienAnualPorcentaje, basePorcentual) => {
    //Seguro del bien mensual (fijo): Se calcula con la siguiente formula (ValorBien * SegurobienAnual) / 12 donde ValorBien = valor del bien y seguroBienAnual = porcentaje del bien para asegurarlo
    let seguroBienAnual = seguroBienAnualPorcentaje / basePorcentual;
    let seguroBienMensualFijo = (valorInmueble * seguroBienAnual) / 12;
    return seguroBienMensualFijo;
}

/**
 * @description Genera el cronograma de cuotas del crédito hipotecario.
 * @param {number} montoCredito - Monto del crédito.
 * @param {Date} fechaDesembolso - Fecha de desembolso del crédito. 
 * @param {number} nroCuotas - Número de cuotas para el crédito. 
 * * @param {number} seguroDesgravamenMensual - Seguro de desgravamen mensual. 
 * * @param {number} cuotaBaseSinSeguros - Cuota base de la cuota. 
 * * @param {number} seguroBienMensual - Seguro del bien mensual. 
 * * @param {number} tasaMensual - TEA mensual. 
 * @returns {Array} Arreglo de cuotas.
 * @example
 let cuotas = simularCronograma(300000, new Date(), 240, seguroDesgravamenMensual, cuotaBase, seguroBienMensual, tasaMensual); // cuotas obtiene las cuotas del cronograma
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
        const cuota = {
            nroCuota: nroCuota,
            fechaVencimiento: fechaVencimiento,
            amortizacion: amortizacion,
            interes: interes,
            seguroDesgravamen: seguroDesgravamen,
            seguroBien: seguroBienMensual,
            montoCuota: montoCuota,
            saldoCapital: saldoCapital
        };

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
 mostrarCronograma(cuotas);
 */
const mostrarCronograma = (cuotas) => {
    console.log(`\nSIMULACIÓN DE CUOTAS\n`);
    console.table(cuotas);
}

/**
 * @description Ejecuta todo el código del simulador.
 * @example
 app();
 */
const app = () => {

    let cuotaInicial;
    let teaPorcentaje;
    let nroCuotas;
    // La fecha de desembolso es la fecha en la que se simula el cronograma
    let fechaDesembolso = new Date();
    let seguroDesgravamenMensualPorcentaje;
    let valorInmueble;
    let seguroBienAnualPorcentaje;

    let simularConDatosPrueba = confirm(`¿Desea simular el cronograma con datos de prueba?`);
    console.log(`DATOS DEL CRÉDITO HIPOTECARIO`);
    if (simularConDatosPrueba) {
        valorInmueble = Number(400000);
        mostrarIngreso(`Valor Inmueble: ${valorInmueble}`);
        cuotaInicial = Number(100000);
        mostrarIngreso(`Cuota Inicial: ${cuotaInicial}`);
        teaPorcentaje = Number(8);
        mostrarIngreso(`TEA: ${teaPorcentaje} %`);
        nroCuotas = Number(240);
        mostrarIngreso(`Nro. Cuotas: ${nroCuotas}`);
        seguroDesgravamenMensualPorcentaje = Number(0.03);
        mostrarIngreso(`Seguro Desgravamen Mensual: ${seguroDesgravamenMensualPorcentaje} %`);
        seguroBienAnualPorcentaje = Number(0.3);
        mostrarIngreso(`Seguro Inmueble: ${seguroBienAnualPorcentaje} %`);
    }
    else {
        valorInmueble = ingresarNumero(`Ingrese el valor del inmueble. Por ejemplo: 400000`);
        if (validarIngreso(valorInmueble, `Valor Inmueble: ${valorInmueble}`) === null
            || validarNumeroMayorACero(valorInmueble, `El valor del inmueble debe ser mayor a 0.`) === null) {
            return;
        }
        cuotaInicial = ingresarNumero(`Ingrese la cuota inicial. Por ejemplo: 100000`);
        if (validarIngreso(cuotaInicial, `Cuota Inicial: ${cuotaInicial}`) === null
            || validarNumeroMayorACero(cuotaInicial, `La cuota inicial debe ser mayor a 0.`) === null
            || validarCuotaInicial(valorInmueble, cuotaInicial, `La cuota inicial no puede ser mayor o igual al valor del inmueble.`) === null) {
            return;
        }
        teaPorcentaje = ingresarNumero(`Ingrese la TEA (%). Por ejemplo: 8`);
        if (validarIngreso(teaPorcentaje, `TEA: ${teaPorcentaje} %`) === null
            || validarNumeroMayorACero(teaPorcentaje, `La TEA (%) debe ser mayor a 0.`) === null) {
            return;
        }
        nroCuotas = ingresarNumero(`Ingrese el número de cuotas (entre ${NRO_CUOTAS_RANGO_INICIAL} y ${NRO_CUOTAS_RANGO_FINAL}). Por ejemplo: 240`);
        if (validarIngreso(nroCuotas, `Nro. Cuotas: ${nroCuotas}`) === null
            || validarNumeroRango(nroCuotas, NRO_CUOTAS_RANGO_INICIAL, NRO_CUOTAS_RANGO_FINAL, `El número de cuotas debe ser entre 12 y 360).`) === null) {
            return;
        }
        seguroDesgravamenMensualPorcentaje = ingresarNumero(`Ingrese el porcentaje del seguro de desgravamen mensual (%). Por ejemplo: 0.03`);
        if (validarIngreso(seguroDesgravamenMensualPorcentaje, `Seguro Desgravamen Mensual: ${seguroDesgravamenMensualPorcentaje} %`) === null
            || validarNumeroMayorACero(seguroDesgravamenMensualPorcentaje, `El porcentaje del desgravamen mensual (%) debe ser mayor a 0.`) === null) {
            return;
        }
        seguroBienAnualPorcentaje = ingresarNumero(`Ingrese el porcentaje de seguro del inmueble (%). Por ejemplo: 0.3`);
        if (validarIngreso(seguroBienAnualPorcentaje, `Seguro Inmueble: ${seguroBienAnualPorcentaje} %`) === null
            || validarNumeroMayorACero(seguroBienAnualPorcentaje, `El porcentaje de seguro del inmueble (%) debe ser mayor a 0.`) === null) {
            return;
        }
    }

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

// Se ejecuta la simulación
app();