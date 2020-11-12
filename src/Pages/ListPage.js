import React from "react";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import AddToList from "../components/AddToList";

function ListPage() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <AddToList />
        <ProductList />
      </div>
    </div>
  );
}

export default ListPage;
