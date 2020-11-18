/* eslint-disable react/prop-types */
import React, { useState, createContext } from "react";

const store = {
  isSubmitted: false,
  isAuthenticated: false,
  currentUser: localStorage.getItem("user"),
  loading: false,
  previousPage: localStorage.getItem("previousPage"),
};

export const AppContext = createContext(store);

const ContextWrapper = (props) => {
  const [state, setState] = useState(store);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
