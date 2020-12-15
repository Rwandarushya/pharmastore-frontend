import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppProvider";

import Background from "../images/hero_bg.jpg";

const LoginComponent = (props) => {
  const { state } = useContext(AppContext);
  useEffect(() => {
    console.log(
      "the page to redirect to is",
      localStorage.getItem("previousPage")
    );
    if (state.currentUser) {
      props.history.push(localStorage.getItem("previousPage"));
    }
  });

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
    const data = {
      email: account.email,
      password: account.password,
    };
    axios
      .post("https://pharmastore-backend.herokuapp.com/users/login", data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setAccount({ ...account, loading: false });
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("email",res.data.email);
          localStorage.setItem("token",res.data.token)
          setAccount({
            ...account,
            email: "",
            password: "",
            currentUser: localStorage.getItem("user"),
          });
          window.location.href=`${localStorage.getItem("previousPage")}`;
        }
      })
      .catch((err) => {
        if (err.status === 404) {
          setAccount({ ...account, loading: false });
          console.log("invalid login");
          // toast.error("incorrect username or password");
          setAccount({
            ...account,
            email: "",
            password: "",
          });
        }
      });
  };

  return (
    <Fragment>
      <body data-new-gr-c-s-check-loaded="14.983.0">
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div
                className="login100-form-title"
                style={{ backgroundImage: `url(${Background})` }}
              >
                <span className="login100-form-title-1"> Sign In </span>
              </div>
              <form
                className="login100-form validate-form"
                onSubmit={handleSubmit}
              >
                <div
                  className="wrap-input100 validate-input m-b-26"
                  data-validate="Username is required"
                >
                  <span className="label-input100">Email</span>
                  <input
                    className="input100"
                    id="email"
                    name="email"
                    value={account.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your Email"
                    required
                  />
                  <span className="focus-input100"></span>
                </div>
                <div
                  className="wrap-input100 validate-input m-b-18"
                  data-validate="Password is required"
                >
                  <span className="label-input100">Password</span>
                  <input
                    className="input100"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    data-testid="password"
                    value={account.password}
                    onChange={handleChange}
                    type="password"
                    required
                  />
                  <span className="focus-input100"></span>
                </div>
                <div className="flex-sb-m w-full p-b-30">
                  <div className="contact100-form-checkbox">
                    <input
                      className="input-checkbox100"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                    />
                    <label className="label-checkbox100" for="ckb1">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a href="#" className="txt1">
                      {" "}
                      Forgot Password?{" "}
                    </a>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default LoginComponent;
