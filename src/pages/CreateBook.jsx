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
    <div className="create-book-container d-flex justify-content-center w-100 align-items-center">
      <div className="login-form m-auto d-flex flex-column  border border-primary py-5 px-4 rounded-4">
        <div className="brand d-flex flex-column align-items-end">
          <h2 className="fw-bolder">
            <span className="text-primary">Book</span>Let
            <span className="text-primary">.</span>
          </h2>
          <span className="fw-bolder by">by Datacode.</span>
        </div>
        <div className="heading my-4">Create a Book</div>
        <div>
          <form className="d-flex flex-column justifu-content-center">
            <div class="form-group">
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
            <button className="btn btn-primary cu-btn px-4 m-auto my-2">
              Create Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBook
