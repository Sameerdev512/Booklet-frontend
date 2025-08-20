import "../assets/scss/style.scss";
import Sidebar from "../componants/Sidebar";
import Navbar from "../componants/Navbar";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressCard from "../componants/ProgressCard";
import { useParams } from "react-router-dom";
import {
  addChapter,
  updateChapterStatus,
  deleteChapter,
} from "../redux/bookSlice";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const BookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Books = useSelector((state) => state.books.list);
  const [modal, setModal] = useState(false);
  const [chapterDetails, setChapterDetails] = useState({
    chapterNo: 0,
    title: "",
    endDate: "",
    status: "pending",
  });
  const [modalTitle, setModalTitle] = useState("Add Chapter");
  const [totalDays, setTotalDays] = useState(0);

  const book = Books.find((book) => book.id == id);

  useEffect(() => {
    if (book && book.chapters) {
      const d = book.chapters.reduce((sum, chapter) => {
        return sum + calculateDays(chapter.endDate);
      }, 0);
      setTotalDays(d);
    }
  }, [book,chapterDetails]);

  let progress = 0;
  if (book && book.chapters) {
    const completedChapters = book.chapters.filter(
      (chapter) => chapter.status === "completed"
    );

    const totalChapters = book.chapters.length;
    progress = (completedChapters.length / totalChapters) * 100;
  }

  const toggle = () => {
    setModal(!modal);
  };

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
    if (
      chapterDetails.chapterNo &&
      chapterDetails.title &&
      chapterDetails.endDate
    ) {
      dispatch(
        addChapter({
          bookId: book.id,
          chapter: chapterDetails,
        })
      );
      // console.log(chaptersDetails)
      setChapterDetails({
        chapterNo: 0,
        title: "",
        endDate: "",
        status: "pending",
      });
      toggle();
    }
  };

  const handleDelete = (chapterNo) => {
    if (confirm("Are you sure to delete chapter?")) {
      dispatch(
        deleteChapter({
          bookId: book.id,
          chapterNo: chapterNo,
        })
      );
    }
    toggle();
  };

  const calculateDays = (endDate) => {
    if (!endDate) return 0;

    const today = new Date();
    const targetDate = new Date(endDate);

    // Difference in milliseconds
    const diffTime = targetDate.getTime() - today.getTime();

    // Convert milliseconds → days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : 0; // no negative days
  };

  return (
    <div className="cu-container book-page-container">
      <div className="row mx-0">
        <div className="col-md-3 col-12 d-md-block d-none left-section">
          <Sidebar id={id} />
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
            <div className="fs-4 fw-bolder d-flex justify-content-between heading">
              <span className="fs-4">Reading Plan</span>
              <button
                className="btn bg-success text-white "
                onClick={() => {
                  toggle();
                  setChapterDetails({
                    chapterNo: 0,
                    title: "",
                    endDate: "",
                    status: "pending",
                  });
                }}
              >
                Add Chapter
              </button>
            </div>

            {/* Model */}
            <Modal className="modal" isOpen={modal} toggle={toggle} centered>
              <ModalHeader
                className="title"
                toggle={toggle}
                style={{ background: "#282837" }}
              >
                {modalTitle}
              </ModalHeader>
              <ModalBody style={{ background: "#282837" }}>
                <form>
                  <div className="form-group">
                    <label htmlFor="chapterNo">Chapter No.*</label>
                    <input
                      type="number"
                      name="chapterNo"
                      value={
                        chapterDetails.chapterNo > 0
                          ? chapterDetails.chapterNo
                          : ""
                      }
                      className="form-control mb-md-4 mb-2 cu-input"
                      placeholder="Chapter No"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="chapterTitle">Chapter Title* </label>
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
                    <label htmlFor="chapterEndDate">Chapter EndDate*</label>
                    <input
                      type="date"
                      name="endDate"
                      value={chapterDetails.endDate}
                      className="form-control mb-md-4 mb-3 cu-input"
                      placeholder="e.g. 10/12/2027"
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter style={{ background: "#282837" }}>
                <Button
                  color="danger"
                  onClick={() => handleDelete(chapterDetails.chapterNo)}
                >
                  Delete
                </Button>{" "}
                <Button color="primary" onClick={handleSubmit}>
                  Save Changes
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>

            <div className="row chapter-progress-heading">
              <div className="col-md-5 col-6 fs-3 fw-bolder">
                Chapters:{" "}
                <span style={{ color: "#4A83F6" }}>
                  {book?.chapters?.length}
                </span>
              </div>
              <div className="col-md-5 col-6 fs-3 fw-bolder">
                Days: <span style={{ color: "#4A83F6" }}>{totalDays}</span>
              </div>
            </div>
            <div className="row mx-0 my-4 d-flex overflow-auto">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th>Chapter No.</th>
                    <th>Name</th>
                    <th>AssignedDate</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {book.chapters &&
                    book.chapters.map((chapter) => (
                      <tr>
                        <td>{chapter?.chapterNo}</td>
                        <td>{chapter?.title}</td>
                        <td>{chapter?.endDate}</td>
                        <td
                          onClick={() =>
                            handleChapterStatus(chapter?.chapterNo)
                          }
                          style={{
                            color:
                              chapter.status == "pending" ? "yellow" : "green",
                          }}
                        >
                          {chapter?.status}
                        </td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              toggle();
                              setChapterDetails(chapter);
                              setModalTitle("Edit Chapter");
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
