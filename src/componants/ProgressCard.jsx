import Card from "./Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCard = ({ id, title, url, heading, progress }) => {
  
  return (
    <div className="position-relative progress-container">
      <h4 className="fs-6 fw-bolder py-0">{heading}</h4>
      <div>
        <Card title={title} url={url} id={id} />
      </div>
      <div className="position-absolute progress-bar">
        <CircularProgressbar
          value={progress??0}
          strokeWidth={12}
          background
          styles={buildStyles({
            textColor: "white",
            pathColor: "blue",
            trailColor: "whitesmoke",
            backgroundColor: "#989af9ff",
          })}
          text={`${progress ? progress : 0}% `}
          className="p-5"
        />
      </div>
    </div>
  );
};

export default ProgressCard;
