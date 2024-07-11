import axios from 'axios';

const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = (page) => {
  return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1", {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });
};

export const fetchTopRatedMovies = (page) => {
  return axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1", {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });
};

export const fetchUpcomingMovies = (page) => {
  return axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1", {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });
};

export const fetchMovieDetails = (movieId) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieCast = (movieId) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
};

export const searchMovies = (searchTerm) => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchTerm}=1`, {
    params: {
      api_key: API_KEY,
      searchTerm: searchTerm,
    },
  });
};

export const getImageUrl = (path) => {
  return "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg";
};