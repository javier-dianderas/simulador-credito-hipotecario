/**
 * @description Obtiene el valor ingresado en la caja de texto FechaDesde.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerFechaDesde() // se devolverá el objeto DataEntry
 */
const obtenerFechaDesde = () => {
    const fechaDesde = document.getElementById("fechaDesde");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(fechaDesde.value) && !validarFecha(DateTime.fromISO(completarFechaHora(fechaDesde.value)))) {
        dataEntry.agregarMensaje(`La fecha desde debe ser válida.`);
    } else if (!validarVacio(fechaDesde.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = DateTime.fromISO(completarFechaHora(fechaDesde.value));
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto FechaHasta.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerFechaHasta() // se devolverá el objeto DataEntry
 */
const obtenerFechaHasta = (fechaDesde) => {
    const fechaHasta = document.getElementById("fechaHasta");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(fechaHasta.value) && !validarFecha(DateTime.fromISO(completarFechaHora(fechaHasta.value)))) {
        dataEntry.agregarMensaje(`La fecha hasta debe ser válida.`);
    } else if (validarVacio(fechaHasta.value) && fechaDesde > completarFechaHora(fechaHasta.value)) {
        dataEntry.agregarMensaje(`La fecha hasta debe ser mayor a la fecha desde.`);
    } else if (!validarVacio(fechaHasta.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = DateTime.fromISO(completarFechaHora(fechaHasta.value));
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto valorInmuebleDesde.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerValorInmuebleDesde() // se devolverá el objeto DataEntry
 */
const obtenerValorInmuebleDesde = () => {
    const valorInmuebleDesde = document.getElementById("valorInmuebleDesde");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(valorInmuebleDesde.value) && !validarNumeroMayorACero(valorInmuebleDesde.value)) {
        dataEntry.agregarMensaje(`El valor del inmueble desde debe ser mayor a 0.`);
    } else if (!validarVacio(valorInmuebleDesde.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(valorInmuebleDesde.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto valorInmuebleHasta.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerValorInmuebleHasta() // se devolverá el objeto DataEntry
 */
const obtenerValorInmuebleHasta = (valorInmuebleDesde) => {
    const valorInmuebleHasta = document.getElementById("valorInmuebleHasta");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(valorInmuebleHasta.value) && !validarNumeroMayorACero(valorInmuebleHasta.value)) {
        dataEntry.agregarMensaje(`El valor del inmueble hasta debe ser mayor a 0.`);
    } else if (validarVacio(valorInmuebleHasta.value) && valorInmuebleDesde >= Number(valorInmuebleHasta.value)) {
        dataEntry.agregarMensaje(`El valor del inmueble hasta debe ser mayor al valor del inmueble desde.`);
    } else if (!validarVacio(valorInmuebleHasta.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(valorInmuebleHasta.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto cuotaInicialDesde.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerCuotaInicialDesde() // se devolverá el objeto DataEntry
 */
const obtenerCuotaInicialDesde = () => {
    const cuotaInicialDesde = document.getElementById("cuotaInicialDesde");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(cuotaInicialDesde.value) && !validarNumeroMayorACero(cuotaInicialDesde.value)) {
        dataEntry.agregarMensaje(`La cuota inicial desde debe ser mayor a 0.`);
    } else if (!validarVacio(cuotaInicialDesde.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(cuotaInicialDesde.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto cuotaInicialHasta.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerCuotaInicialHasta() // se devolverá el objeto DataEntry
 */
const obtenerCuotaInicialHasta = (cuotaInicialDesde) => {
    const cuotaInicialHasta = document.getElementById("cuotaInicialHasta");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(cuotaInicialHasta.value) && !validarNumeroMayorACero(cuotaInicialHasta.value)) {
        dataEntry.agregarMensaje(`La cuota inicial hasta debe ser mayor a 0.`);
    } else if (validarVacio(cuotaInicialHasta.value) && cuotaInicialDesde >= Number(cuotaInicialHasta.value)) {
        dataEntry.agregarMensaje(`La cuota inicial hasta debe ser mayor a la cuota inicial desde.`);
    } else if (!validarVacio(cuotaInicialHasta.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(cuotaInicialHasta.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto teaDesde.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerTeaDesde() // se devolverá el objeto DataEntry
 */
const obtenerTeaDesde = () => {
    const teaDesde = document.getElementById("teaDesde");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(teaDesde.value) && !validarNumeroMayorACero(teaDesde.value)) {
        dataEntry.agregarMensaje(`La TEA (%) desde debe ser mayor a 0.`);
    } else if (!validarVacio(teaDesde.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(teaDesde.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto teaHasta.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerTeaHasta() // se devolverá el objeto DataEntry
 */
const obtenerTeaHasta = (teaDesde) => {
    const teaHasta = document.getElementById("teaHasta");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(teaHasta.value) && !validarNumeroMayorACero(teaHasta.value)) {
        dataEntry.agregarMensaje(`La TEA (%) hasta debe ser mayor a 0.`);
    } else if (validarVacio(teaHasta.value) && teaDesde >= Number(teaHasta.value)) {
        dataEntry.agregarMensaje(`La TEA (%) hasta debe ser mayor a la TEA (%) desde.`);
    } else if (!validarVacio(teaHasta.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(teaHasta.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto nroCuotasDesde.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerNroCuotasDesde() // se devolverá el objeto DataEntry
 */
const obtenerNroCuotasDesde = () => {
    const nroCuotasDesde = document.getElementById("nroCuotasDesde");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(nroCuotasDesde.value) && !validarNumeroRango(nroCuotasDesde.value, NRO_CUOTAS_RANGO_INICIAL, NRO_CUOTAS_RANGO_FINAL)) {
        dataEntry.agregarMensaje(`El número de cuotas desde debe ser entre 12 y 360.`);
    } else if (!validarVacio(nroCuotasDesde.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(nroCuotasDesde.value);
        dataEntry.valido = true;
    }
    return dataEntry;
}

/**
 * @description Obtiene el valor ingresado en la caja de texto nroCuotasHasta.
 * @returns {DataEntry} Se retorna el dato obtenido en la caja de texto, si es válido o no y uno o varios mensajes en caso sea inválido.
 * @example
 * obtenerNroCuotasHasta() // se devolverá el objeto DataEntry
 */
const obtenerNroCuotasHasta = (nroCuotasDesde) => {
    const nroCuotasHasta = document.getElementById("nroCuotasHasta");
    const dataEntry = new DataEntry(false, false);
    if (validarVacio(nroCuotasHasta.value) && !validarNumeroRango(nroCuotasHasta.value, NRO_CUOTAS_RANGO_INICIAL, NRO_CUOTAS_RANGO_FINAL)) {
        dataEntry.agregarMensaje(`El número de cuotas hasta debe ser entre 12 y 360.`);
    } else if (validarVacio(nroCuotasHasta.value) && nroCuotasDesde >= Number(nroCuotasHasta.value)) {
        dataEntry.agregarMensaje(`El número de cuotas hasta debe ser mayor al número de cuotas desde.`);
    } else if (!validarVacio(nroCuotasHasta.value)) {
        dataEntry.tieneValor = false;
        dataEntry.valido = true;
    } else {
        dataEntry.tieneValor = true;
        dataEntry.dato = Number(nroCuotasHasta.value);
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
 * @description Manejador del evento click para limpiar los datos.
 * @example
 * limpiarClick()
 */
const limpiarClick = () => {
    const fechaDesde = document.getElementById("fechaDesde");
    fechaDesde.value = "";
    const fechaHasta = document.getElementById("fechaHasta");
    fechaHasta.value = "";
    const valorInmuebleDesde = document.getElementById("valorInmuebleDesde");
    valorInmuebleDesde.value = "";
    const valorInmuebleHasta = document.getElementById("valorInmuebleHasta");
    valorInmuebleHasta.value = "";
    const cuotaInicialDesde = document.getElementById("cuotaInicialDesde");
    cuotaInicialDesde.value = "";
    const cuotaInicialHasta = document.getElementById("cuotaInicialHasta");
    cuotaInicialHasta.value = "";
    const teaDesde = document.getElementById("teaDesde");
    teaDesde.value = "";
    const teaHasta = document.getElementById("teaHasta");
    teaHasta.value = "";
    const nroCuotasDesde = document.getElementById("nroCuotasDesde");
    nroCuotasDesde.value = "";
    const nroCuotasHasta = document.getElementById("nroCuotasHasta");
    nroCuotasHasta.value = "";
    eliminarMensajesError();
    eliminarFilasResultado();
}

/**
 * @description Manejador del evento submit para buscar créditos.
 * @example
 * buscarSubmit(event)
 */
const buscarSubmit = (event) => {
    event.preventDefault();
    let hayErrores = false;
    eliminarMensajesError();
    eliminarFilasResultado();
    // Se solicitan todos los datos necesarios para buscar los créditos, en caso algun dato sea invalido se muestra un mensaje de error.
    const fechaDesdeDataEntry = obtenerFechaDesde();
    if (!fechaDesdeDataEntry.valido) {
        mostrarMensajeError(fechaDesdeDataEntry);
        hayErrores = true;
    }
    const fechaHastaDataEntry = obtenerFechaHasta(fechaDesdeDataEntry.dato);
    if (!fechaHastaDataEntry.valido) {
        mostrarMensajeError(fechaHastaDataEntry);
        hayErrores = true;
    }
    const valorInmuebleDesdeDataEntry = obtenerValorInmuebleDesde();
    if (!valorInmuebleDesdeDataEntry.valido) {
        mostrarMensajeError(valorInmuebleDesdeDataEntry);
        hayErrores = true;
    }
    const valorInmuebleHastaDataEntry = obtenerValorInmuebleHasta(valorInmuebleDesdeDataEntry.dato);
    if (!valorInmuebleHastaDataEntry.valido) {
        mostrarMensajeError(valorInmuebleHastaDataEntry);
        hayErrores = true;
    }
    const cuotaInicialDesdeDataEntry = obtenerCuotaInicialDesde();
    if (!cuotaInicialDesdeDataEntry.valido) {
        mostrarMensajeError(cuotaInicialDesdeDataEntry);
        hayErrores = true;
    }
    const cuotaInicialHastaDataEntry = obtenerCuotaInicialHasta(cuotaInicialDesdeDataEntry.dato);
    if (!cuotaInicialHastaDataEntry.valido) {
        mostrarMensajeError(cuotaInicialHastaDataEntry);
        hayErrores = true;
    }
    const teaDesdeDataEntry = obtenerTeaDesde();
    if (!teaDesdeDataEntry.valido) {
        mostrarMensajeError(teaDesdeDataEntry);
        hayErrores = true;
    }
    const teaHastaDataEntry = obtenerTeaHasta(teaDesdeDataEntry.dato);
    if (!teaHastaDataEntry.valido) {
        mostrarMensajeError(teaHastaDataEntry);
        hayErrores = true;
    }
    const nroCuotasDesdeDataEntry = obtenerNroCuotasDesde();
    if (!nroCuotasDesdeDataEntry.valido) {
        mostrarMensajeError(nroCuotasDesdeDataEntry);
        hayErrores = true;
    }
    const nroCuotasHastaDataEntry = obtenerNroCuotasHasta(nroCuotasDesdeDataEntry.dato);
    if (!nroCuotasHastaDataEntry.valido) {
        mostrarMensajeError(nroCuotasHastaDataEntry);
        hayErrores = true;
    }

    if (hayErrores) {
        return;
    }

    const simulador = new Simulador();
    let creditos = simulador.creditos.map((c) => {
        return new Credito(c.id, DateTime.fromISO(c.fechaHora), c.valorInmueble, c.cuotaInicial, c.teaPorcentaje, c.nroCuotas, c.seguroDesgravamenMensualPorcentaje, c.seguroInmueblePorcentaje, DateTime.fromISO(c.fechaDesembolso));
    });
    // Filtrar fechaDesde
    if (fechaDesdeDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.fechaHora > fechaDesdeDataEntry.dato;
        });
    }
    // Filtrar fechaHasta
    if (fechaHastaDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.fechaHora < fechaHastaDataEntry.dato;
        });
    }
    // Filtrar valorInmuebleDesde
    if (valorInmuebleDesdeDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.valorInmueble > Number(valorInmuebleDesdeDataEntry.dato);
        });
    }
    // Filtrar valorInmuebleHasta
    if (valorInmuebleHastaDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.valorInmueble < Number(valorInmuebleHastaDataEntry.dato);
        });
    }
    // Filtrar cuotaInicialDesde
    if (cuotaInicialDesdeDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.cuotaInicial > Number(cuotaInicialDesdeDataEntry.dato);
        });
    }
    // Filtrar cuotaInicialHasta
    if (cuotaInicialHastaDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.cuotaInicial < Number(cuotaInicialHastaDataEntry.dato);
        });
    }
    // Filtrar teaDesde
    if (teaDesdeDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.teaPorcentaje > Number(teaDesdeDataEntry.dato);
        });
    }
    // Filtrar teaHasta
    if (teaHastaDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.teaPorcentaje < Number(teaHastaDataEntry.dato);
        });
    }
    // Filtrar nroCuotasDesde
    if (nroCuotasDesdeDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.nroCuotas > Number(nroCuotasDesdeDataEntry.dato);
        });
    }
    // Filtrar nroCuotasHasta
    if (nroCuotasHastaDataEntry.tieneValor) {
        creditos = creditos.filter((c) => {
            return c.nroCuotas < Number(nroCuotasHastaDataEntry.dato);
        });
    }
    mostrarCreditos(creditos);
}

/**
 * @description Manejador del evento click para agregar un crédito.
 * @example
 * agregarCreditoClick()
 */
const agregarCreditoClick = () => {
    document.location.href = "pages/cronograma.html";
}

/**
 * @description Manejador del evento click para ver un crédito generado con anterioridad.
 * @example
 * verCreditoClick()
 */
const verCreditoClick = (id) => {
    document.location.href = `pages/cronograma.html?id=${id}`;
}

/**
 * @description Muestra los créditos en una tabla.
 * @param {Array} creditos - Array con todos los créditos generados.
 * @example
 * mostrarCreditos(creditos);
 */
const mostrarCreditos = (creditos) => {
    creditos.forEach(credito => {
        const filasCreditos = document.getElementById("filasCreditos");
        const fila = document.createElement("tr");

        const id = document.createElement("td");
        id.innerText = credito.id;
        fila.appendChild(id);

        const fechaHora = document.createElement("td");
        fechaHora.innerText = credito.fechaHoraFormat;
        fila.appendChild(fechaHora);

        const valorInmueble = document.createElement("td");
        valorInmueble.innerText = credito.valorInmueble;
        fila.appendChild(valorInmueble);

        const cuotaInicial = document.createElement("td");
        cuotaInicial.innerText = credito.cuotaInicial;
        fila.appendChild(cuotaInicial);

        const teaPorcentaje = document.createElement("td");
        teaPorcentaje.innerText = credito.teaPorcentaje;
        fila.appendChild(teaPorcentaje);

        const nroCuotas = document.createElement("td");
        nroCuotas.innerText = credito.nroCuotas;
        fila.appendChild(nroCuotas);

        const seguroDesgravamenMensualPorcentaje = document.createElement("td");
        seguroDesgravamenMensualPorcentaje.innerText = credito.seguroDesgravamenMensualPorcentaje;
        fila.appendChild(seguroDesgravamenMensualPorcentaje);

        const seguroInmueblePorcentaje = document.createElement("td");
        seguroInmueblePorcentaje.innerText = credito.seguroInmueblePorcentaje;
        fila.appendChild(seguroInmueblePorcentaje);

        const fechaDesembolso = document.createElement("td");
        fechaDesembolso.innerText = credito.fechaDesembolsoFormat;
        fila.appendChild(fechaDesembolso);

        const ver = document.createElement("td");
        const botonVer = document.createElement("button");
        botonVer.innerText = "Ver";
        botonVer.addEventListener("click", function () {
            verCreditoClick(credito.id);
        });
        ver.appendChild(botonVer);
        fila.appendChild(ver);
        filasCreditos.appendChild(fila);
    });
}

// Agregar un manejador del evento click al botón agregarCredito
const agregarCredito = document.getElementById("agregarCredito");
agregarCredito.addEventListener("click", agregarCreditoClick);

// Agregar un manejador del evento click al botón limpiar
const limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", limpiarClick);

// Agregar un manejador del evento submit al formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", buscarSubmit);

/**
 * @description Manejador de la página principal. Si hay créditos en el local storage se muestran en la página
 * @example
 * cronograma()
 */
const index = async () => {
    const simulador = new Simulador();
    // Se crean los objetos crédito en base a la información recuperada del local storage
    let creditos = simulador.creditos.map((c) => {
        return new Credito(c.id, DateTime.fromISO(c.fechaHora), c.valorInmueble, c.cuotaInicial, c.teaPorcentaje, c.nroCuotas, c.seguroDesgravamenMensualPorcentaje, c.seguroInmueblePorcentaje, DateTime.fromISO(c.fechaDesembolso));
    });
    // Si no hay creditos en el storage se obtienen créditos iniciales del archivo datos.json
    if (creditos.length <= 0) {
        creditos = await simulador.obtenerCreditosInicial();
    }


    // Se muestran los créditos
    mostrarCreditos(creditos);
}

// Ejecutar la función principal de la página
index();