import { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import { getMovies } from "./api/movieApi";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then(data => setMovies(data.movies))
      .catch(console.error);
  }, []);
  

  const addMovieToList = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <h1>Movie App</h1>
      <MovieForm onMovieAdded={addMovieToList} />
      <MovieList movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
