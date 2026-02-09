const posterUrl = movie.poster_path  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
function toggleFavorite() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const existingfavs = favorites.find(f => f.id === movie.id);

  const updated = existingfavs
    ? favorites.filter(f => f.id !== movie.id)
    : [...favorites, movie];

  localStorage.setItem("favorites", JSON.stringify(updated));
}
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">{movie.release_date.substring(0, 4)}</span>
        </div>
        <button onClick={toggleFavorite} className="favorite-button">♡ Add to Favorites</button>
      </div>
    </div>
  );
};

export default MovieCard;