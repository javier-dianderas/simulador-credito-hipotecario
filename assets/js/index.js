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

        const ver = document.createElement("button");
        ver.innerText = "Ver";
        ver.addEventListener("click", function () {
            verCreditoClick(credito.id);
        });
        fila.appendChild(ver);
        filasCreditos.appendChild(fila);
    });
}

// Agregar un manejador del evento click al botón agregarCredito
const agregarCredito = document.getElementById("agregarCredito");
agregarCredito.addEventListener("click", agregarCreditoClick);

/**
 * @description Manejador de la página principal. Si hay créditos en el local storage se muestran en la página
 * @example
 * cronograma()
 */
const index = () => {
    const simulador = new Simulador();
    const creditos = simulador.creditos.map((c) => {
        return new Credito(c.id, new Date(c.fechaHora), c.valorInmueble, c.cuotaInicial, c.teaPorcentaje, c.nroCuotas, c.seguroDesgravamenMensualPorcentaje, c.seguroInmueblePorcentaje, new Date(c.fechaDesembolso));
    });
    mostrarCreditos(creditos);
}

// Ejecutar la función principal de la página
index();