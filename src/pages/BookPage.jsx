import "../assets/scss/style.scss";
import Card from "../componants/Card";
import Sidebar from "../componants/Sidebar";
import { chapterProgress } from "./constant/ConstantData";
import Navbar from "../componants/Navbar";

const BookPage = () => {

  return (
    <div className="book-page-container cu-container d-grid">
      <div className="row mx-0">
        <div className="col-12  col-md-3 left-section d-md-block d-none">
          <Sidebar />
        </div>

        <div className="right-section col-md-9 col-12 px-3">
          <Navbar />

          <div class="hero-section my-md-3 my-0">
            <div className="row mx-0">
              <div className="left col-md-8 col-12">
                <div className="heading fs-1 fw-bolder">
                  Batman : <br></br>The Knight King
                </div>
                <div className="details fs-6">
                  A book description is a brief summary of a book's plot,
                  characters, and themes. It helps readers get a sense of what
                  the book is about. Book descriptions are often found on the
                  back cover of the book, or on retailer websites.
                </div>
              </div>
              <div class="right col-sm-4 col-12 d-grid justify-content-md-center justify-content-start align-content-start py-md-0 py-4">
                <h4>Book Progress</h4>
                <Card
                  author="Kobra Kai: Ultimate"
                  url="src/assets/images/05.png"
                />{" "}
              </div>
            </div>
          </div>

          <div className="last-section d-grid">
            <div className="heading fs-4 fw-bolder row">
              <span className="fs-4">Reading Plan</span>
            </div>
            <div className="chapter-progress-heading row">
              <div className="col-6 col-md-5 fs-3 fw-bolder">
                Chapters: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
              <div className="col-auto col-md-5 col-6 fs-3 fw-bolder">
                Days: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
            </div>
            <div className="row my-4">
              {chapterProgress.map((chapter, index) => (
                <div
                  key={index}
                  className="chapter-card d-flex justify-content-between row"
                  style={{ textAlign: "start" }}
                >
                  <h6 className="col-2">{chapter.chapterNo}</h6>
                  <p className="col-4">{chapter.title}</p>
                  <p className="col-2">{chapter.completedDate}</p>
                  <p className="col">{chapter.progress}</p>
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
