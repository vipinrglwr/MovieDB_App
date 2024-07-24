import React, { useEffect, useState } from "react";
import { fetchPopularMovies, getImageUrl } from "../../api/movieApi";
import "./HomePage.css";
import CustomPagination from "../../Component/Pagination/CustomPagination";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    fetchPopularMovies(page).then((response) => {
      console.log(response.data);
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
    <div className="container-new">
     

      <h1>Popular Movies</h1>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
            </Link>
            <h2>{movie.title}</h2>
            <h2>Rating : {movie.vote_average}</h2>
          </div>
        ))}
      </div>
      <div >
        {movies.map((page,totalPages) => (
          <div>
          </div>
        ))}
      </div>
      <div className='pagination'>
      <CustomPagination  page={page} totalPages={500} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default HomePage;
