import "../assets/scss/style.scss";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div>
      <nav className="mb-md-4 mb-3 py-3 navbar-container position-fixed">
        <div className="row mx-0">
          <div className="col-8 my-auto left">
            <div className="d-md-none d-hidden icon" onClick={toggleSidebar}>
              <span>
                <RxHamburgerMenu />
              </span>
            </div>
            <div className="d-md-block d-none">
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
        {showSidebar && (
          <nav
            className={`d-block d-md-none position-fixed w-75 sidebar-slide ${
              showSidebar ? "active" : ""
            }`}
          >
            <Sidebar />
          </nav>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
