import "../assets/scss/style.scss";
import { FaBox } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { BsSaveFill } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({id}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="justify-content-center align-content-start px-xl-5 px-2 sidebar-container">
      <div className="my-4 mb-5 d-md-block d-none brand">
        <Link to="/" className="text-decoration-none">
          <h2 className="fw-bolder">
            <span className="text-primary">Book</span>Let
            <span className="text-primary">.</span>
          </h2>
        </Link>
        <span className="fw-bolder fs-6">by Datacode.</span>
      </div>
      <div className="catelog mt-md-0 mt-3">
        <div
          className={`rounded-4 ${
            location.pathname == "/dashboard" ? "selected-category" : ""
          }`}
          onClick={() => navigate("/dashboard")}
        >
          <FaBox className="mx-3 my-lg-3 my-3 fs-6" />
          Dashboard
        </div>
        <div
          onClick={() => navigate("/mycollection")}
          className={`rounded-4 fs-6 ${
            location.pathname == "/mycollection" ||
            location.pathname == `/book/${id}`
              ? "selected-category"
              : ""
          }`}
        >
          <FaBookOpen className="m-3 my-lg-3" />
          My Collections
        </div>
        <div className="rounded-4 fs-6 ">
          <BsSaveFill className="m-3 my-lg-3" />
          Favourites
        </div>
      </div>
      <div className="mb-5 position-absolute bottom-0 catelog">
        <div>
          <SlSettings className="m-3" /> Setting
        </div>
        <div>
          <RiLogoutBoxRFill className="mx-3" /> LogOut
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
