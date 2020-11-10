import React, {Fragment} from 'react'
import Background from '../images/hero_bg.jpg';
import {NavLink} from 'react-router-dom';

function MainBody(){
    return(
        <Fragment>
        <div class=" px-0">
      <div class="site-blocks-cover overlay" style={{backgroundImage: `url(${Background})`}}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto align-self-center">
              <div class="site-block-cover-content text-center">
                <h1 class="mb-0"><strong class="text-primary">Pharmastore</strong> Make Your Order List Easly.</h1>

                <div class="row justify-content-center mb-5">
                  <div class="col-lg-6 text-center">
                    <p>you can make a list of products you want, and export directly your list to excel document.</p>
                  </div>
                </div>
                
                <p>
                <NavLink
                  className=" btn btn-primary px-5 py-3"
                    to="/order"
                    exact
                >
            	Order Now
                </NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        </Fragment>
    );
}

export default MainBody;
