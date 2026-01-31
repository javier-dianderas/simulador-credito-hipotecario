# Proyecto: Simulador de Crédito Hipotecario

El simulador genera un cronograma de pago en base a los datos ingresados (basado en un crédito hipotecario estándar).

## Table of Contents

- [Description](#description)
- [Installation](#installation)

## Description

Los datos necesarios para la simulación son:

- **Valor del inmueble:** Valor del inmueble. Debe ser mayor a 0.
- **Cuota inicial:** Monto deducible del valor del inmueble. Debe ser mayor a 0 y menor al **Valor del inmueble**.
- **TEA (% anual):** Porcentaje de la Tasa Efectiva Anual del préstamo hipotecario. Debe ser mayor a 0.
- **Nro. de cuotas:** Número de cuotas a simular. Debe ser entre 12 y 360.
- **Seguro de desgravamen (% mensual):** Porcentaje mensual del seguro de desgravamen. Debe ser mayor a 0.        
- **Seguro del bien (% anual):** Porcentaje anual del seguro del bien. Debe ser mayor a 0.

Cada cuota del cronograma esta compuesto por:
    
- **Nro. cuota:** Número de cuota.
- **Fecha de vencimiento:** Fecha en la que vence la cuota.
- **Amortización:** Monto que representa el capital de la cuota.
- **Interés:** Monto que representa el interés de la cuota.
- **Seguro de desgravamen:** Monto que representa el seguro de desgravamen de la cuota.
- **Seguro del bien:** Monto que representa el seguro a todo riesgo para el inmueble.
- **Monto cuota:** Monto de la cuota.
- **Saldo del capital:** Monto que representa el saldo de capital luego de cancelada la cuota.
    
Los pasos para ejecutar el simulador son:
    
- Levantar la página **index.html** en un navegador.
- Presionar **F12** para abrir las herramientas de desarrollador del navegador y seleccionar la pestaña **Console**.
- El simulador pregunta **¿Desea simular el cronograma con datos de prueba?** Responder **Aceptar** para
    simular con datos predeterminados o **Cancelar** para ingresar datos para el cálculo.
- En caso de haber seleccionado **Cancelar** en el paso anterior, se solicitarán todos los datos necesarios para la simulación del cronograma.
- Después de haber ingresado los datos se generará el cronograma y se mostrará en una tabla por la **Console**.
    

## Installation

A step-by-step guide on how to get the development environment running on a local machine.

**Prerequisites**

List any dependencies or software required before installation.

```bash
# Example prerequisite
npm install npm@latest -g