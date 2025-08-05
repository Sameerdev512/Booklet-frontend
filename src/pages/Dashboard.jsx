import { useEffect } from "react";
import "../assets/scss/style.scss";
import Banner from "../componants/Banner";
import Card from "../componants/Card";
import Sidebar from "../componants/Sidebar";
import ProgressCard from "../componants/ProgressCard";
import Navbar from "../componants/Navbar";
import { useSelector } from "react-redux";
import {
  bannerDetails,
  currentBook,
} from "./constant/ConstantData"; //removed the comicDetails


const Dashboard = () => {
  const books = useSelector((state) => state.books.list);

  useEffect(() => {
    document.title = "Dashboard - Booklet"; // set the page title
  }, []);

  return (
    <div className="cu-container ">
      <div className="row mx-0 ">
        <div className="col-12  col-md-3 left-section d-md-block d-none">
          <Sidebar />
        </div>

        <div className="right-section col-md-9 col-12 px-3">
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
              <div className="heading fs-4 fw-bolder row mx-0">
                <span className=" text-center text-sm-start mb-3">
                  Top Rated Comics
                </span>
              </div>
              <div className="d-grid ">
                <div className="row justify-content-center justify-content-md-start">
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
