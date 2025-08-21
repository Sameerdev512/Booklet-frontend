import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteChapter } from "/src/redux/bookSlice";
import { useDispatch } from "react-redux";

const DeleteChapterModal = ({ book, chapterNo, showModal, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteChapter({
        bookId: book.id,
        chapterNo: chapterNo,
      })
    );
  };

  return (
    <Modal className="modal" isOpen={showModal} centered>
      <ModalHeader style={{ background: "#282837", color: "white" }}>
        Are you sure want to delete the chapter?
      </ModalHeader>
      <ModalFooter style={{ background: "#282837", color: "white" }}>
        <Button
          color="primary"
          onClick={() => {
            handleDelete();
            onClose();
          }}
        >
          Yes
        </Button>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteChapterModal;
