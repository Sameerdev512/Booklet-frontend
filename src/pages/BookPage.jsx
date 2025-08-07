import "../assets/scss/style.scss";
import Sidebar from "../componants/Sidebar";
import { ChapterProgress } from "./constant/ConstantData";
import { currentBook } from "./constant/ConstantData";
import Navbar from "../componants/Navbar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProgressCard from "../componants/ProgressCard";

const BookPage = () => {
  const location = useLocation();
  const { id } = location.state || 0;

  const Comics = useSelector((state) => state.books.list);
  const book = Comics.find((item) => item.id == id);
  console.log(book);

  return (
    <div className="cu-container book-page-container">
      <div className="row mx-0">
        <div className="col-md-3 col-12 d-md-block d-none left-section">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 px-3 right-section">
          <Navbar />
          <div className="pt-5 hero-section">
            <div className="row">
              <div className="col-md-8 col-12 left">
                <div className="fs-1 fw-bolder mb-md-3 mb-1 heading">
                  {book?.title.split(":")[0]}
                  {book?.title.split(":")[1]}
                </div>
                <div className="fs-6 details">{book?.description}</div>
              </div>
              <div className="col-sm-4 col-12 d-flex justify-content-md-center justify-content-start align-content-start py-md-0 py-4 right">
                <ProgressCard
                  id={currentBook?.id}
                  percentage={currentBook.progress}
                  title={currentBook?.title}
                  url={currentBook?.url}
                  heading="Contiune Reading"
                />
              </div>
            </div>
          </div>
          <div className="last-section">
            <div className="fs-4 fw-bolder heading">
              <span className="fs-4">Reading Plan</span>
            </div>
            <div className="row chapter-progress-heading">
              <div className="col-md-5 col-6 fs-3 fw-bolder">
                Chapters: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
              <div className="col-md-5 col-6 fs-3 fw-bolder">
                Days: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
            </div>
            <div className="row mx-0 my-4 d-flex overflow-auto">
              {ChapterProgress &&
                ChapterProgress.map((chapter, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between mb-2 my-md-0 chapter-card"
                    style={{ textAlign: "start" }}
                  >
                    <h6 className="col-md-2 col-4">{chapter.chapterNo}</h6>
                    <p className="col-md-4 col-7">{chapter.title}</p>
                    <p className="col-md-3 col-4">{chapter.completedDate}</p>
                    <p className="col-md-3 col-4">{chapter.progress}</p>
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
