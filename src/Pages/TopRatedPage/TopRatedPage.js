import React, { useEffect, useState } from "react";
import { fetchTopRatedMovies, getImageUrl } from "../../api/movieApi";
import "./TopRatedPage.css";
const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    fetchTopRatedMovies(page).then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);

    });
  }, [page]);

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
    <div className="top-rated-container">
      <h1>Top Rated Movies</h1>
      <div className="top-rated-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="top-rated-card">
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            <h2>{movie.title}</h2>
            <h2>Rating : {movie.vote_average}</h2>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TopRatedPage;
