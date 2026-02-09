import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';
import { useState } from "react";
import { searchMovies } from "./services/movieService";

const [searchResults, setSearchResults] = useState([]);
async function handleSearch(search) {
  if (!search) return;
  const results = await searchMovies(search);
  setSearchResults(results);
}
function App() {
  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home movies={searchResults} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;