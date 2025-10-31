const { mercadolibre_page } = inject();

Given(/^estar en la página principal de Mercado Libre$/, () => {
  mercadolibre_page.Principal();
});

When(/^seleccionar México como país$/, async() => {
  await mercadolibre_page.SeleccionarPais();

});

When(/^buscar el término "playstation 5"$/, () => {
 mercadolibre_page.Busqueda();

});

When(/^filtrar por estado Nuevo$/, () => {
 mercadolibre_page.Filtrado();

});

When(/^filtrar por ubicación CDMX$/, () => {
 mercadolibre_page.FiltrarCDMX();

});


When(/^ordenar los resultados de mayor a menor precio$/, () => {
 mercadolibre_page.Ordenar();

});

Then(/^obtener el nombre y precio de los primeros 5 productos$/, async() => {
 await mercadolibre_page.Obtener();

});

Then(/^mostar los productos en la consola$/, async() => {
 await mercadolibre_page.ImprimirConsola();
});