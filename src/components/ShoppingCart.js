import React, { Component } from "react";

import CheckoutButton from "./CheckoutButton";
import ShoppingCartItem from "./ShoppingCartItem";

function getTotalPrice(cartItems) {
  const pricesArray = cartItems.map((item) => item.price * item.quantity);
  const sum = pricesArray.reduce((a,b) => (a+b), 0);

  return sum;
}
class ShoppingCart extends Component {
  render() {
    const { cartItems, handleRemove, handleChange } = this.props;

    const cartItemsList =
      cartItems.length > 0 ? (
        cartItems.map((item) => (
          <ShoppingCartItem
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            handleRemove={() => handleRemove(item.id)}
            handleChange={(e) => handleChange(e, item.id)}
          />
        ))
      ) : (
        <div className="col mb-4">
          <h4>Your cart is empty</h4>
        </div>
      );

    return (
      <aside className="col col-6 col-lg-4 p-4">
        <div className="row flex-column">
          <div className="col shopping__cart__header">
            <h2 className="h3 mt-2">Shopping Cart</h2>
            <hr className="mb-3" />
          </div>
          {cartItemsList}
          <div className="col shopping__cart__footer">
            <div className="row row-cols-1 flex-column">
              <div className="col">
                <div className="d-flex justify-content-between">
                  <h4 className="h5">Total</h4>
                  <h4>
                    <strong>{getTotalPrice(cartItems)} €</strong>
                  </h4>
                </div>
                <hr />
              </div>
              <div className="col">
                <CheckoutButton text="Checkout" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default ShoppingCart;
