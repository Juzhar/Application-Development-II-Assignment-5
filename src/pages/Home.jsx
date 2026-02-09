import MovieGrid from '../components/MovieGrid';
import { getPopularMovies } from "../services/movieService";
import { useState, useEffect } from 'react';

function Home() {
  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid movies={staticMovies} />
    </main>
  );
};
function Home({ movies }) {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    if (movies?.length) {
      setPopularMovies(movies);
      return;
    } }, [movies]);


  return(<div className="main-content">
         <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
        <MovieGrid movies={popularMovies} />
        </div>
  );
}
export default Home;