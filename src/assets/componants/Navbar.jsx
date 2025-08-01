import React from "react";
import "../scss/style.scss";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container  my-4 ">
        <div className="row">
          <div className="left col-8">
            <input
              type="text"
              className="form-control cu-input p-2"
              placeholder="Search here..."
              color="white"
            />
          </div>
          <div className="right col-4 d-flex jusify-content-center">
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
