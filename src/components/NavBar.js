import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

function NavBar() {
  const { state } = useContext(AppContext);
  const url = null;
  return (
    <div className="site-navbar py-2">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <Link to="/home" className="js-logo-clone">
                <strong className="text-primary">Pharma</strong>Store
              </Link>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav
              className="site-navigation text-right text-md-center"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className="active">
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                {state.currentUser && (
                  <React.Fragment>
                    <li>
                      <Link to="/order">Order</Link>
                    </li>

                    <li>
                      <Link to="/list">Product List</Link>
                    </li>
                  </React.Fragment>
                )}
              </ul>
            </nav>
          </div>
          <div className="icons">
            <Link to="/admin" className="icons-btn d-inline-block bag">
              <span>
                <i className="fas fa-users-cog"></i>
              </span>
              <span className="number">1</span>
            </Link>
            <a
              href={url}
              className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
            >
              <span className="icon-menu"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
