import axios from 'axios';

const keyApi = '9e8b55203cd36bc26921f9fe565ad09d';
const themoviedbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getTrending = async () => {
  const { data } = await themoviedbApi.get('/trending/movie/day', {
    params: { api_key: keyApi },
  });
  return console.log(data);
};
export const getSearchMovies = async ({ query, page }) => {
  const { data } = await themoviedbApi.get('/search/movie', {
    params: { api_key: keyApi, query, page },
  });
  return console.log(data);
};
export const getMoviesDetails = async ({ movieId }) => {
  const { data } = await themoviedbApi.get(`/movie/${movieId}`, {
    params: { api_key: keyApi },
  });
  return console.log(data);
};
export const getMoviesCredits = async ({ movieId }) => {
  const { data } = await themoviedbApi.get(`/movie/${movieId}/credits`, {
    params: { api_key: keyApi },
  });
  return console.log(data);
};
export const getMoviesReviews = async ({ movieId }) => {
  const { data } = await themoviedbApi.get(`/movie/${movieId}/reviews`, {
    params: { api_key: keyApi },
  });
  return console.log(data);
};
