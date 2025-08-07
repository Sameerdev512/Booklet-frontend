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
  const Books = useSelector((state) => state.books.list);

  useEffect(() => {
    document.title = "Dashboard - Booklet"; // set the page title
  }, []);

  return (
    <div className="row mx-0 cu-container">
      <div className="col-md-3 col-12 d-md-block d-none left-section">
        <Sidebar />
      </div>
      <div className="col-md-9 col-12 right-section">
        <Navbar />
        <div className="row mx-0 mt-5 pt-5 hero-section">
          <div className="col-md-8 col-12 left">
            <Banner
              title={bannerDetails?.title}
              author={!bannerDetails?.author}
              url={bannerDetails?.url}
            />
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-md-center justify-content-start right">
            <ProgressCard
              id={currentBook?.id}
              percentage={currentBook?.progress}
              title={currentBook?.title}
              url={currentBook?.url}
              heading="Continue Reading"
            />
          </div>
        </div>
        <div className="mt-md-3 mt-0 last-section">
          <div className="row mx-0 fs-4 fw-bolder heading">
            <span className="col-12 text-md-start text-center mb-3">
              Top Rated Comics
            </span>
          </div>
          <div className="row mx-0 justify-content-md-start justify-content-center">
            {Books &&
              Books.map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  url={item.url}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
