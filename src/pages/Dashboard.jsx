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
    <div className="row mx-0 cu-container">
      <div className="col-12 col-md-3 d-md-block d-none left-section">
        <Sidebar />
      </div>

      <div className="col-md-9 col-12 right-section">
        <Navbar />
        <div className="row mx-0 hero-section">
          <div className="col-md-8 col-12 left">
            <Banner
              title={bannerDetails.title}
              author={bannerDetails.author}
              url={bannerDetails.url}
            />
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-md-center justify-content-start right">
            <ProgressCard
              title={currentBook.title}
              url={currentBook.url}
              heading="Contiune Reading"
            />
          </div>
        </div>

        <div className="mt-0 mt-md-3 last-section">
          <div className="row mx-0 fs-4 fw-bolder col-12 heading">
            <span className="col-12 text-center text-md-start mb-3">
              Top Rated Comics
            </span>
          </div>
          <div className="row mx-0 justify-content-center justify-content-md-start">
            {books.map((item) => (
              <Card
              id={item.id}
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
