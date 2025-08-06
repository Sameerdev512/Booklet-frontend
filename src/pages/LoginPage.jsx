import React, { useState, useEffect } from "react";
import "../assets/scss/style.scss";
const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Login - Booklet"; // set the page title
  }, []);

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    console.log(loginDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(loginDetails);
  };

  return (
    <div className="row mx-0 d-flex align-items-center justify-content-md-between login-container">
      <div className="col-10 col-md-3 my-md-0 my-md-4 py-3 mx-auto left">
        <div className="w-md-50 w-100 mx-auto d-flex flex-column login-form">
          <div className="text-center brand">
            <h2 className="fw-bolder fs-2">
              <span className="text-primary">Book</span>Let
              <span className="text-primary">.</span>
            </h2>
            <span className="fw-bolder fs-6">by Datacode.</span>
          </div>
          <div className="text-center my-md-4 my-3 fs-2 heading">
            Login In To Get Inside
          </div>
          <form>
            <div class="form-group ">
              <label htmlFor="exampleInputEmail1">Email </label>
              <input
                type="email"
                name="email"
                class="form-control cu-input mb-md-4 mb-2"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                class="form-control cu-input mb-md-4 mb-2"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="btn btn-primary fs-6 my-2 px-4 m-auto fw-bolder rounded-5 cu-btn"
                onClick={handleSubmit}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6 col-12 right"></div>
    </div>
  );
};

export default LoginPage;
