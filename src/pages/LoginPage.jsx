import React, { useState, useEffect } from "react";
import "../assets/scss/style.scss";
const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    console.log(loginDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(loginDetails);
  };

  useEffect(() => {
    document.title = "Login - Booklet"; // set the page title
  }, []);

  return (
    <div className="login-container d-grid ">
      <div className="row mx-0 ">
        <div className="left col-sm-6 my-md-0 my-5 d-grid align-items-center">
          <div className=" mx-0 row justify-content-center">
            <div className="login-form col-sm-6 col-10">
              <div className="brand text-center">
                <h2 className="fw-bolder fs-2">
                  <span className="text-primary">Book</span>Let
                  <span className="text-primary">.</span>
                </h2>
                <span className="fw-bolder fs-md-6">by Datacode.</span>
              </div>
              <div className="heading my-4 text-center fs-2">
                Login In To Get Inside
              </div>

              <form>
                <div class="form-group ">
                  <label for="exampleInputEmail1">Email </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control cu-input mb-4 "
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control cu-input mb-4 "
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <button className="row btn btn-primary cu-btn my-2 px-4 m-auto fw-bolder rounded-5" onClick={handleSubmit}>
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="right col-md-6 col-12"></div>
      </div>
    </div>
  );
};

export default LoginPage;
