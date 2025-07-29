import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import SignInPage from '../pages/SignInPage'
import Dashboard from '../pages/Dashboard'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signin" element={<SignInPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
