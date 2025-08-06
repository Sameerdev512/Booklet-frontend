import "../assets/scss/style.scss";
import { IoNotifications } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Navbar = () => {

  return (
    <div>
      <nav className="my-md-4 my-3 navbar-container">
        <div className="row mx-0">
          <div className="col-8 my-auto left">
            <div className="d-md-none d-hidden icon">
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
      </nav>

      {/* mobile responsive side Navbar*/}
      {/* <nav className="d-md-hidden d-block col-8"><Sidebar/></nav> */}
    </div>
  );
};

export default Navbar;
