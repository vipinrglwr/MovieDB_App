import React, { useEffect, useState } from "react";
import { fetchUpcomingMovies, getImageUrl } from "../../api/movieApi";
import "./UpcomingPage.css";

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUpcomingMovies(page).then((response) => {
      setMovies(response.data.results);
    });
  }, [page]);

  return (
    <div className="upcoming-container-new">
      <h1>Upcoming Movies</h1>
      <div className="upcoming-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="upcoming-card">
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            <h2>{movie.title}</h2>
            <h2>Rating : {movie.vote_average}</h2>
          </div>
        ))}
      </div>
      <div className="upcoming-button-container-new">
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

export default UpcomingPage;
