import React from "react";

import NavBar from "../components/NavBar";
import AdminBody from "../components/AdminBody";
import AdminMenu from "../components/AdminMenu";

function AdminPage() {

 

  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <AdminMenu />
        <AdminBody />
      </div>
    </div>
  );
}

export default AdminPage;
