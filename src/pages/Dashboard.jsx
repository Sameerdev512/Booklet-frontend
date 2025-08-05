import { useEffect } from "react";
import "../assets/scss/style.scss";
import Banner from "../componants/Banner";
import Card from "../componants/Card";
import Sidebar from "../componants/Sidebar";
import ProgressCard from "../componants/ProgressCard";
import Navbar from "../componants/Navbar";
import { useSelector } from "react-redux";
import { bannerDetails, currentBook } from "./constant/ConstantData"; //removed the comicDetails

const Dashboard = () => {
  const books = useSelector((state) => state.books.list);

  useEffect(() => {
    document.title = "Dashboard - Booklet"; // set the page title
  }, []);

  return (
    <div className="cu-container row mx-0">
      <div className="col-12 col-md-3 left-section d-md-block d-none">
        <Sidebar />
      </div>

      <div className="right-section col-md-9 col-12 ">
        <div className="row mx-0">
          <div className="col-12">
            <Navbar />
          </div>
        </div>
        <div className="row mx-0 hero-section">
          <div className="left col-md-8 col-12">
            <Banner
              title={bannerDetails.title}
              author={bannerDetails.author}
              url={bannerDetails.url}
            />
          </div>
          <div className="right col-md-4 col-12 d-flex justify-content-md-center justify-content-start">
            <ProgressCard
              title={currentBook.title}
              url={currentBook.url}
              heading="Contiune Reading"
            />
          </div>
        </div>

        <div className="last-section mt-0 mt-md-3">
          <div className="row mx-0 heading fs-4 fw-bolder col-12">
            <span className="col-12 text-center text-md-start mb-3">
              Top Rated Comics
            </span>
          </div>
          <div className="row mx-0 justify-content-center justify-content-md-start">
            {books.map((item) => (
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
  );
};

export default Dashboard;
