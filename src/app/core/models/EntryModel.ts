
export class EntryModel {
  products: any;
  golden: any;
  constructor(data: any, golden: any) {
    this.products = data;
    this.golden = golden;
  }
  getOffers(): any {
    const offerDay_ = this.products.reduce((min: any, current: any) => current.price < min.price ? current : min);
    let offerDay: any = {
      available: true,
      headline: { title: "Oferta Del Dia" },
      products: offerDay_
    };
    const otherOffers_ = this.products.sort((a: any, b: any) => a.price - b.price).slice(0, 4);
    let otherOffers: any = {
      available: true,
      headline: { title: "Ofertas de la semana" },
      products: otherOffers_
    };
    return { mods: { offerDay, otherOffers } }
  }

  getStatics(): any {
    const static1 = this.getRandomElements(this.products, 6);
    const static2 = this.getRandomElements(this.products, 6);
    return {
      mods: [
        { headline: { title: "Lo más vendido" }, products: static1, link: "/home" },
        { headline: { title: "Ofertas Para Navidad" }, products: static2, link: "/home" }
      ]
    };
  }

  getSlides(): any {
    const slide1 = this.getRandomElements(this.products, 12);
    const slide2 = this.getRandomElements(this.products, 12);
    return {
      headline: { title: "Podría Interesarte" },
      mods: [
        { headline: { title: "Lo nuevo" }, products: slide1, link: "/home" },
        { headline: { title: "Lo más vendido" }, products: slide2, link: "/home" }
      ]
    };
  }
  getGolden(): any {
    return this.golden;
  }
  getRandomElements(products: any, items: number) {
    function compararAleatorio() {
      return Math.random() - 0.5;
    }
    const copia = [...products];
    copia.sort(compararAleatorio);
    const muestra = copia.slice(0, items);
    return muestra
  }
}


