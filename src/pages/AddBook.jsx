import { useState, useEffect } from "react";
import "../assets/scss/style.scss";
import { addBook } from "../redux/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Books = useSelector((state) => state.books.list);
  const [bookDetails, setBookDetails] = useState({
    id:Books?.length+1,
    title: "",
    author: "",
    pages: "",
    description:"",
    url: "src/assets/images/01.png",
  });

  useEffect(() => {
    document.title = "Add Book - Booklet";
  }, []);

  const handleChange = (e) => {
    setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
    console.log(bookDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookDetails.title && bookDetails.author) {
      dispatch(addBook(bookDetails));
      setBookDetails({
        title: "",
        author: "",
        pages: "",
        description:"",
        url: "src/assets/images/01.png",
      });
    }
    navigate("/mycollection");
  };

  return (
    <div className="row mx-0 d-flex justify-content-center align-items-center create-book-container">
      <div className="col-md-4 col-12 login-form">
        <div className="text-center brand">
          <h2 className="fs-1 fw-bolder">
            <span className="text-primary">Book</span>Let
            <span className="text-primary">.</span>
          </h2>
          <span className="fs-6 fw-bolder">by Datacode.</span>
        </div>
        <span className="row mx-0 fs-2 fw-bolder my-4 mb-0 text-center">
          <span>Create a Book</span>
        </span>
        <div className="row mx-0">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-group my-4">
                <label htmlFor="exampleInputTitle">Book Title </label>
                <input
                  type="text"
                  name="title"
                  value={bookDetails.title}
                  className="form-control mb-3 p-2 cu-input"
                  placeholder="Enter title"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputAuthor">Book Author</label>
                <input
                  type="text"
                  name="author"
                  value={bookDetails.author}
                  className="form-control mb-4 p-2 cu-input"
                  placeholder="Author"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputAuthor">Book Description</label>
                <textarea
                  type="text"
                  name="description"
                  value={bookDetails.description}
                  className="form-control mb-4 p-2 cu-input"
                  placeholder="Description"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPages">No. of Pages</label>
                <input
                  type="text"
                  name="pages"
                  value={bookDetails.pages}
                  className="form-control mb-4 p-2 cu-input"
                  placeholder="Pages"
                  onChange={handleChange}
                />
              </div>
              <div className="col text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-4 my-2 fw-bold rounded-5 cu-btn"
                >
                  Create Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
