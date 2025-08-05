import "../assets/scss/style.scss";
const Card = ({ title, author, url }) => {
  return (
    <div className="col-auto card-container mb-4">
      <img src={url ? url : "images/01.png"} className="img-fluid rounded-2"></img>
      <div className="title col">{title}</div>
      <div>{author}</div>
    </div>
  );
}

export default Card;
