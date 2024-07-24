import React, { useEffect, useState } from "react";
import { fetchTopRatedMovies, getImageUrl } from "../../api/movieApi";
import "./TopRatedPage.css";
import CustomPagination from "../../Component/Pagination/CustomPagination";
import { Link } from "react-router-dom";
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

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="top-rated-container">
      <h1>Top Rated Movies</h1>
      <div className="top-rated-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="top-rated-card">
             <Link to={`/movie/${movie.id}`}>
             <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            </Link>
            <h2>{movie.title}</h2>
            <h2>Rating : {movie.vote_average}</h2>
          </div>
        ))}
      </div>
      <div className='pagination'>
      <CustomPagination  page={page} totalPages={476} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default TopRatedPage;
