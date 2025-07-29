import React from "react";
import "../assets/scss/style.scss";
import { FaBox } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { BsSaveFill } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import Banner from "../assets/componants/Banner";
import Card from "../assets/Card";

const Dashboard = () => {
  return (
    <div className="dashboard-container d-flex flex-row">
      <div className="left-section  d-flex  flex-column align-items-center ">
        <div className="brand d-flex flex-column align-items-end my-4 mb-5">
          <h2 className="fw-bolder">
            <span className="text-primary">Book</span>Let
            <span className="text-primary">.</span>
          </h2>
          <span className="fw-bolder fs-lg-6">by Datacode.</span>
        </div>

        <div className="catelog d-flex flex-column">
          <div className="selected-category rounded-4">
            <FaBox className="mx-3 my-3" />
            Dashboard
          </div>
          <div>
            <FaBookOpen className="m-3 my-4" />
            My Collections
          </div>
          <div>
            <BsSaveFill className="mx-3 my-3" />
            Favourites
          </div>
        </div>

        <div className="setting catelog">
          <div>
            <SlSettings className="mx-3 my-3" /> Setting
          </div>
          <div>
            <RiLogoutBoxRFill className="mx-3 my-3" /> LogOut
          </div>
        </div>
      </div>

      <div className="right-section d-flex flex-column ">
        <nav className="d-flex flex-row  my-4">
          <div className="left d-flex search-bar w-50">
            <input type="" className="form-control cu-input p-2" />
            <FaSearch style={{position:"absolute",left:"61%",top:"6%"}}/>
          </div>
          <div className="right d-flex flex-row w-25 justify-content-center">
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
        </nav>

        <div class="hero-section d-flex  justify-content-evenly my-3">
          <div class="left banner ">
            <Banner />
          </div>
          <div class="right"><h4>Continue Reading</h4><Card/> </div>
        </div>

        <div className="last-section d-flex flex-column align-items-start">
          <div className="heading">
            <span>Top Rated Comics</span>
          </div>
          <div className="comics d-flex flex-row justify-content-start flex-wrap">
            <Card />
            <Card />

            <Card />

            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
