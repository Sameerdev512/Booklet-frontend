import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";
import Dashboard from "../pages/Dashboard";
import MyCollections from "../pages/MyCollections";
import AddBook from "../pages/AddBook";
import BookPage from "../pages/BookPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/bookpage" element={<BookPage />}></Route>
        <Route path="/addbook" element={<AddBook />}></Route>
        <Route path="/mycollection" element={<MyCollections />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
