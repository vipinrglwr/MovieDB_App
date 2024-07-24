import React, { useEffect, useState } from "react";
import { fetchUpcomingMovies, getImageUrl } from "../../api/movieApi";
import "./UpcomingPage.css";
import CustomPagination from "../../Component/Pagination/CustomPagination";
import { Link } from "react-router-dom";

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchUpcomingMovies(page).then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);

    });
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };


  return (
    <div className="upcoming-container-new">
      <h1>Upcoming Movies</h1>
      <div className="upcoming-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="upcoming-card">
            <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            </Link>
            <h2>{movie.title}</h2>
            <h2>Rating : {movie.vote_average}</h2>
          </div>
        ))}
      </div>
      <div className='pagination'>
      <CustomPagination  page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default UpcomingPage;
