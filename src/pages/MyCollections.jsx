import "../assets/scss/style.scss";
import { IoNotifications } from "react-icons/io5";
import Card from "../assets/componants/Card";
import Sidebar from "../assets/componants/Sidebar";
import {comicDetails,completedComics,currentBook} from './constant/ConstantData'
import ProgressCard from "../assets/componants/ProgressCard";

const MyCollections = () => {
  
  return (
    <div className="my-collection-container dashboard-container d-flex flex-row">
      <div className="left-section">
        <Sidebar page="my-collection" />
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

        <div class="hero-section d-grid my-3">
          <div className="row">
            <div className="left col-8">
              <div className="heading">Completed Read</div>
              <div className="d-flex flex-row overflow-auto hide-scrollbar">
                {completedComics.map((item) => (
                  <Card
                    key={item.index}
                    title={item.title}
                    author={item.author}
                    url={item.url}
                  />
                ))}
              </div>
            </div>

            <div class="right col">
              <ProgressCard title={currentBook.title} url={currentBook.url} heading="Continue Reading"/>
            </div>
          </div>
        </div>

        <div className="last-section d-flex flex-column align-items-start">
          <div className="heading">
            <span>Top Read</span>
          </div>
          <div className="d-grid ">
            <div className="row">
              {comicDetails.map((item) => (
                <Card
                  title={item.title}
                  author={item.author}
                  url={item.url}
                  bold="bold"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollections;
