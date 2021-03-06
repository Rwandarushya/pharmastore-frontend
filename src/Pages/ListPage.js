import React, { useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import AddToList from "../components/AddToList";
import { AppContext } from "../context/AppProvider";

import CustomPaginationActionsTable from '../components/ProductList'

const ListPage = (props) => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    if (!state.currentUser) {
      props.history.push("/login");
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <AddToList />
        <CustomPaginationActionsTable />
      </div>
    </div>
  );
};

export default ListPage;
