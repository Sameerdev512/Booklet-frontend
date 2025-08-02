import React from "react";
import "../scss/style.scss";
import { IoNotifications } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container  my-4 ">
        <div className="row mx-0">
          <div className="left col-8 d-grid">
            <div className="row mx-0">
              <div className="col-1 d-hidden d-md-none text-center">
                <RxHamburgerMenu />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control cu-input p-2"
                  placeholder="Search here..."
                  color="white"
                />
              </div>
            </div>
          </div>
          <div className="right col-4 d-flex justify-content-center">
            <div
              className="mx-3
          "
            >
              <IoNotifications size="1.5rem" className="my-2" />
            </div>
            <div>
              <img src="images/profile.png"></img>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
