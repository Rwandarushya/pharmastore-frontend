import React from "react";
import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <div className="jumbotron">
      <div className="row w-100">
        <div className="col-md-4">
          <div className="card border-info mx-sm-1 p-3">
            <div className="card border-info shadow text-info p-3 my-card">
              <span className="fa fa-users" aria-hidden="true"></span>
            </div>
            <div className="text-info text-center mt-3">
              <h4>Users</h4>
            </div>
            <div className="text-info text-center mt-2">
              <h1>234</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-success mx-sm-1 p-3">
            <Link to="/list">
              <div className="card border-success shadow text-success p-3 my-card">
                <span className="fa fa-syringe" aria-hidden="true"></span>
              </div>
            </Link>
            <div className="text-success text-center mt-3">
              <h4>Products</h4>
            </div>
            <div className="text-success text-center mt-2">
              <h1>9332</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-danger mx-sm-1 p-3">
            <div className="card border-danger shadow text-danger p-3 my-card">
              <span className="fa fa-clinic-medical" aria-hidden="true"></span>
            </div>
            <div className="text-danger text-center mt-3">
              <h4>Pharmacies</h4>
            </div>
            <div className="text-danger text-center mt-2">
              <h1>346</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
