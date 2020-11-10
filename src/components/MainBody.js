import React from "react";
import Background from "../images/hero_bg.jpg";
import { Link } from "react-router-dom";

function MainBody() {
  return (
    <div class=" px-0">
      <div
        class="site-blocks-cover overlay"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto align-self-center">
              <div class="site-block-cover-content text-center">
                <h1 class="mb-0">
                  <strong class="text-primary">Pharmastore</strong> Make Your
                  Order List Easly.
                </h1>

                <div class="row justify-content-center mb-5">
                  <div class="col-lg-6 text-center">
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
