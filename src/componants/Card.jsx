import { useNavigate } from "react-router-dom";
import "../assets/scss/style.scss";

const Card = ({ id,title, author, url }) => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/bookpage",{
      state:{id}
    })
  }

  return (
    <div className="col-auto mb-4 card-container" onClick={handleClick  }>
      <img
        src={url ? url : "images/01.png"}
        className="img-fluid rounded-2"
      ></img>
      <div className="col title">{title}</div>
      <div>{author}</div>
    </div>
  );
};

export default Card;
