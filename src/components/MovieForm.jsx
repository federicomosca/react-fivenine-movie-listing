import { useState } from "react";
import { addMovie } from "../api/movieApi";

const MovieForm = ({ onMovieAdded }) => {
  const [name, setName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movie = await addMovie({ name, releaseDate });
    onMovieAdded(movie);
    setName("");
    setReleaseDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={releaseDate} onChange={e => setReleaseDate(e.target.value)} placeholder="Release Date" />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
