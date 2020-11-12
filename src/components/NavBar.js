import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const url = null;
  return (
    <div class="site-navbar py-2">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="logo">
            <div class="site-logo">
            <Link to="/home" class='js-logo-clone'>
                <strong class="text-primary">Pharma</strong>Store
            </Link>
            </div>
          </div>
          <div class="main-nav d-none d-lg-block">
            <nav
              class="site-navigation text-right text-md-center"
              role="navigation"
            >
              <ul class="site-menu js-clone-nav d-none d-lg-block">
                <li class="active">
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/order">Order</Link>
                </li>
                <li>
                 <Link to="/list">Product List</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="icons">
          <Link to="/admin" class="icons-btn d-inline-block bag" >
              <span><i class="fas fa-users-cog"></i></span>
              <span class="number">1</span>
          </Link>
            <a
              href={url}
              class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
            >
              <span class="icon-menu"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
