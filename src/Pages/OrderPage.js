import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppProvider";
// import axios from 'axios'

//Order pages components

import CreateProduct from "../components/CreateProduct";
import OrderList from "../components/OrderList";

const OrderPage = (props) => {
  const { state, setState } = useContext(AppContext);
  localStorage.setItem("previousPage", "/order");
  useEffect(() => {
    if (!state.currentUser) {
      setState({
        ...state,
        previousPage: localStorage.getItem("previousPage"),
      });
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
