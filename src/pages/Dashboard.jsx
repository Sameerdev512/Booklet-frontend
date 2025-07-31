import "../assets/scss/style.scss";
import { IoNotifications } from "react-icons/io5";
import Banner from "../assets/componants/Banner";
import Card from "../assets/componants/Card";
import Sidebar from "../assets/componants/Sidebar";
import {comicDetails,bannerDetails,currentBook} from './constant/ConstantData'
import ProgressCard from "../assets/componants/ProgressCard";

const Dashboard = () => {

  return (
    <div className="dashboard-container d-flex flex-row">
      <div className="left-section">
        <Sidebar />
      </div>

      <div className="right-section d-flex flex-column ">
        <nav className="d-flex flex-row  my-4">
          <div className="left d-flex search-bar justify-content-center">
            <input
              type="text"
              className="form-control cu-input p-2"
              placeholder="Search here..."
              color="white"
            />
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

        <div class="hero-section d-grid  my-lg-3">
          <div className="row">
            <div class="left banner col-8">
              <Banner
                title={bannerDetails.title}
                author={bannerDetails.author}
                url={bannerDetails.url}
              />
            </div>
            <div class="right col">
              <ProgressCard title={currentBook.title} url={currentBook.url} heading="Contiune Reading"/>
          </div>
        </div>

        <div className="last-section d-flex flex-column align-items-start">
          <div className="heading">
            <span>Top Rated Comics</span>
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

export default Dashboard;
