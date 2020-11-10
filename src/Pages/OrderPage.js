import React from "react";

//Order pages components

import CreateProduct from "../components/CreateProduct";
import ProductList from "../components/ProductList";

function OrderPage() {
  return (
    <div className="App">
      <div className="container">
        <CreateProduct />
        <ProductList />
      </div>
    </div>
  );
}

export default OrderPage;
