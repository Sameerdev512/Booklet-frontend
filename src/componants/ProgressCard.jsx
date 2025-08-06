import React from "react";
import Card from "./Card";

const ProgressCard = ({ id, title, url, heading }) => {
  
  return (
    <div>
      <h4 className="fs-6 fw-bolder py-0">{heading}</h4>
      <div>
        <Card title={title} url={url} id={id}/>
      </div>
    </div>
  );
};

export default ProgressCard;
