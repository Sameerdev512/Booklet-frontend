import React from "react";
import "../scss/style.scss";

const Banner = ({ title, author, url }) => {
  return (
    <div
      className="banner-container d-grid  rouded-4 "
      style={{ backgroundImage: { url } }}
    >
      <div className="details row  justify-content-center align-items-end">
        <div className="row ">
          <div className="left col-8 px-5">
            <div>
              <span>{author}</span>
            </div>
            <div style={{ width: "max-content" }}>
              <span className="title">
                {title.split(":")[0]}:<br></br>
                {title.split(":")[1]}
              </span>
            </div>
          </div>
          <div className="right col-3 align-items-center ">
            <div>
              <button class="btn btn-primary rounded-5 fs-6 fw-bold  px-lg-4 py-lg-2 ">
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
