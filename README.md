# Proyecto: Simulador de Crédito Hipotecario

El simulador genera un cronograma de pago en base a los datos ingresados (basado en un crédito hipotecario estándar).

## Descripción

El simulador esta compuesto por dos páginas:

### Página de Créditos

Permite buscar créditos por distintos criterios:

- **Fecha:** Fecha y hora en la que se generó el crédito.
- **Valor Inmueble:** Valor del inmueble.
- **Cuota Inicial:** Monto deducible del valor del inmueble.
- **TEA (%):** Porcentaje de la Tasa Efectiva Anual del préstamo hipotecario.
- **Nro. Cuotas:** Número de cuotas a simular.

_Para realizar una búsqueda presionar el botón **Buscar**._
_Para limpiar los criterios de búsqueda y la tabla de resultados presionar el botón **Limpiar**._
_Para simular un nuevo crédito hipotecario presionar el botón **Agregar simulación**._

![Captura de pantalla de página de créditos](/assets/images/credito_screenshot.jpg)

Se pueden ver todas las simulaciones de créditos en la tabla de resultados:

- **Id:** Identificador del crédito.
- **Fecha:** Fecha en la que fue generado el crédito.
- **Valor Inmueble:** Valor del inmueble.
- **Cuota Inicial:** Monto deducible del valor del inmueble.
- **TEA (%):** Porcentaje de la Tasa Efectiva Anual del préstamo hipotecario.
- **Nro. Cuotas:** Número de cuotas a simular.
- **Seguro Desgravamen Mensual (%):** Porcentaje mensual del seguro de desgravamen.
- **Seguro Inmueble (%):** Porcentaje anual del seguro del bien.
- **Ver:** Redirige a la página **Cronograma** para visualizar el cronograma del crédito.

![Captura de pantalla de página de cronogramas 1](/assets/images/cronograma_screenshot_1.jpg)
![Captura de pantalla de página de cronogramas 2](/assets/images/cronograma_screenshot_2.jpg)

### Página de Cronogramas

Permite generar un cronograma de pagos con datos predeterminados o usando datos personalizados.

_Presionar el botón **Usar datos prederterminados**._

O ingresar los datos necesarios para la simulación:

- **Valor del inmueble:** Valor del inmueble. Debe ser mayor a 0.
- **Cuota inicial:** Monto deducible del valor del inmueble. Debe ser mayor a 0 y menor al **Valor del inmueble**.
- **TEA (% anual):** Porcentaje de la Tasa Efectiva Anual del préstamo hipotecario. Debe ser mayor a 0.
- **Nro. de cuotas:** Número de cuotas a simular. Debe ser entre 12 y 360.
- **Seguro de desgravamen (% mensual):** Porcentaje mensual del seguro de desgravamen. Debe ser mayor a 0.        
- **Seguro del bien (% anual):** Porcentaje anual del seguro del bien. Debe ser mayor a 0.

_Para generar el cronograma de pagos presionar el botón **Calcular**._
_Para limpiar los datos ingresados presionar el botón **Limpiar**._

![Captura de pantalla de página de cronogramas](/assets/images/nuevo_cronograma_screenshot.jpg)

Se puede ver el cronograma de cuotas en la tabla de resultados:
    
- **Nro. cuota:** Número de cuota.
- **Fecha de vencimiento:** Fecha en la que vence la cuota.
- **Amortización:** Monto que representa el capital de la cuota.
- **Interés:** Monto que representa el interés de la cuota.
- **Seguro de desgravamen:** Monto que representa el seguro de desgravamen de la cuota.
- **Seguro del bien:** Monto que representa el seguro a todo riesgo para el inmueble.
- **Monto cuota:** Monto de la cuota.
- **Saldo del capital:** Monto que representa el saldo de capital luego de cancelada la cuota.

_Para regrgesar a la página de créditos presionar el botón **Regresar**._