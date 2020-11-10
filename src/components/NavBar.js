import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const url = null;
  return (
    <div class="site-navbar py-2">
      <div class="search-wrap">
        <div class="container">
          <a href={url} class="search-close js-search-close">
            <span class="icon-close2"></span>
          </a>
          <form action="#" method="post">
            <input
              type="text"
              class="form-control"
              placeholder="Search keyword and hit enter..."
            />
          </form>
        </div>
      </div>

      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="logo">
            <div class="site-logo">
              <a href="index.html" class="js-logo-clone">
                <strong class="text-primary">Pharma</strong>tive
              </a>
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
                  <a href="about.html">Product List</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="icons">
            <a href={url} class="icons-btn d-inline-block js-search-open">
              <span class="icon-search"></span>
            </a>
            <a href="cart.html" class="icons-btn d-inline-block bag">
              <span class="icon-shopping-bag"></span>
              <span class="number">2</span>
            </a>
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