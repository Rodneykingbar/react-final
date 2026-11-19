import React from "react";
import { Link } from "react-router-dom";
import posterAlt from '../../../src/assets/posterAlt.jpg'

const MovieCard = ({movie}) => {


  return movie.length === 0 ? (
    <>
      <div className="movie-card--skeleton">
        <div className="movie-card__img--skeleton"></div>
        <div className="movie-card__title--skeleton"></div>
        <div className="movie-card__year--skeleton"></div>
        <div className="movie-card__img--skeleton"></div>
        <div className="movie-card__title--skeleton"></div>
        <div className="movie-card__year--skeleton"></div>
      </div>
    </>
  ) : (
    movie.map((film) => (
      <div className="movie-card" key={film.imdbID}>
        <Link to={`/movie/${film.imdbID}`} className="movie-card__link">
          <img
            className="movie-card__img"
            src={film.Poster !== "N/A" ? film.Poster : posterAlt}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = posterAlt;
            }}
            alt={film.Title}
          />
          <div className="movie-card__title">{film.Title}</div>
          <div className="movie-card__year">{film.Year}</div>
        </Link>
      </div>
    ))
  );
};

export default MovieCard;
