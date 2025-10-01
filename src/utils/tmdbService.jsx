import { TMDB_API_KEY_VALUE } from "./constants";

const TMDB_API_KEY = TMDB_API_KEY_VALUE ;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

class TMDBService {
  constructor() {
    this.apiKey = TMDB_API_KEY;
    this.baseUrl = TMDB_BASE_URL;
  }

  async fetchFromAPI(endpoint, params) {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.append('api_key', this.apiKey);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    const response = await fetch(url.toString());
    if (!response.ok) return { results: [] };
    return response.json();
  }

  async getTrendingMovies() { return (await this.fetchFromAPI('/trending/movie/week')).results; }
  async getPopularMovies() { return (await this.fetchFromAPI('/movie/popular')).results; }
  async getNowPlayingMovies() { return (await this.fetchFromAPI('/movie/now_playing')).results; }
  async getTopRatedMovies() { return (await this.fetchFromAPI('/movie/top_rated')).results; }
  async searchMovies(query) { return (await this.fetchFromAPI('/search/movie', { query })).results; }
  async getMovieDetails(movieId) { return await this.fetchFromAPI(`/movie/${movieId}`); }
  async getMovieCredits(movieId) { return (await this.fetchFromAPI(`/movie/${movieId}/credits`)).cast.slice(0, 10); }
  async getMovieVideos(movieId) { return (await this.fetchFromAPI(`/movie/${movieId}/videos`)).results.filter((v) => v.site === 'YouTube'); }
  async getGenres() { return (await this.fetchFromAPI('/genre/movie/list')).genres; }

  getImageUrl(path, size = 'w500') {
    if (!path) return `https://placehold.co/92x138/1f2937/ffffff?text=No+Poster`;
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
  }
  getBackdropUrl(path, size = 'original') {
    if (!path) return `https://placehold.co/1280x720/1f2937/ffffff?text=No+Backdrop`;
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
  }
}

export const tmdbService = new TMDBService();
