import React from "react";
import Card from "./Card";

const ProgressCard = ({ title, url, heading }) => {
  return (
    <div >
      <h4 className="fs-5 fw-bolder">{heading}</h4>
      <div>
        <Card title={title} url={url} />
      </div>
    </div>
  );
};

export default ProgressCard;
