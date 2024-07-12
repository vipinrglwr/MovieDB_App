import React, { useEffect, useState } from "react";
import { searchMovies } from "../../api/movieApi";
import { useLocation } from "react-router-dom";
import "./SearchedMoviesPage.css";

const SearchedMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchQuery) {
          const response = await searchMovies(searchQuery);
          setTotalPages(response.data.total_pages);
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

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="searched-movies-container">
      <h1 className="search-title">Search Results "{searchQuery}"</h1>

      <div className="movies-list">
        {searchQuery?(
          movies.length>0 ? (
        movies.map((movie) => (
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
        ))
      ):(
        <p className="notAvailable">No result found</p>
      )
    ):(
      <p className="notAvailable" >Data is not available</p>        
        )}
      </div>
      <div className="pagination-container">
        <button
          
          onClick={handlePrevious }
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
         onClick={handleNext }
         >
          Next
          </button>
      </div>
    </div>
      
  );
};

export default SearchedMoviesPage;
