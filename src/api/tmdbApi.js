import axios from 'axios';

const TMDB_KEY = import.meta.env.VITE_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: TMDB_KEY,
    language: 'it-IT'
  }
});

console.log('API_KEY usata:', TMDB_KEY);

export const getRandomMovies = async () => {
  const movies = [];
  const usedPages = new Set();

  while (movies.length < 100) {
    const page = Math.floor(Math.random() * 500) + 1;
    if (usedPages.has(page)) continue;
    usedPages.add(page);

    const res = await tmdb.get('/movie/popular', { params: { page } });
    movies.push(...res.data.results);
  }

  return movies.slice(0, 100);
};
