import "../assets/scss/style.scss";
import Sidebar from "../componants/Sidebar";
import Navbar from "../componants/Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressCard from "../componants/ProgressCard";
import { useParams } from "react-router-dom";
import { addChapter, updateChapterStatus } from "../redux/bookSlice";

const BookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Books = useSelector((state) => state.books.list);
  const [displayModal, setDisplayModal] = useState("none");
  const [chapterDetails, setChapterDetails] = useState({
    chapterNo: 0,
    title: "",
    endDate: "",
    status: "pending",
  });

  const book = Books.find(book => book.id == id)
  let progress=0;
  if (book && book.chapters) {
    const completedChapters = book.chapters.filter(
      (chapter) => chapter.status === "completed"
    );

    const totalChapters = book.chapters.length;
    progress = (completedChapters.length / totalChapters) * 100;

  }
    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChapterDetails({ ...chapterDetails, [name]: value });
    console.table(chapterDetails);
  };

  const handleChapterStatus = (chapter_no) => {
    dispatch(
      updateChapterStatus({
        bookId: book.id,
        chapterNo: chapter_no,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addChapter({
        bookId: book.id,
        chapter: chapterDetails,
      })
    );
    // console.log(chapterDetails)
    setChapterDetails({
      chapterNo: 0,
      title: "",
      endDate: "",
      status: "pending",
    });
    setDisplayModal("none");
  };

  return (
    <div className="cu-container book-page-container">
      <div className="row mx-0">
        <div className="col-md-3 col-12 d-md-block d-none left-section">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 px-3 right-section">
          <Navbar />
          <div className="pt-5 hero-section">
            <div className="row">
              <div className="col-md-8 col-12 left">
                <div className="fs-1 fw-bolder mb-md-3 mb-1 heading">
                  {book?.title.split(":")[0]}
                  {book?.title.split(":")[1]}
                </div>
                <div className="fs-6 details">{book?.description}</div>
              </div>
              <div className="col-sm-4 col-12 d-flex justify-content-md-center justify-content-start align-content-start py-md-0 py-4 right">
                <ProgressCard
                  id={book?.id}
                  percentage={progress}
                  title={book?.title}
                  url={book?.url}
                  heading="Contiune Reading"
                />
              </div>
            </div>
          </div>
          <div className="last-section">
            <div className="fs-4 fw-bolder heading">
              <span className="fs-4">Reading Plan</span>
              <button
                className="btn bg-success text-white mx-2"
                onClick={() => setDisplayModal("block")}
              >
                Add Chapter
              </button>
            </div>

            {/* Model */}
            <div
              className={`d-${displayModal} modal border border-2 p-4 rounded-4 position-absolute bg-dark`}
            >
              <div className="modal-box mx-auto">
                <div className="d-flex flex-row justify-content-between">
                  <h3 className="text-center">Add New Chapter</h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => setDisplayModal("none")}
                  >
                    Close
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="chapterNo">Chapter No.</label>
                    <input
                      type="number"
                      name="chapterNo"
                      value={chapterDetails.chapterNo > 0 ? chapterDetails.chapterNo:""}
                      className="form-control mb-md-4 mb-2 cu-input"
                      placeholder="Chapter No"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="chapterTitle">Chapter Title </label>
                    <input
                      type="text"
                      name="title"
                      value={chapterDetails.title}
                      className="form-control mb-md-4 mb-2 cu-input"
                      placeholder="Chapter Title"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="chapterEndDate">Chapter EndDate</label>
                    <input
                      type="text"
                      name="endDate"
                      value={chapterDetails.endDate}
                      className="form-control mb-md-4 mb-3 cu-input"
                      placeholder="e.g. 10/12/2027"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="modal-actions">
                    <button type="submit" className="btn btn-success mx-2">
                      Save Chapter
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => setDisplayModal("none")}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row chapter-progress-heading">
              <div className="col-md-5 col-6 fs-3 fw-bolder">
                Chapters: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
              <div className="col-md-5 col-6 fs-3 fw-bolder">
                Days: <span style={{ color: "#4A83F6" }}>20</span>
              </div>
            </div>
            <div className="row mx-0 my-4 d-flex overflow-auto">
              {book.chapters &&
                book.chapters.map((chapter, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between mb-2 my-md-0 chapter-card"
                    style={{ textAlign: "start" }}
                  >
                    <h6 className="col-md-2 col-sm-2 col-4">
                      {chapter.chapterNo}
                    </h6>
                    <p className="col-md-2 col-sm-3 col-5">{chapter.title}</p>
                    <p className="col-md-2 col-sm-2 col-4">{chapter.endDate}</p>
                    <p
                      className="col-md-5 col-4"
                      onClick={() => handleChapterStatus(chapter.chapterNo)}
                    >
                      {chapter.status}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
