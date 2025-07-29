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
      <div className="login-container d-flex ">
        <div className="left w-50 d-flex flex-column align-items-center justify-content-center">
          <div className="login-form d-flex flex-column ">
            <div className="brand d-flex flex-column align-items-end">
              <h2 className="fw-bolder">
                <span className="text-primary">Book</span>Let<span className="text-primary">.</span>
              </h2>
              <span className="fw-bolder fs-lg-6" >by Datacode.</span>
            </div>
            <div className="heading my-4">Sign In To Get Inside</div>
            <div>
              <form className="d-flex flex-column justifu-content-center">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control cu-input mb-5 p-2"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control cu-input mb-4 p-2"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-primary cu-btn px-4 m-auto my-2">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="signin-right w-50 bg-secondary"></div>
      </div>
    );
}

export default SignInPage
