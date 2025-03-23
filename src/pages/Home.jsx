import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import { getRandomMovies } from "../api/tmdbApi";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRandomMovies()
      .then(data => {
        console.log("TMDB DATA:", data);
        setMovies(data);
      })
      .catch(err => {
        console.error("Errore TMDB:", err);
      });
  }, []);
  
  

  return (
    <div className="container">
      <h1>fivenine</h1>
      <h2>Film a caso</h2>
      {movies.length === 0 ? (
        <p>Nessun film disponibile.</p>
      ) : (
        <MovieList movies={movies} setMovies={setMovies} />
      )}
    </div>
  );
};

export default Home;
