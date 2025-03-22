import MovieItem from "./MovieItem";
import { deleteMovie } from "../api/movieApi";

const MovieList = ({ movies, setMovies }) => {
  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(movies.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Errore eliminazione:", err);
    }
  };

  return (
    <div>
      <h2>Lista dei Film</h2>
      {movies.length === 0 && <p>Nessun film disponibile.</p>}
      {movies.map((movie) => (
        <MovieItem key={movie._id} movie={movie} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default MovieList;
