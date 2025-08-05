import React, { useState } from "react";
import "../assets/scss/style.scss";
import { IoNotifications } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [name, setName] = useState("none");

  return (
    <div>
      <nav className="navbar-container my-md-4 my-3">
        <div className="row mx-0">
          <div className="left col-8 my-auto">
            <div className="icon d-hidden d-md-none ">
              <span onClick={() => setName("block")}>
                <RxHamburgerMenu />
              </span>
            </div>
            <div className="d-none d-md-block">
              <input
                type="text"
                className="form-control cu-input p-2 rounded-3"
                placeholder="Search here..."
                color="white"
              />
            </div>
          </div>
          <div className="right col-4 d-flex justify-content-md-center justify-content-end">
            <div className="mx-3">
              <IoNotifications size="1.5rem" className="my-2" />
            </div>
            <div>
              <img src="src/assets/images/profile.png"></img>
            </div>
          </div>
        </div>
      </nav>

      <nav className={`d-${name}`}>hello</nav>
    </div>
  );
};

export default Navbar;
