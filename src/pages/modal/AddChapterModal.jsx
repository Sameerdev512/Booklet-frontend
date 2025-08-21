import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { addChapter} from "/src/redux/bookSlice";

const AddChapterModal = ({ book, modalTitle, chapter, showModal, onClose }) => {
  const dispatch = useDispatch();
  const [chapterDetails, setChapterDetails] = useState(chapter);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChapterDetails({ ...chapterDetails, [name]: value });
    console.table(chapterDetails);
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
      onClose();
    }
  };

  return (
    <Modal className="modal" isOpen={showModal} centered>
      <ModalHeader
        className="title"
        style={{ background: "#282837", color: "white" }}
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
                chapterDetails.chapterNo > 0 ? chapterDetails.chapterNo : ""
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
        {/* <Button
          color="danger"
          onClick={() => handleDelete(chapterDetails.chapterNo)}
        >
          Delete
        </Button> */}
        <Button color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddChapterModal;
