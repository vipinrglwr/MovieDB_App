import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import TopRatedPage from "./Pages/TopRatedPage/TopRatedPage";
import UpcomingPage from "./Pages/UpcomingPage/UpcomingPage";
import SingleMoviePage from "./Pages/SingleMoviePage/SingleMoviePage";
import SearchedMoviesPage from "./Pages/SearchedMoviesPage/SearchedMoviesPage";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <Router>
      <Navbar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            searchTerm ? (
              <SearchedMoviesPage searchTerm={searchTerm} />
            ) : (
              <HomePage path="/" />
            )
          }
        />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<SingleMoviePage />} />
        <Route
          path="/search"
          element={<SearchedMoviesPage searchTerm={searchTerm} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
