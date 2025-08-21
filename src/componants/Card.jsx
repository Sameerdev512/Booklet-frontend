import { useNavigate } from "react-router-dom";
import "../assets/scss/style.scss";

const Card = ({ id, title, author, url }) => {
  const navigate = useNavigate();

  return (
    <div
      className="col-auto mb-4 card-container"
      role="button"
      onClick={() => navigate(`/book/${id}`)}
    >
      <img src={url ? url : "images/01.png"} className="img-fluid rounded-2" />
      <div className="col title">{title}</div>
      <div>{author}</div>
    </div>
  );
};

export default Card;
