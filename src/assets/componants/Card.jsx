import React from 'react'
import '../scss/style.scss'
function Card({title,author,url}) {
  return (
    <div className=" col-auto card-container rounded-3 mb-0">
     
        <img src={url ? url : "images/01.png"}></img>
        <div className="title col">{title}</div>
        <div>{author}</div>
      
    </div>
  );
}

export default Card
