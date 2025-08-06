import "../assets/scss/style.scss";
import Card from "../componants/Card";
import Sidebar from "../componants/Sidebar";
import { chapterProgress } from "./constant/ConstantData";
import Navbar from "../componants/Navbar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const BookPage = () => {
  const location = useLocation();
  const {id} = location.state ||0;

  const comics = useSelector((state)=>state.books.list)
  const book = comics.find((item)=>item.id == id);
  console.log(book)
  
  return (
    <div className="cu-container book-page-container">
      <div className="row mx-0">
        <div className="col-12 col-md-3 d-md-block d-none left-section">
          <Sidebar />
        </div>

        <div className="col-md-9 col-12 px-3 right-section">
          <Navbar />

          <div class="my-md-3 my-0 hero-section">
            <div className="row">
              <div className="col-md-8 col-12 left">
                <div className="fs-1 fw-bolder heading">
                  {book.title.split(":")[0]}: <br></br>{book.title.split(":")[1]}
                </div>
                <div className="fs-6 details">{book.description}</div>
              </div>
              <div class="col-sm-4 col-12 justify-content-md-center justify-content-start align-content-start py-md-0 py-4 right">
                <h4 className="fs-4 fw-bold">Book Progress</h4>
                <Card
                  author="Kobra Kai: Ultimate"
                  url="src/assets/images/05.png"
                />
              </div>
            </div>
          </div>

          <div className="last-section">
            <div className="fs-4 fw-bolder heading">
              <span className="fs-4">Reading Plan</span>
            </div>
            <div className="row chapter-progress-heading">
              <div className="col-6 col-md-5 fs-3 fw-bolder">
                Chapters: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
              <div className="col-auto col-md-5 col-6 fs-3 fw-bolder">
                Days: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
            </div>
            <div className="my-4 row mx-0 d-flex overflow-auto">
              {chapterProgress.map((chapter, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between mb-2 my-md-0 chapter-card"
                  style={{ textAlign: "start" }}
                >
                  <h6 className="col-3 col-md-2">{chapter.chapterNo}</h6>
                  <p className="col-6 col-md-4">{chapter.title}</p>
                  <p className="col-3 col-md-3">{chapter.completedDate}</p>
                  <p className="col-3">{chapter.progress}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
