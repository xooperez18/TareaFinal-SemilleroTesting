const { I } = inject();

class mercadolibre_page {
  fields = {
    Pais: locate('a.ml-site-link').withText('México'),
    Banner: '.andes-tooltip__content',
    Mastarde: '[data-js="onboarding-cp-close"]',
    CookiesBanner: 'div.cookie-consent-banner-opt-out[role="region"]',
    Cookies: '[data-testid="action:understood-button"]',
    BarraBusqueda: "#cb1-edit",
    Condicion: 'h3.ui-search-filter-dt-title[aria-level="3"]',
    CondicionNuevo: '//span[@class="ui-search-filter-name" and normalize-space()="Nuevo"]',
    FiltroLocal: locate('span.ui-search-filter-name').withText('Local'),
    OrdenarPor: locate('span.andes-dropdown__display-values').withText('Más relevantes'),
    MayorPrecio: locate('span.andes-list__item-primary').withText('Mayor precio'),
    TarProduct: '.poly-card',
    NomProducto: '.poly-component__title',
    PrecioProduc: '.andes-money-amount__fraction'


  };
  Principal() {
    I.amOnPage('/');

  }

  async SeleccionarPais() {


    await I.waitForElement(this.fields.Pais, 10);
    await I.click(this.fields.Pais);
    try {
      await I.waitForElement(this.fields.Banner, 3);
      await I.click(this.fields.Mastarde);
    } catch (err) {

    }


    try {
      await I.waitForElement(this.fields.CookiesBanner, 3);
      await I.click(this.fields.Cookies);
    } catch (err) {

    }
  }

  Busqueda() {

    I.waitForElement(this.fields.BarraBusqueda, 10);
    I.fillField(this.fields.BarraBusqueda, 'playstation 5');
    I.pressKey('Enter');

  }


  Filtrado() {
    I.waitForElement(this.fields.Condicion, 10);
    I.scrollTo(this.fields.Condicion);
    I.wait(1);
    I.click(this.fields.CondicionNuevo);
  }


  FiltrarCDMX() {
    I.waitForElement(this.fields.FiltroLocal, 10);
    I.click(this.fields.FiltroLocal);

  }


  Ordenar() {
    I.waitForElement(this.fields.OrdenarPor, 15);
    I.scrollTo(this.fields.OrdenarPor);
    I.wait(1);
    I.click(this.fields.OrdenarPor);
    I.click(this.fields.MayorPrecio);
  }


  async Obtener() {

    I.waitForElement(this.fields.TarProduct, 5);
    I.waitForElement(this.fields.NomProducto, 5);
    I.wait(2);

    const titles = await I.grabTextFromAll(this.fields.NomProducto);
    const prices = await I.grabTextFromAll(this.fields.PrecioProduc);

// opte por hacer un arreglo para poder guardar los primeros 5 productos
    const first5 = [];
    for (let i = 0; i < 5 && i < titles.length; i++) {  
      first5.push({
        title: titles[i], 
        price: prices[i]
      });
    }

    return first5;


  }
  async ImprimirConsola() {
    const first5 = await this.Obtener();
    console.log(" ********** TOP 5 PRODUCTOS **************");
   
    first5.forEach((p, i) => console.log(`${i + 1}. ${p.title} - $${p.price}`));

  }
}
module.exports = new mercadolibre_page(); 