export const url = {
  popular: "https://animetize-api.vercel.app/popular",
  top_airing: "https://animetize-api.vercel.app/top-airing",
  info: "https://animetize-api.vercel.app/info/",
  episode_link: "https://animetize-api.vercel.app/watch/",
  movies: "https://animetize-api.vercel.app/movies",
  recent_episodes: "https://animetize-api.vercel.app/recent-episodes",
  anime_list: "https://animetize-api.vercel.app/anime-list",
  search: "https://animetize-api.vercel.app/",
  genre: "https://animetize-api.vercel.app/genre",
};

const API_KEY = "171fe27dbfecc58e2a18fbced644cda9";
export const PROXY = "https://sup-proxy.zephex0-f6c.workers.dev/api-json?url=";
export const Movie_Trending = `${PROXY}https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
export const Movie_Search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
export const Movie_Popular = `${PROXY}https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
export const getInfoURL = (movieId:any) =>
  `${PROXY}https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;