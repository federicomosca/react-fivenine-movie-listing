const MovieItem = ({ movie }) => {
  const imageBase = "https://image.tmdb.org/t/p/w200";

  return (
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {movie.poster_path && (
        <img
          src={`${imageBase}${movie.poster_path}`}
          alt={movie.title}
          style={{ marginRight: '1rem', borderRadius: '8px' }}
        />
      )}
      <div>
        <h3>{movie.title}</h3>
        <p style={{ maxWidth: '500px' }}>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieItem;
