import React, { Component } from "react";

import ProductCard from "./ProductCard";
import products from "../products";
class ProductList extends Component {

  render() {
    const {handleAddToCart} = this.props;
    const productList = products.map((product) => (
      <ProductCard
        key={product.id}
        img={product.img}
        title={product.title}
        price={product.price}
        handleAddToCart={() => handleAddToCart(product.id)}
      />
    ));

    return (
      <div className="col col-6 col-lg-8 p-4">
        <section className="row row-cols-1">
          <div className="col">
            <h1 className="mb-4">Shop</h1>
          </div>
          <div className="col">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
              {productList}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
