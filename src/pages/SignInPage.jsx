import { useState, useEffect } from "react";

const SignInPage = () => {
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "SignIn - Booklet"; // set the page title
  }, []);

  const handleChange = (e) => {
    setSignInDetails({ ...signInDetails, [e.target.name]: e.target.value });
    console.log(signInDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(signInDetails);
  };

  return (
    <div className="row mx-0 d-flex align-items-center justify-content-md-between login-container">
      <div className="col-10 col-md-3 my-md-4 py-3 mx-auto left">
        <div className="w-md-50 w-100 mx-auto d-flex flex-column login-form">
          <div className="text-center brand">
            <h2 className="fw-bolder fs-2">
              <span className="text-primary">Book</span>Let
              <span className="text-primary">.</span>
            </h2>
            <span className="fw-bolder fs-6">by Datacode.</span>
          </div>
          <div className="text-center my-md-4 my-3 fs-2 heading">
            Sign In To Get Inside
          </div>
          <form>
            <div class="form-group ">
              <label htmlFor="exampleInputEmail1">Email </label>
              <input
                type="email"
                name="email"
                class="form-control mb-md-4 mb-2 cu-input"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                class="form-control mb-md-4 mb-2 cu-input"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="btn btn-primary fs-6 my-2 px-4 m-auto fw-bolder rounded-5 cu-btn"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6 col-12 right signin-right"></div>
    </div>
  );
};

export default SignInPage;
