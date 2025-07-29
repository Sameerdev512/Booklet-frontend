import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/" element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
