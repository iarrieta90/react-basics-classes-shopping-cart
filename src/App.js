import React, { Component } from "react";

import "./App.scss";

import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import products from "./products";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cartItems: [],
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleAddToCart(id){
    const cartItems = this.state.cartItems;

    let index = cartItems.findIndex((item) => item.id === id);

    if (index !== -1){
      const items = cartItems.map((item) => {
        if(item.id === id && item.quantity < 10){
          item.quantity = item.quantity + 1;
        }
        return item
      })

      this.setState(() => ({
        cartItems: items,
      }))

    } else {
      this.setState((prevState) => ({
        cartItems: [
          ...prevState.cartItems,
          {
            ...products.find((product) => product.id === id),
            quantity: 1,
          }
        ]
      }))
    }
  }

  handleRemove(id) {
    const items = this.state.cartItems.filter((item) => item.id !== id);
    this.setState(() => ({cartItems: items}));
  }

  handleChange(e, id) {
    console.log("handleChange");
    const items = this.state.cartItems.map((item) => {
      if(item.id === id){
        item.quantity = e.target.value;
      }
      return item;
    })
    this.setState(() => ({cartItems: items}));
    console.log(this.state.cartItems);
  }

  render() {
    const {cartItems} = this.state;

    return (
      <main className="container-fluid">
        <div className="row">
          <ProductList handleAddToCart={this.handleAddToCart}/>
          <ShoppingCart cartItems={cartItems} handleChange={this.handleChange} handleRemove={this.handleRemove} />
        </div>
      </main>
    );
  }
}

export default App;
