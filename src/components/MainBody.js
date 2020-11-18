import React from "react";
import Background from "../images/hero_bg.jpg";
import { Link } from "react-router-dom";

function MainBody() {
  return (
    <div className=" px-0">
      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto align-self-center">
              <div className="site-block-cover-content text-center">
                <h1 className="mb-0">
                  <strong className="text-primary">Pharmastore</strong> Make
                  Your Order List Easly.
                </h1>

                <div className="row justify-content-center mb-5">
                  <div className="col-lg-6 text-center">
                    <p>
                      you can make a list of products you want, and export
                      directly your list to excel document.
                    </p>
                  </div>
                </div>

                <p>
                  <Link
                    className=" btn btn-primary px-5 py-3"
                    to="/order"
                    exact
                  >
                    Order Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
