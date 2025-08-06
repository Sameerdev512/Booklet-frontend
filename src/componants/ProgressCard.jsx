import Card from "./Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCard = ({ id, title, url, heading, percentage }) => {
  return (
    <div className="position-relative progress-container">
      <h4 className="fs-6 fw-bolder py-0">{heading}</h4>
      <div>
        <Card title={title} url={url} id={id} />
      </div>
      <div className="position-absolute progress-bar">
        <CircularProgressbar
          value={percentage}
          strokeWidth={12}
          styles={buildStyles({
            textColor: "black",
            pathColor: "blue",
            trailColor: "whitesmoke",
          })}
          text={`${percentage}% `}
          className="p-5"
        />
      </div>
    </div>
  );
};

export default ProgressCard;
