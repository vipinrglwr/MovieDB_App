import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieCast,
  getImageUrl,
} from "../../api/movieApi";
import "./SingleMoviePage.css";

const SingleMoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetails(id).then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });

    fetchMovieCast(id).then((response) => {
      setCast(response.data.cast);
    });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="single-movie-container-new">
      <div
        className="movie-header-new"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.backdrop_path})`,
        }}
      >
        <div className="movie-overlay-new"></div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-details-new">
          <p className="movie-title-new">{movie.title}</p>
          <p>Ratings : {movie.vote_average}</p>
          <p>
            <span className="durationborder">{movie.runtime} min</span>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="movie-release-date-new">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="movie-overview-new">{movie.overview}</p>
        </div>
      </div>
      <div className="cast-section">
        <h2 className="cast-header">Cast</h2>
        <div className="cast-grid">
          {cast.map((member) => (
            <div key={member.id} className="cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w300/${member.profile_path}`}
              />
              <h4>{member.name}</h4>
              <p>{member.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleMoviePage;
