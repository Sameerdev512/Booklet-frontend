import "../assets/scss/style.scss";

const Banner = ({ title, author, url }) => {
  return (
    <div
      className="rounded-2 banner-container"
      style={{ backgroundImage: { url } }}
    >
      <div className="row mx-0 h-100 align-content-end pb-3 details">
        <div className="col-7 left">
          <div>
            <span>{author}</span>
          </div>
          <div>
            <span className="fw-bolder title">
              {title?.split(":")[0]}:<br></br>
              {title?.split(":")[1]}
            </span>
          </div>
        </div>
        <div className="col-5 d-flex align-items-center justify-content-center right">
          <div>
            <button className="btn btn-primary rounded-5 fw-bold px-md-4 py-md-2">
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
