import React,{useContext,useEffect} from "react";
import { AppContext } from "../context/AppProvider";

import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";

const AdminPage=(props)=>{

  const { state, setState } = useContext(AppContext);
  localStorage.setItem("previousPage", "/admin");
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
        <NavBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default AdminPage;
