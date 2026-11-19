import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {

  return movie.length === 0 ? (
    <>
      <div className="movie-card--skeleton">
        <div className="movie-card__img--skeleton"></div>
        <h1 className="movie-card__title--skeleton"></h1>
        <h3 className="movie-card__year--skeleton"></h3>
        <div className="movie-card__img--skeleton"></div>
        <h1 className="movie-card__title--skeleton"></h1>
        <h3 className="movie-card__year--skeleton"></h3>
      </div>
    </>
  ) : (
    movie.map((film) => (
      <div className="movie-card" key={film.imdbID}>
        <Link to={`/movie/${film.imdbID}`} className="movie-card__link">
          <img className="movie-card__img" src={film.Poster} alt={film.Title} />
          <h1 className="movie-card__title">{film.Title}</h1>
          <h3 className="movie-card__year">{film.Year}</h3>
        </Link>
      </div>
    ))
  );
};

export default MovieCard;
