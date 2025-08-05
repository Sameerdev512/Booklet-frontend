import React from "react";
import "../assets/scss/style.scss";

const Banner = ({ title, author, url }) => {
  return (
    <div
      className="banner-container rounded-2"
      style={{ backgroundImage: { url } }}
    >
      <div className="details row mx-0 h-100 align-content-end pb-3">
        <div className="left col-7">
          <div>
            <span>{author}</span>
          </div>
          <div>
            <span className="title fw-bolder">
              {title.split(":")[0]}:<br></br>
              {title.split(":")[1]}
            </span>
          </div>
        </div>
        <div className="right col-5 d-flex align-items-center justify-content-center">
          <div>
            <button class="btn btn-primary rounded-5 fw-bold px-md-4 py-md-2">
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
