import React, {Fragment, useState, useEffect} from 'react'
import axios from "axios";

import Background from "../images/hero_bg.jpg";


function LoginComponent(props){



  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = async (Event) => {
    Event.preventDefault();
    setAccount({ ...account, loading: true });
    const data={
      email:account.email,
      password:account.password
    }
    axios.post('http://localhost:5000/users/login',data)
      .then(res =>{
        console.log(res);

        if (res.data.status === 200) {
          setAccount({ ...account, loading: false });
          localStorage.setItem("user", JSON.stringify(res.data));
          setAccount({
            ...account,
            email: "",
            password: "",
            currentUser: localStorage.getItem("user"),
          });
          props.history.push('/admin')
        }

      })
      .catch( err =>{
        if (err.status === 404) {
            setAccount({ ...account, loading: false });
            console.log('invalid login')
            // toast.error("incorrect username or password");
            setAccount({
              ...account,
              email: "",
              password: "",
            });
          }
      })
  };




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
          <form class="login100-form validate-form" onSubmit={handleSubmit}>
            <div
              class="wrap-input100 validate-input m-b-26"
              data-validate="Username is required"
            >
              <span class="label-input100">Email</span>
              <input
                class="input100"
                id="email"
                name="email"
                value={account.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your Email"
                required
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
                name="password"
                id="password"
                placeholder="Enter password"
                data-testid="password"
                value={account.password}
                onChange={handleChange}
                type="password"
                required
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
