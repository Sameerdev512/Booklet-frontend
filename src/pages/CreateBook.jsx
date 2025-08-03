import { useState,useEffect } from "react";
import "../assets/scss/style.scss";

const CreateBook = () => {
  const [bookDetails, setBookDetails] = useState({
    title:"",
    author:"",
    noOfPages:0
  });

  const handleChange = (e) => {
    setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
    console.log(bookDetails);
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.table(bookDetails)
  }
  useEffect(() => {
    document.title = "Add Book - Booklet"; // set the page title
  }, []);

  return (
    <div className="create-book-container d-grid">
      <div className="login-form d-grid justify-content-center align-content-center">
        <div className="brand row mx-0 text-center">
          <h2 className="fs-1 fw-bolder">
            <span className="text-primary">Book</span>Let
            <span className="text-primary">.</span>
          </h2>
          <span className="fs-6 fw-bolder ">by Datacode.</span>
        </div>
        <span className="fs-2 fw-bolder row mx-0 my-4 mb-0 text-center">
          <span>Create a Book</span>
        </span>
        <div className="row mx-0">
          <form>
            <div className="form-group my-4">
              <label for="exampleInputTitle">Book Title </label>
              <input
                type="text"
                name="title"
                className="form-control cu-input mb-3 p-2"
                placeholder="Enter title"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputAuthor">Book Author</label>
              <input
                type="text"
                name="author"
                className="form-control cu-input mb-4 p-2"
                placeholder="Author"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPages">No. of Pages</label>
              <input
                type="text"
                name="noOfPages"
                className="form-control cu-input mb-4 p-2"
                placeholder="Pages"
                onChange={handleChange}
              />
            </div>
            <div className="col text-center">
              <button className="btn btn-primary cu-btn px-4  my-2 fw-bold rounded-5" onClick={handleSubmit}>
                Create Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
