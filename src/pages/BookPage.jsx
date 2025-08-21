import "../assets/scss/style.scss";
import Sidebar from "../componants/Sidebar";
import Navbar from "../componants/Navbar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressCard from "../componants/ProgressCard";
import { useParams } from "react-router-dom";
import AddChapterModal from "./modal/AddChapterModal";
import { updateChapterStatus} from "../redux/bookSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import DeleteChapterModal from "./modal/DeleteChapterModal";

const BookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Books = useSelector((state) => state.books.list);
  const [modalTitle, setModalTitle] = useState("Add Chapter");
  const [totalDays, setTotalDays] = useState(0);
  const book = Books.find((book) => book.id == id);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteChapter, setDeleteChapter] = useState(0);
  const [progress,setProgress] = useState(0);

  const [chapterDetails, setChapterDetails] = useState({
    chapterNo: 0,
    title: "",
    endDate: "",
    status: "pending",
  });

  useEffect(() => {
    if (book && book.chapters) {
      //calculate days
      const d = book.chapters.reduce((sum, chapter) => {
        return sum > calculateDays(chapter.endDate)
          ? sum
          : calculateDays(chapter.endDate);
      }, 0);
      setTotalDays(d);

      //calculate progress
      let progress = 0;
      const completedChapters = book.chapters.filter(
        (chapter) => chapter.status === "completed"
      );

      const totalChapters = book.chapters.length;
      progress = (completedChapters.length / totalChapters) * 100;
      setProgress(progress);d
    }
  }, [book, Books, showModal]);

  const handleChapterStatus = (chapter_no) => {
    dispatch(
      updateChapterStatus({
        bookId: book.id,
        chapterNo: chapter_no,
      })
    );
  };

  const calculateDays = (endDate) => {
    if (!endDate) return 0;
    const today = new Date();
    const targetDate = new Date(endDate);
    const diffTime = targetDate.getTime() - today.getTime();
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
                className="btn bg-success text-white"
                onClick={() => {
                  setChapterDetails({
                    chapterNo: 0,
                    title: "",
                    endDate: "",
                    status: "pending",
                  });
                  setShowModal(true);
                  setModalTitle("Add Chapter")
                }}
              >
                Add Chapter
              </button>
            </div>

            {/* Modal */}
            {showModal && (
              <AddChapterModal
                book={book}
                modalTitle={modalTitle}
                chapter={chapterDetails}
                showModal
                onClose={() => setShowModal(false)}
              />
            )}

            {setShowModal && (
              <DeleteChapterModal
                book={book}
                chapterNo={deleteChapter}
                showModal={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
              />
            )}

            <div className="row chapter-progress-heading">
              <div className="col-md-5 col-6 fs-3 fw-bolder">
                Chapters:
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
                              setChapterDetails(chapter);
                              setModalTitle("Edit Chapter");
                              setShowModal(true);
                            }}
                          >
                            <FaPencilAlt />
                          </button>
                          <button
                            className="btn btn-danger mx-2"
                            onClick={() => {
                              setShowDeleteModal(true);
                              setDeleteChapter(chapterDetails.chapterNo);
                            }}
                          >
                            <RiDeleteBin6Line />
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
