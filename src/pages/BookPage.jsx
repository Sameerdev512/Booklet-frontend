import "../assets/scss/style.scss";
import Card from "../assets/componants/Card";
import Sidebar from "../assets/componants/Sidebar";
import { chapterProgress } from "./constant/ConstantData";
import Navbar from "../assets/componants/Navbar";

const BookPage = () => {

  return (
    <div className="book-page-container cu-container d-grid">
      <div className="row">
        <div className="left-section col-3">
          <Sidebar />
        </div>

        <div className="right-section col-9 px-3">
          <Navbar />

          <div class="hero-section d-grid justify-content-center my-5">
            <div className="row">
              <div className="left col-8">
                <div className="heading">
                  Batman : <br></br>The Knight King
                </div>
                <div className="details">
                  A book description is a brief summary of a book's plot,
                  characters, and themes. It helps readers get a sense of what
                  the book is about. Book descriptions are often found on the
                  back cover of the book, or on retailer websites.
                </div>
              </div>
              <div class="right col-4  d-grid justify-content-center align-content-start">
                <h4>Book Progress</h4>
                <Card author="Kobra Kai: Ultimate" url="images/05.png" />{" "}
              </div>
            </div>
          </div>

          <div className="last-section reading-plan d-grid my-4">
            <div className="heading row">
              <span>Reading Plan</span>
            </div>
            <div className="chapter-progress-heading row">
              <div className="col-5 chapter-heading">
                Chapters: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
              <div className="col-auto chapter-heading">
                Days: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
            </div>
            <div className="row my-4" >
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
