import React from 'react'
import '../scss/style.scss'

const Banner = () => {
  return (
    <div className="banner-container d-flex flex-row align-items-end justify-content-around rouded-4">
      <div className="details d-flex">
        <div className="left d-flex flex-column justify-content-end">
          <div><span>Frank Miler</span></div>
          <div>
            <span className='title'>
              Batman:<br></br>
              The Dark Knight
            </span>
          </div>
        </div>
        <div className="right">
          <div>
            <button class="btn btn-primary rounded-5 fs-6 fw-bold  px-4 py-2 ">
              Read Now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
