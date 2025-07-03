import MovieCard from "../components/MovieCard";
import { useState } from "react";

import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "John Wick", release_date: "2010" },
    { id: 2, title: "Harry Potter", release_date: "2001" },
    { id: 3, title: "Jam", release_date: "1995" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
