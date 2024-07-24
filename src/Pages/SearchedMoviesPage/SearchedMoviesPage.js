import React, { useEffect, useState } from "react";
import { searchMovies } from "../../api/movieApi";
import { Link, useLocation } from "react-router-dom";
import "./SearchedMoviesPage.css";
import CustomPagination from "../../Component/Pagination/CustomPagination";

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

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
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
             <Link to={`/movie/${movie.id}`}>
             <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            </Link>
          
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
      <div className='pagination'>
      <CustomPagination  page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    </div>
      
  );
};

export default SearchedMoviesPage;
