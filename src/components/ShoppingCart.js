import React, { Component } from "react";
import CheckoutButton from "./CheckoutButton";
import ShoppingCartItem from "./ShoppingCartItem";

import img_1 from "../img/img_1.jpeg";
import img_2 from "../img/img_2.jpeg";
// import img_3 from "../img/img_3.jpeg";
// import img_4 from "../img/img_4.jpeg";
// import img_5 from "../img/img_5.jpeg";
// import img_6 from "../img/img_6.jpeg";

class ShoppingCart extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRemove() {
    console.log("handleRemove");
  }

  handleChange() {
    console.log("handleChange");
  }

  render() {
    return (
      <aside className="col col-6 col-lg-4 p-4">
        <div className="row flex-column">
          <div className="col shopping__cart__header">
            <h2 className="h3 mt-2">Shopping Cart</h2>
            <hr className="mb-3" />
          </div>

          <ShoppingCartItem
            title="Nike Runner 2000"
            price={88}
            img={img_1}
            handleRemove={this.handleRemove}
            handleChange={this.handleChange}
          />
          <ShoppingCartItem
                title="Puma 80's"
                price={109}
                img={img_2}
                handleRemove={this.handleRemove}
                handleChange={this.handleChange}
              />

          <div className="col shopping__cart__footer">
            <div className="row row-cols-1 flex-column">
              <div className="col">
                <div className="d-flex justify-content-between">
                  <h4 className="h5">Total</h4>
                  <h4>
                    <strong>306€</strong>
                  </h4>
                </div>
                <hr />
              </div>
              <div className="col">
                <CheckoutButton text="Checkout"/>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default ShoppingCart;
