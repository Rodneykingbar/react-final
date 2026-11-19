import React from "react";
import MovieCard from "../components/ui/MovieCard";
import {useState} from "react"



const Home = ({ movie }) => {
  const [sortOrder, setSortOrder] = useState("Sort");

  const movieList = Array.isArray(movie) ? movie : movie?.Search || [];

  const sortedMovies = [...movieList].sort((a, b) => {
    if (sortOrder === "ATOZ") {
      return (a.Title || "").localeCompare(b.Title || "");
    }
    if (sortOrder === "ZTOA") {
      return (b.Title || "").localeCompare(a.Title || "");
    }
    return 0;
  });

  return (
    <div className="main">
      <section id="sortSelect">
        <form>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort"
          >
            <option value="Sort" disabled={true}>
              Sort
            </option>
            <option value="ATOZ">A-Z</option>
            <option value="ZTOA">Z-A</option>
          </select>
        </form>
      </section>

      <div className="movies-grid">
        {movieList.length > 0 ? (
          sortedMovies.map((film) => (
            <MovieCard key={film.imdbID} movie={[film]} />
          ))
        ) : (
          <>
            <div className="movie-card">
              <div className="movie-card__img--skeleton"></div>
              <h1 className="movie-card__title--skeleton"></h1>
              <h1 className="movie-card__year--skeleton"></h1>
            </div>
            <div className="movie-card">
              <div className="movie-card__img--skeleton"></div>
              <h1 className="movie-card__title--skeleton"></h1>
              <h1 className="movie-card__year--skeleton"></h1>
            </div>
            <div className="movie-card">
              <div className="movie-card__img--skeleton"></div>
              <h1 className="movie-card__title--skeleton"></h1>
              <h1 className="movie-card__year--skeleton"></h1>
            </div>
            <div className="movie-card">
              <div className="movie-card__img--skeleton"></div>
              <h1 className="movie-card__title--skeleton"></h1>
              <h1 className="movie-card__year--skeleton"></h1>
            </div>
            <div className="movie-card">
              <div className="movie-card__img--skeleton"></div>
              <h1 className="movie-card__title--skeleton"></h1>
              <h1 className="movie-card__year--skeleton"></h1>
            </div>
            <div className="movie-card">
              <div className="movie-card__img--skeleton"></div>
              <h1 className="movie-card__title--skeleton"></h1>
              <h1 className="movie-card__year--skeleton"></h1>
            </div>
            <div className="movie-card">
              <div className="movie-card__img--skeleton"></div>
              <h1 className="movie-card__title--skeleton"></h1>
              <h1 className="movie-card__year--skeleton"></h1>
            </div>
            <div className="movie-card">
              <div className="movie-card__img--skeleton"></div>
              <h1 className="movie-card__title--skeleton"></h1>
              <h1 className="movie-card__year--skeleton"></h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
