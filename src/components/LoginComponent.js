import React, {Fragment} from 'react'

import Background from "../images/hero_bg.jpg";

function LoginComponent(){
    return(
        <Fragment>
            <body data-new-gr-c-s-check-loaded="14.983.0">
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div
            class="login100-form-title"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <span class="login100-form-title-1"> Sign In </span>
          </div>
          <form class="login100-form validate-form">
            <div
              class="wrap-input100 validate-input m-b-26"
              data-validate="Username is required"
            >
              <span class="label-input100">Username</span>
              <input
                class="input100"
                type="text"
                name="username"
                placeholder="Enter username"
              />
              <span class="focus-input100"></span>
            </div>
            <div
              class="wrap-input100 validate-input m-b-18"
              data-validate="Password is required"
            >
              <span class="label-input100">Password</span>
              <input
                class="input100"
                type="password"
                name="pass"
                placeholder="Enter password"
              />
              <span class="focus-input100"></span>
            </div>
            <div class="flex-sb-m w-full p-b-30">
              <div class="contact100-form-checkbox">
                <input
                  class="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label class="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" class="txt1"> Forgot Password? </a>
              </div>
            </div>
            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
        </Fragment>
    );
}

export default LoginComponent;
