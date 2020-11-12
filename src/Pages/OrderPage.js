import React,{useState, useEffect} from "react";
import axios from 'axios'

//Order pages components

import CreateProduct from "../components/CreateProduct";
import OrderList from "../components/OrderList";

function OrderPage() {


  return (
    <div className="App">
      <div className="container">
        <CreateProduct />
        <OrderList />
      </div>
    </div>
  );
}

export default OrderPage;
