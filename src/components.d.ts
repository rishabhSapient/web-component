/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface UcSideDrawer {
    'open': () => void;
    'opened': boolean;
    'title': string;
  }
  interface UcSideDrawerAttributes extends StencilHTMLAttributes {
    'opened'?: boolean;
    'title'?: string;
  }

  interface UcStockPrice {
    'stockSymbol': any;
  }
  interface UcStockPriceAttributes extends StencilHTMLAttributes {
    'stockSymbol'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'UcSideDrawer': Components.UcSideDrawer;
    'UcStockPrice': Components.UcStockPrice;
  }

  interface StencilIntrinsicElements {
    'uc-side-drawer': Components.UcSideDrawerAttributes;
    'uc-stock-price': Components.UcStockPriceAttributes;
  }


  interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {}
  var HTMLUcSideDrawerElement: {
    prototype: HTMLUcSideDrawerElement;
    new (): HTMLUcSideDrawerElement;
  };

  interface HTMLUcStockPriceElement extends Components.UcStockPrice, HTMLStencilElement {}
  var HTMLUcStockPriceElement: {
    prototype: HTMLUcStockPriceElement;
    new (): HTMLUcStockPriceElement;
  };

  interface HTMLElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement
    'uc-stock-price': HTMLUcStockPriceElement
  }

  interface ElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement;
    'uc-stock-price': HTMLUcStockPriceElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
