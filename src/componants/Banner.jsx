import React from "react";
import "../assets/scss/style.scss";

const Banner = ({ title, author, url }) => {
  return (
    <div
      className="banner-container rounded-2"
      style={{ backgroundImage: { url } }}
    >
      <div className="details d-grid h-100">
        <div className="row mx-0 justify-content-center align-items-end mb-3">
          <div className="left col-sm-8 col-9 ">
            <div>
              <span>{author}</span>
            </div>
            <div>
              <span className="title fs-2 fw-bolder">
                {title.split(":")[0]}:<br></br>
                {title.split(":")[1]}
              </span>
            </div>
          </div>
          <div className="right col-3 align-items-end mb-3">
            <div>
              <button class="btn btn-primary rounded-5 fs-6 fw-bold  px-sm-4 py-sm-2 ">
                Read Now{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
