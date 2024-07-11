import React, { useEffect, useState } from "react";
import { fetchTopRatedMovies, getImageUrl } from "../../api/movieApi";
import "./TopRatedPage.css";
const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTopRatedMovies(page).then((response) => {
      setMovies(response.data.results);
    });
  }, [page]);

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
      <div className="top-rated-button-container">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default TopRatedPage;
