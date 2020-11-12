import React from "react";
import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <div class="jumbotron">
<div class="row w-100">
        <div class="col-md-4">
            <div class="card border-info mx-sm-1 p-3">
                <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-users" aria-hidden="true"></span></div>
                <div class="text-info text-center mt-3"><h4>Users</h4></div>
                <div class="text-info text-center mt-2"><h1>234</h1></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card border-success mx-sm-1 p-3">
            <Link to="/list"><div class="card border-success shadow text-success p-3 my-card"><span class="fa fa-syringe" aria-hidden="true"></span></div></Link>
                <div class="text-success text-center mt-3"><h4>Products</h4></div>
                <div class="text-success text-center mt-2"><h1>9332</h1></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card border-danger mx-sm-1 p-3">
                <div class="card border-danger shadow text-danger p-3 my-card" ><span class="fa fa-clinic-medical" aria-hidden="true"></span></div>
                <div class="text-danger text-center mt-3"><h4>Pharmacies</h4></div>
                <div class="text-danger text-center mt-2"><h1>346</h1></div>
            </div>
        </div>
     </div>
</div>
  );
}

export default AdminMenu;
