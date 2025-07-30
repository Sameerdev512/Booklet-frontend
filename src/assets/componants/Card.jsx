import React from 'react'
import '../scss/style.scss'
function Card({title,author,url}) {
  return (
    <div className="d-flex flex-column w-auto  flex-wrap flex-shrink card-container rounded-3">
     
        <img src={url ? url : "images/01.png"}></img>
        <div className="title col">{title}</div>
        <div>{author}</div>
      
    </div>
  );
}

export default Card
