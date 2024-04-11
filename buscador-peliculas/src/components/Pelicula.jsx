export const Pelicula = ({ id, poster_path, title, overview }) => {
  return (
    <div key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title}`}
      />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
};
