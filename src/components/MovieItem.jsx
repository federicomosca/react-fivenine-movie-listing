const MovieItem = ({ movie, onDelete }) => (
    <div>
      <h3>{movie.name} ({movie.releaseDate})</h3>
      <button onClick={() => onDelete(movie._id)}>Elimina</button>
    </div>
  );
  
  
  export default MovieItem;
  