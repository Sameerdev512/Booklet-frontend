import React from 'react'
import { useState } from 'react'

const SignInPage = () => {
  const [details,setDetails] = useState({
      email:"",
      password:""
    })
  
    const handleChange=(e)=>{
      setDetails({...details,[e.target.name]:e.target.value})
      console.log(details)
    }
    return (
      <div className="login-container d-grid align-content-center align-items-center ">
        <div className="row ">
          <div className="left col-6 m-auto d-flex flex-column align-items-center">
            <div className="login-form col-6">
              <div className="brand row">
                <h2 className="fw-bolder">
                  <span className="text-primary">Book</span>Let
                  <span className="text-primary">.</span>
                </h2>
                <span className="fw-bolder fs-lg-6">by Datacode.</span>
              </div>
              <div className="heading row my-4 ">Sign In To Get Inside</div>
              <div className="row ">
                <form className="">
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
                  <button className="btn btn-primary cu-btn my-2 px-4">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="signin-right right col-6"></div>
        </div>
      </div>
    );
}

export default SignInPage
