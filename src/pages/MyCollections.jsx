import { useEffect } from "react";
import "../assets/scss/style.scss";
import Card from "../componants/Card";
import Sidebar from "../componants/Sidebar";
import ProgressCard from "../componants/ProgressCard";
import Navbar from "../componants/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { completedComics, currentBook } from "./constant/ConstantData";

const MyCollections = () => {
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.list);

  useEffect(() => {
    document.title = "My Collection - Booklet"; // set the page title
  }, []);

  return (
    <div className="row mx-0 my-collection-container cu-container">
      <div className="col-12  col-md-3 d-md-block d-none left-section">
        <Sidebar page="my-collection" />
      </div>

      <div className="col-12 col-md-9 right-section">
        <Navbar />

        <div class="row mx-0 my-md-3 hero-section">
          <div className="col-md-8 col-12 mb-4 mb-md-0 rounded-3 left">
            <div className="fs-4 fw-bolder mb-2 heading">Completed Read</div>
            <div className="d-flex flex-row overflow-auto gap-3 hide-scrollbar">
              {completedComics.map((item) => (
                <Card
                id={item.id}
                  key={item.index}
                  title={item.title}
                  author={item.author}
                  url={item.url}
                />
              ))}
            </div>
          </div>

          <div class="col-sm-4 col-12 d-grid justify-content-md-center justify-content-start align-content-start py-sm-0 right">
            <ProgressCard
              title={currentBook.title}
              url={currentBook.url}
              heading="Continue Reading"
            />
          </div>
        </div>

        <div className="last-section">
          <div className="fs-4 fw-bolder row mx-0 heading">
            <span className="text-center text-sm-start mb-3">Top Read</span>
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

          <button
            className="bg-primary mb-5 w-25 rounded-4"
            onClick={() => navigate("/addbook")}
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCollections;
