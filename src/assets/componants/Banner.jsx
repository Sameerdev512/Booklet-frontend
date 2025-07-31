import React from 'react'
import '../scss/style.scss'

const Banner = ({title,author,url}) => {
  return (
    <div className="banner-container d-flex flex-row align-items-end justify-content-around rouded-4 " style={{backgroundImage:{url}}}>
      <div className="details d-flex">
        <div className="left d-flex flex-column justify-content-end">
          <div><span>{author}</span></div>
          <div style={{width:"max-content"}}>
            <span className='title'>
              {title.split(":")[0]}:<br></br>{title.split(":")[1]}
            </span>
          </div>
        </div>
        <div className="right d-flex justify-content-center" style={{width:"100%"}}>
          <div>
            <button class="btn btn-primary rounded-5 fs-6 fw-bold  px-lg-4 py-lg-2 ">
              Read Now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
