import React from "react";
import { useState, useEffect } from "react";

const SignInPage = () => {
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignInDetails({ ...signInDetails, [e.target.name]: e.target.value });
    console.log(signInDetails);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.table(signInDetails)
  }

  useEffect(() => {
    document.title = "SignIn - Booklet"; // set the page title
  }, []);

  return (
    <div className="login-container d-grid ">
      <div className="row mx-0 ">
        <div className="left col-md-6 my-md-0 my-5 d-grid align-items-center">
          <div className=" mx-0 row justify-content-center">
            <div className="login-form col-md-6 col-10">
              <div className="brand text-center">
                <h2 className="fw-bolder fs-2">
                  <span className="text-primary">Book</span>Let
                  <span className="text-primary">.</span>
                </h2>
                <span className="fw-bolder fs-md-6">by Datacode.</span>
              </div>
              <div className="heading my-4 text-center fs-2">
                Sign In To Get Inside
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
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="right signin-right col-md-6 col-12"></div>
      </div>
    </div>
  );
};

export default SignInPage;
