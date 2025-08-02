import "../assets/scss/style.scss";
import Banner from "../assets/componants/Banner";
import Card from "../assets/componants/Card";
import Sidebar from "../assets/componants/Sidebar";
import {
  comicDetails,
  bannerDetails,
  currentBook,
} from "./constant/ConstantData";
import ProgressCard from "../assets/componants/ProgressCard";
import Navbar from "../assets/componants/Navbar";

const Dashboard = () => {
  return (
    <div className="cu-container ">
      <div className="row mx-0 ">
        <div className="col-12  col-md-3 left-section d-md-block d-none">
          <Sidebar />
        </div>

        <div className="col-12 col-md-9 px-0  right-section mx-0 ">
          <Navbar />

          <div className="hero-section my-sm-3">
            <div className="row mx-0">
              <div className="left col-md-8 col-12">
                <Banner
                  title={bannerDetails.title}
                  author={bannerDetails.author}
                  url={bannerDetails.url}
                />
              </div>
              <div className="right col-sm-4 col-12 d-grid justify-content-md-center justify-content-start align-content-start py-sm-0 py-md-4">
                <ProgressCard
                  title={currentBook.title}
                  url={currentBook.url}
                  heading="Contiune Reading"
                />
              </div>
            </div>

            <div className="last-section d-grid">
              <div className="heading row mx-0">
                <span className=" text-center text-sm-start mb-3">
                  Top Rated Comics
                </span>
              </div>
              <div className="row mx-0 d-grid ">
                <div className="row mx-0 row-gap-4 justify-content-sm-start justify-content-center">
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
    </div>
  );
};

export default Dashboard;
