import "../assets/scss/style.scss";
import { IoNotifications } from "react-icons/io5";
import Card from "../assets/componants/Card";
import Sidebar from "../assets/componants/Sidebar";
import {comicDetails,completedComics,currentBook} from './constant/ConstantData'
import ProgressCard from "../assets/componants/ProgressCard";
import Navbar from "../assets/componants/Navbar";

const MyCollections = () => {
  
  return (
    <div className="my-collection-container cu-container">
      <div className="row mx-0">
        <div className="col-12  col-md-3 left-section d-md-block d-none">
          <Sidebar page="my-collection" />
        </div>

        <div className="col-12 col-md-9  right-section mx-0 ">
          <Navbar />

          <div class="hero-section my-sm-3">
            <div className="row mx-0">
              <div className="left col-md-8 col-12 mb-4 mb-md-0">
                <div className="heading mb-2 my-mb-md-0">Completed Read</div>
                <div className="d-flex flex-row hide-scrollbar overflow-auto ">
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

              <div class="right col-sm-4 col-12 d-grid justify-content-md-center justify-content-start align-content-start py-sm-0 py-md-4">
                <ProgressCard
                  title={currentBook.title}
                  url={currentBook.url}
                  heading="Continue Reading"
                />
              </div>
            </div>
          </div>

          <div className="last-section d-grid">
            <div className="heading row mx-0">
              <span className="text-center text-sm-start mb-3">Top Read</span>
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
