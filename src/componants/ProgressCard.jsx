import React from "react";
import Card from "./Card";

const ProgressCard = ({ title, url, heading }) => {
  return (
    <div>
      <h4 className="fs-6 fw-bolder py-0">{heading}</h4>
      <div>
        <Card title={title} url={url} />
      </div>
    </div>
  );
};

export default ProgressCard;
