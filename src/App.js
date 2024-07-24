import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import TopRatedPage from "./Pages/TopRatedPage/TopRatedPage";
import UpcomingPage from "./Pages/UpcomingPage/UpcomingPage";
import SingleMoviePage from "./Pages/SingleMoviePage/SingleMoviePage";
import SearchedMoviesPage from "./Pages/SearchedMoviesPage/SearchedMoviesPage";

const App = () => {


  return (
    <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<SingleMoviePage />} />
        <Route path="/search" element={<SearchedMoviesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
