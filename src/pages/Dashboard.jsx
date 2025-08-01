import "../assets/scss/style.scss";
import Banner from "../assets/componants/Banner";
import Card from "../assets/componants/Card";
import Sidebar from "../assets/componants/Sidebar";
import {comicDetails,bannerDetails,currentBook} from './constant/ConstantData'
import ProgressCard from "../assets/componants/ProgressCard";
import Navbar from "../assets/componants/Navbar";

const Dashboard = () => {

  return (
    <div className="dashboard-container d-grid ">
      <div className="row">
        <div className="col-3 left-section ">
          <Sidebar />
        </div>

        <div className="col-9 right-section mx-0 ">
          <Navbar />

          <div class="hero-section d-grid  justify-content-center my-lg-3">
            <div className="row ">
              <div class="left col-8">
                <Banner
                  title={bannerDetails.title}
                  author={bannerDetails.author}
                  url={bannerDetails.url}
                />
              </div>
              <div class="right col-4 d-grid justify-content-center align-content-start ">
                
                <ProgressCard
                  title={currentBook.title}
                  url={currentBook.url}
                  heading="Contiune Reading"
                />
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
    </div>
  );
};

export default Dashboard;
