import React from "react";
import Card from "./Card";

const ProgressCard = ({title,url,heading}) => {
  return (
    <div className="d-grid ">
      <h4>{heading}</h4>
      <div>
        <Card title={title} url={url} />
      </div>
    </div>
  );
};

export default ProgressCard;
