import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Fragment>
      <footer className="site-footer bg-light px-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="block-7">
                <h3 className="footer-heading mb-4">
                  About <strong className="text-primary">Pharmastore</strong>
                </h3>
                <p>
                  Pharmastore is a web application developed in partnership with
                  Kaves pharmacy to help pharmacists to make list of the product
                  they want to order. with pharma store you can check the list
                  of products, search for product from the database, once list
                  is ready you can export it to excel document.
                </p>
              </div>
            </div>

            <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
              <h3 className="footer-heading mb-4">Navigation</h3>
              <ul className="list-unstyled">
              <li>
                  <Link to="/order">Order</Link>
                </li>

                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address">KG 11 Ave Kimironko, Kigali-Rwanda</li>
                  <li className="phone">
                    <a href="tel://0788851754">+250 788 851 754</a>
                  </li>
                  <li className="email">majadosi@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
