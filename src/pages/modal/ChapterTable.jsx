import { useDispatch } from "react-redux";
import { updateChapterStatus } from "../../redux/bookSlice";
import { useState } from "react";
import DeleteChapterModal from "./DeleteChapterModal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import AddChapterModal from "./AddChapterModal";

const ChapterTable = ({ book }) => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteChapter, setDeleteChapter] = useState(0);
  const [modalTitle, setModalTitle] = useState("Add Chapter");
  const [showModal, setShowModal] = useState(false);

  const [chapterDetails, setChapterDetails] = useState({
    chapterNo: 0,
    title: "",
    endDate: "",
    status: "pending",
  });

  const handleChapterStatus = (chapter_no) => {
    dispatch(
      updateChapterStatus({
        bookId: book.id,
        chapterNo: chapter_no,
      })
    );
  };

  return (
    <>
      {/* Modal - Delete Chapter */}
      {showDeleteModal && (
        <DeleteChapterModal
          book={book}
          chapterNo={deleteChapter}
          showModal={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
      {/* Modal - Edit Chapter */}
      {showModal && (
        <AddChapterModal
          book={book}
          modalTitle={modalTitle}
          chapter={chapterDetails}
          showModal
          onClose={() => setShowModal(false)}
        />
      )}
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
          {book?.chapters &&
            book.chapters.map((chapter) => (
              <tr>
                <td>{chapter?.chapterNo}</td>
                <td>{chapter?.title}</td>
                <td>{chapter?.endDate}</td>
                <td
                  onClick={() => handleChapterStatus(chapter?.chapterNo)}
                  style={{
                    color: chapter.status == "pending" ? "yellow" : "green",
                  }}
                >
                  {chapter?.status}
                </td>
                <td>
                  <div className="d-flex">
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
                        setDeleteChapter(chapter.chapterNo);
                      }}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ChapterTable;
