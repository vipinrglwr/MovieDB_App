import React, { useEffect, useState } from "react";
import { searchMovies } from "../../api/movieApi";
import { useLocation } from "react-router-dom";
import "./SearchedMoviesPage.css";

const SearchedMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchQuery) {
          const response = await searchMovies(searchQuery);
          const filteredMovies = response.data.results.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setMovies(filteredMovies);
          console.log(filteredMovies);
        }
      } catch (error) {
        console.error("Error fetching searched movies:", error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="searched-movies-container">
      <h1 className="search-title">Search Results "{searchQuery}"</h1>

      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              <h2 className="movie-title">{movie.title}</h2>
              {/* <p className="movie-overview">{movie.overview}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchedMoviesPage;
