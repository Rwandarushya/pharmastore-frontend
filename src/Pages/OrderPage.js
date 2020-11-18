import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppProvider";
// import axios from 'axios'

//Order pages components

import CreateProduct from "../components/CreateProduct";
import OrderList from "../components/OrderList";

const OrderPage = (props) => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    if (!state.currentUser) {
      props.history.push("/login");
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <CreateProduct />
        <OrderList />
      </div>
    </div>
  );
};

export default OrderPage;
