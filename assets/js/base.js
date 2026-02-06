/**
 * @description Formatea una fecha de tipo Date con el formato de la fecha local.
 * @param {date} date - Fecha a formatear. 
 * @returns {string} Vacío o fecha formateada con dd/mm/yyyy.
 * @example
 * formatearFechaLocal(new Date()) // se devolverá la fecha actual con formato dd/mm/yyyy
 */
const formatearFechaLocal = (date) => {
    // Si la fecha no es una instancia de Date, se devuelve vacío
    if (!(date instanceof Date)) return "";
    const dateParsed = new Date(date);
    const year = dateParsed.getFullYear();
    // getMonth() empieza con el indice en 0, por eso es necesario agregar 1
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

/**
 * Representa una entrada de datos de un formulario.
 * @class
 */
class DataEntry {
    /**
     * Crea un nuevo data entry.
     * @param {string} dato - Dato que ingresó el usuario.
     * @param {boolean} valido - Indica si el dato ingresado es válido o no.
     */
    constructor(dato, valido) {
        this.dato = dato;
        this.valido = valido;
        this.mensajes = [];
    }

    /**
     * @description Agrega un mensaje asociado al Data Entry. Se pueden agregar múltiples mensajes.
     * @param {string} mensaje - Mensaje a ser asociado al Data Entry.
     * @example
     * agregarMensaje(`El número debe ser mayor a 0.`)
     */
    agregarMensaje(mensaje) {
        this.mensajes.push(mensaje);
    }
}

/**
 * Representa una cuota del cronograma de pago del crédito hipotecario.
 * @class
 */
class Cuota {
    /**
     * Crea una cuota.
     * @param {number} nroCuota - Número de cuota. Empieza en 1.
     * @param {date} fechaVencimiento - Fecha de vencimiento del pago de la cuota.
     * @param {number} amortizacion - Monto de capital de la cuota.
     * @param {number} interes - Monto de interés de la cuota.
     * @param {number} seguroDesgravamen - Monto de seguro de desgravamen de la cuota.
     * @param {number} seguroBien - Monto de seguro del inmueble de la cuota.
     * @param {number} montoCuota - Monto total de la cuota.
     * @param {number} saldoCapital - Saldo capital después de pagar dicha cuota.
     */
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

    /**
     * @description Retorna this.fechaVencimiento en formado dd/mm/yyyy.     
     * @returns {string} fecha de vencimiento.
     */
    get fechaVencimientoFormat() {
        return formatearFechaLocal(this.fechaVencimiento);
    }

    /**
     * @description Retorna this.amortizacion con 2 decimales.     
     * @returns {string} amortizacion.
     */
    get amortizacionFixed() {
        return Number(this.amortizacion).toFixed(2);
    }

    /**
     * @description Retorna this.interes con 2 decimales.     
     * @returns {string} interes.
     */
    get interesFixed() {
        return Number(this.interes).toFixed(2);
    }

    /**
     * @description Retorna this.seguroDesgravamen con 2 decimales.     
     * @returns {string} seguroDesgravamen.
     */
    get seguroDesgravamenFixed() {
        return Number(this.seguroDesgravamen).toFixed(2);
    }

    /**
     * @description Retorna this.seguroBien con 2 decimales.     
     * @returns {string} seguroBien.
     */
    get seguroBienFixed() {
        return Number(this.seguroBien).toFixed(2);
    }

    /**
     * @description Retorna this.montoCuota con 2 decimales.     
     * @returns {string} montoCuota.
     */
    get montoCuotaFixed() {
        return Number(this.montoCuota).toFixed(2);
    }

    /**
     * @description Retorna this.saldoCapital con 2 decimales.     
     * @returns {string} saldoCapital.
     */
    get saldoCapitalFixed() {
        return Number(this.saldoCapital).toFixed(2);
    }
}

/**
 * Representa un crédito hipotecario que tiene un cronograma de pago.
 * @class
 */
class Credito {
    static BASE_100_PORCENTUAL = 100;

    /**
     * Crea una cuota.
     * @param {number} id - Identificador del crédito.
     * @param {date} fechaHora - Fecha en que se genera el crédito.
     * @param {number} valorInmueble - Valor del inmueble que será hipotecado.
     * @param {number} cuotaInicial - Valor de la cuota inicial.
     * @param {number} teaPorcentaje - Porcentaje de la TEA.
     * @param {number} nroCuotas - Número de cuotas para el crédito.
     * @param {number} seguroDesgravamenMensualPorcentaje - Porcentaje del seguro de desgravamen mensual.
     * @param {number} seguroInmueblePorcentaje - Porcentaje anual del seguro del bien.
     * @param {date} fechaDesembolso - Fecha de desembolso del crédito.
     */
    constructor(id, fechaHora, valorInmueble, cuotaInicial, teaPorcentaje, nroCuotas, seguroDesgravamenMensualPorcentaje, seguroInmueblePorcentaje, fechaDesembolso) {
        this.id = id;
        this.fechaHora = fechaHora;
        this.valorInmueble = valorInmueble;
        this.cuotaInicial = cuotaInicial;
        this.teaPorcentaje = teaPorcentaje;
        this.nroCuotas = nroCuotas;
        this.seguroDesgravamenMensualPorcentaje = seguroDesgravamenMensualPorcentaje;
        this.seguroInmueblePorcentaje = seguroInmueblePorcentaje;
        this.fechaDesembolso = fechaDesembolso;
        this.cuotas = [];
    }

    /**
     * @description Retorna this.fechaHora en formado dd/mm/yyyy.     
     * @returns {string} fechaHora.
     */
    get fechaHoraFormat() {
        return formatearFechaLocal(this.fechaHora);
    }

    /**
     * @description Retorna this.fechaDesembolso en formado dd/mm/yyyy.     
     * @returns {string} fechaDesembolso.
     */
    get fechaDesembolsoFormat() {
        return formatearFechaLocal(this.fechaDesembolso);
    }

    /**
     * @description Obtiene el monto del crédito a ser financiado. Resta el valor del inmueble menos la cuota inicial.
     * @returns {number} Monto del crédito.
     * @example
     * let montoCredito = obtenerMontoCredito(); // montoCredito obtiene el monto a ser financiado
     */
    obtenerMontoCredito() {
        let montoCredito = this.valorInmueble - this.cuotaInicial;
        return montoCredito;
    }

    /**
     * @description Obtiene la división del seguro de desgravamen mensual entre la base porcentual (100).
     * @returns {number} Seguro de desgravamen mensual.
     * @example
     * let seguroDesgravamenMensual = obtenerSeguroDesgravamenMensual(); // seguroDesgravamenMensual obtiene el seguro de desgravamen mensual
     */
    obtenerSeguroDesgravamenMensual() {
        let seguroDesgravamenMensual = this.seguroDesgravamenMensualPorcentaje / Credito.BASE_100_PORCENTUAL;
        return seguroDesgravamenMensual;
    }

    /**
     * @description Obtiene la división de la TEA entre la base porcentual dividido entre 12.
     * @returns {number} TEA mensual.
     * @example
     * let tasaMensual = obtenerTeaMensual(); // tasaMensual obtiene la TEM (tasa efectiva mensual)
     */
    obtenerTeaMensual() {
        //Tasa mensual (TEA → TEM): Se calcula con la siguiente formula i=(1+TEA)^1/12−1; donde TEA = TEA en porcentaje
        let tea = this.teaPorcentaje / Credito.BASE_100_PORCENTUAL;
        let tasaMensual = ((1 + tea) ** (1 / 12)) - 1;
        return tasaMensual;
    }

    /**
     * @description Obtiene la cuota base (sin intereses, sin seguro, ni otros conceptos).
     * @param {number} montoCredito - Monto del crédito.
     * @param {number} tasaMensual - TEM (tasa efectiva mensual).
     * @returns {number} Cuota base.
     * @example
     * let cuotaBase = obtenerCuotaBase(300000, 0.003); // cuotaBase obtiene el monto capital de cada cuota 
     */
    obtenerCuotaBase(montoCredito, tasaMensual) {
        //Cuota base sin seguros: Se calcula con la siguiente formula CuotaBase=P * i(1+i)^n / (1+i)^n−1​ donde P = monto, i = interés por periodo y n = número de cuotas
        let cuotaBaseSinSeguros = montoCredito * tasaMensual * ((1 + tasaMensual) ** this.nroCuotas) / (((1 + tasaMensual) ** this.nroCuotas) - 1);
        return cuotaBaseSinSeguros;
    }

    /**
     * @description Obtiene el monto del seguro mensual del inmueble.
     * @returns {number} Monto del seguro mensual del inmueble.
     * @example
     * let seguroBienMensual = obtenerSeguroBienMensual(); // seguroBienMensual obtiene el monto del seguro mensual del inmueble
     */
    obtenerSeguroBienMensual() {
        //Seguro del bien mensual (fijo): Se calcula con la siguiente formula (ValorBien * SegurobienAnual) / 12 donde ValorBien = valor del bien y seguroBienAnual = porcentaje del bien para asegurarlo
        let seguroBienAnual = this.seguroBienAnualPorcentaje / Credito.BASE_100_PORCENTUAL;
        let seguroBienMensualFijo = (this.valorInmueble * seguroBienAnual) / 12;
        return seguroBienMensualFijo;
    }

    /**
     * @description Genera el cronograma de cuotas del crédito hipotecario.
     * @example
     * simularCronograma();
     */
    simularCronograma() {
        // Se calcula el monto a financiar
        let montoCredito = this.obtenerMontoCredito();
        // Se calcula el seguro de desgravamen mensual
        let seguroDesgravamenMensual = this.obtenerSeguroDesgravamenMensual();
        // Se calcula la tasa de interés mensual
        let tasaMensual = this.obtenerTeaMensual();
        // Se calcula la cuota base (monto al cual se le agregan otros conceptos para obtener el total de la cuota)
        let cuotaBaseSinSeguros = this.obtenerCuotaBase(montoCredito, tasaMensual);
        // Se calcula el seguro del bien mensual
        let seguroBienMensual = this.obtenerSeguroBienMensual();

        const cuotas = [];
        // Antes de iniciar la simulación el saldo de capital es el monto total del crédito
        let saldoCapitalAnterior = montoCredito;
        // Antes de iniciar la simulación la fecha de vencimiento es la fecha de desembolso
        let fechaVencimientoAnterior = this.fechaDesembolso;
        // Se itera por la cantidad de cuotas
        for (let nroCuota = 1; nroCuota <= this.nroCuotas; nroCuota++) {
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

            console.log(fechaVencimiento);
            console.log(typeof fechaVencimiento);
            console.log(fechaVencimiento instanceof Date);

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
        // return cuotas;
        this.cuotas = cuotas;
    }
}

/**
 * Representa a la aplicación que genera un cronograma de pago, carga y guarda los créditos ya generados.
 * @class
 */
class Simulador {
    /**
     * Carga los créditos almacenados en local storage.     
     */
    constructor() {
        this.creditos = [];
        this.cargarCreditos();
    }

    /**
     * @description Guarda los créditos en el local storage
     * @example
     * guardarCreditos();
     */
    guardarCreditos() {
        if (this.creditos.length > 0) {
            const creditos = JSON.stringify(this.creditos);
            localStorage.setItem("creditos", creditos);
        }
    }

    /**
     * @description Carga los créditos del local storage en el array de créditos
     * @example
     * cargarCreditos();
     */
    cargarCreditos() {
        if (localStorage.getItem("creditos")) {
            this.creditos = JSON.parse(localStorage.getItem("creditos"));
        }
    }

    /**
     * @description Genera cronograma de pago y devuelve las cuotas. Si es un crédito existente actualiza el cronograma. Guarda el crédito en el local storage.
     * @param {date} fechaHora - Fecha en que se genera el crédito.
     * @param {number} valorInmueble - Valor del inmueble que será hipotecado.
     * @param {number} cuotaInicial - Valor de la cuota inicial.
     * @param {number} teaPorcentaje - Porcentaje de la TEA.
     * @param {number} nroCuotas - Número de cuotas para el crédito.
     * @param {number} seguroDesgravamenMensualPorcentaje - Porcentaje del seguro de desgravamen mensual.
     * @param {number} seguroBienAnualPorcentaje - Porcentaje anual del seguro del bien.
     * @param {date} fechaDesembolso - Fecha de desembolso del crédito.
     * @returns {Array} Devuelve el crédito si existe, sino devuelve undefined.
     * @example
     * let cuotas = generarCronograma(1); // credito obtiene el crédito existente
     */
    generarCronograma(fechaHora, valorInmueble, cuotaInicial, teaPorcentaje, nroCuotas, seguroDesgravamenMensualPorcentaje, seguroBienAnualPorcentaje, fechaDesembolso) {
        const credito = new Credito(this.creditos.length + 1, fechaHora, valorInmueble, cuotaInicial, teaPorcentaje, nroCuotas, seguroDesgravamenMensualPorcentaje, seguroBienAnualPorcentaje, fechaDesembolso);
        credito.simularCronograma();
        const creditoEncontrado = this.creditos.findIndex(c => c.id == credito.id);
        if (creditoEncontrado > -1) {
            this.creditos[creditoEncontrado] = credito;
        } else {
            this.creditos.push(credito);
        }
        this.guardarCreditos();
        return credito.cuotas;
    }

    /**
     * @description Obtiene el credito por su id.
     * @param {number} id - Identificador del crédito.
     * @returns {undefined|Credito} Devuelve el crédito si existe, sino devuelve undefined.
     * @example
     * let credito = obtenerCredito(1); // credito obtiene el crédito existente
     */
    obtenerCredito(id) {
        if (id) {
            return this.creditos.find(c => c.id == id);
        }
        return undefined;
    }
}