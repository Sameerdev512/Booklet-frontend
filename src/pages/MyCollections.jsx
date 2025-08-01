import "../assets/scss/style.scss";
import { IoNotifications } from "react-icons/io5";
import Card from "../assets/componants/Card";
import Sidebar from "../assets/componants/Sidebar";
import {comicDetails,completedComics,currentBook} from './constant/ConstantData'
import ProgressCard from "../assets/componants/ProgressCard";
import Navbar from "../assets/componants/Navbar";

const MyCollections = () => {
  
  return (
    <div className="my-collection-container cu-container d-grid">
      <div className="row">
        <div className="left-section col-3">
          <Sidebar page="my-collection" />
        </div>

        <div className="right-section col-9 mx-0">
          <Navbar />

          <div class="hero-section d-grid my-3 align-content-start">
            <div className="row">
              <div className="left col-8">
                <div className="heading">Completed Read</div>
                <div className="d-grid hide-scrollbar overflow-auto">
                  <div className="row py-2">
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
              </div>

              <div class="right col-4 d-grid justify-content-center align-content-start">
                <ProgressCard
                  title={currentBook.title}
                  url={currentBook.url}
                  heading="Continue Reading"
                />
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
    </div>
  );
};

export default MyCollections;
