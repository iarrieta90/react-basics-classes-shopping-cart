import React, { Component } from "react";

import "./App.scss";

import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {

  render() {
    return (
      <main className="container-fluid">
        <div className="row">
          <ProductList/>
          <ShoppingCart/>
        </div>
      </main>
    );
  }
}

export default App;
