import React, { useState } from "react";
import "../assets/scss/style.scss";
import { IoNotifications } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [name, setName] = useState("none");

  return (
    <div>
      <nav className="my-md-4 my-3 navbar-container">
        <div className="row mx-0">
          <div className="col-8 my-auto left">
            <div className="d-hidden d-md-none icon">
              <span onClick={() => setName("block")}>
                <RxHamburgerMenu />
              </span>
            </div>
            <div className="d-none d-md-block">
              <input
                type="text"
                className="form-control p-2 rounded-3 cu-input"
                placeholder="Search here..."
                color="white"
              />
            </div>
          </div>
          <div className="col-4 d-flex justify-content-md-center justify-content-end right">
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
