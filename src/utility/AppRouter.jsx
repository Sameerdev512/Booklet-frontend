import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import SignInPage from '../pages/SignInPage'
import Dashboard from '../pages/Dashboard'
import MyCollections from '../pages/MyCollections'
import CreateBook from '../pages/CreateBook'
import BookPage from '../pages/BookPage'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        {/* <Route path="/" element={<LoginPage/>}></Route> */}
        <Route path="/" element={<BookPage/>}></Route>
        <Route path="/createbook" element={<CreateBook/>}></Route>
        <Route path="/mycollection" element={<MyCollections/>}></Route>
        <Route path="/signin" element={<SignInPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
