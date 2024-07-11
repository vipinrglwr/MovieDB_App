import React, { useEffect, useState } from "react";
import { fetchPopularMovies, getImageUrl } from "../../api/movieApi";
import "./HomePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPopularMovies(page).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, [page]);

  return (
    <div className="container-new">
      <h1>Popular Movies</h1>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
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

export default HomePage;
