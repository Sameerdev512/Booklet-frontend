import "../assets/scss/style.scss";
import { IoNotifications } from "react-icons/io5";
import Card from "../assets/componants/Card";
import Sidebar from "../assets/componants/Sidebar";
import { chapterProgress } from "./constant/ConstantData";

const BookPage = () => {
  const dummyData = [
    {
      title: "The Flash, Vol 1",
      author: "joshua Williamson",
      url: "images/01.png",
    },
    {
      title: "Titans Vol 2",
      author: "Andrew Robinson",
      url: "images/02.png",
    },
    {
      title: "Harly Quinn, Vol 1",
      author: "Jimmy Palmiotti",
      url: "images/03.png",
    },
    { title: "Suicide Squad #8", author: "Tom Taylor", url: "images/04.png" },
  ];

  return (
    <div className="book-page-container dashboard-container d-flex flex-row">
      <div className="left-section">
        <Sidebar />
      </div>

      <div className="right-section d-flex flex-column ">
        <nav className="d-flex flex-row  my-4">
          <div className="left d-flex search-bar justify-content-center">
            <input
              type=""
              className="form-control cu-input p-2"
              placeholder="Search here..."
              color="white"
            />
            {/* <FaSearch style={{position:"absolute",left:"61%",top:"6%"}}/> */}
          </div>
          <div className="right d-flex flex-row w-25 justify-content-center">
            <div
              className="mx-3
                  "
            >
              <IoNotifications size="1.5rem" className="my-2" />
            </div>
            <div>
              <img src="images/profile.png"></img>
            </div>
          </div>
        </nav>

        <div class="hero-section d-grid my-4">
          <div className="row">
            <div className="left col-8">
              <div className="heading">
                Batman : <br></br>The Knight King
              </div>
              <div className="details">
                A book description is a brief summary of a book's plot,
                characters, and themes. It helps readers get a sense of what the
                book is about. Book descriptions are often found on the back
                cover of the book, or on retailer websites. 
              </div>
            </div>
            <div class="right col-auto  ">
              <h4>Book Progress</h4>
              <Card author="Kobra Kai: Ultimate" url="images/05.png" />{" "}
            </div>
          </div>
        </div>

        <div className="last-section reading-plan d-flex flex-column align-items-start">
          <div className="heading">
            <span>Reading Plan</span>
          </div>
          <div className="chapter-progress-heading d-flex flex-row justify-content-between">
            <div className="chapter-heading">
              Chapters: <span style={{ color: "#4A83F6" }}>20</span>
            </div>
            <div className="chapter-heading">
              Days: <span style={{ color: "#4A83F6" }}>20</span>
            </div>
          </div>
          <div className=" d-flex flex-column my-4" style={{ width: "60%" }}>
            {chapterProgress.map((chapter, index) => (
              <div
                key={index}
                className="chapter-card d-flex justify-content-between"
                style={{ width: "100%", textAlign: "start" }}
              >
                <h6 style={{ width: "20%" }}>{chapter.chapterNo}</h6>
                <p style={{ width: "30%" }}>{chapter.title}</p>
                <p style={{ width: "20%" }}>{chapter.completedDate}</p>
                <p style={{ width: "20%" }}>{chapter.progress}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
