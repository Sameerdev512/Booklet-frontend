import React from 'react'
import { useState } from 'react'
import '../assets/scss/style.scss'

const CreateBook = () => {
    const [details,setDetails] = useState({
          email:"",
          password:""
        })
      
        const handleChange=(e)=>{
          setDetails({...details,[e.target.name]:e.target.value})
          console.log(details)
        }
  return (
    <div className="create-book-container d-grid align-content-center justify-content-center">
      <div className="login-form row d-flex flex-column">
        <div className="brand row justify-content-center">
          <h2 className="fw-bolder">
            <span className="text-primary">Book</span>Let
            <span className="text-primary">.</span>
          </h2>
          <span className="fw-bolder by">by Datacode.</span>
        </div>
        <div className="heading row my-4 justify-content-center">
          Create a Book
        </div>
        <div className="row">
          <form>
            <div class="form-group my-4">
              <label for="exampleInputTitle">Book Title </label>
              <input
                type="text"
                name="title"
                class="form-control cu-input mb-3 p-2"
                placeholder="Enter title"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputAuthor">Book Author</label>
              <input
                type="text"
                name="author"
                class="form-control cu-input mb-4 p-2"
                placeholder="Author"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPages">No. of Pages</label>
              <input
                type="text"
                name="pages"
                class="form-control cu-input mb-4 p-2"
                placeholder="Pages"
                onChange={handleChange}
              />
            </div>
            <div className="row justify-content-center">
              <button className="btn btn-primary cu-btn px-4  my-2 ">
                Create Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBook
