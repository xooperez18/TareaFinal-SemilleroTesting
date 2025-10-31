
Feature:Validar flujo en Mercado Libre

  Scenario: Realizar búsqueda de PS5
    Given estar en la página principal de Mercado Libre
    When seleccionar México como país
    And buscar el término "playstation 5"
    And filtrar por estado Nuevo
    And filtrar por ubicación CDMX
    And ordenar los resultados de mayor a menor precio
    Then obtener el nombre y precio de los primeros 5 productos
    And mostar los productos en la consola