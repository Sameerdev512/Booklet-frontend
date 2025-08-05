import React from "react";
import "../assets/scss/style.scss";
import { FaBox } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { BsSaveFill } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar-container justify-content-center align-content-start px-xl-5 px-2">
      <div className="brand my-4 mb-5">
        <h2 className="fw-bolder">
          <span className="text-primary">Book</span>Let
          <span className="text-primary">.</span>
        </h2>
        <span className="fw-bolder fs-lg-6">by Datacode.</span>
      </div>

      <div className="catelog">
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
            location.pathname == "/mycollection" || location.pathname == "/"
              ? "selected-category"
              : ""
          }`}
        >
          <FaBookOpen className="m-3 my-lg-3 my-3" />
          My Collections
        </div>
        <div className="rounded-4 fs-6 ">
          <BsSaveFill className="mx-3 my-lg-3 my-3" />
          Favourites
        </div>
      </div>

      <div className="catelog mb-5 position-absolute bottom-0">
        <div>
          <SlSettings className="mx-3 my-3" /> Setting
        </div>
        <div>
          <RiLogoutBoxRFill className="mx-3" /> LogOut
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
