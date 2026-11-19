import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({title, plot, poster, year, rating, released}) => {
  return (
    <div className="movie-details__container">
      <Link to="/" className="movie-details__back">
        <ArrowLeft />
      </Link>
      <div className="movie-details__content">
        <div className="movie-details__poster--wrapper">
          <div className="movie-details__poster-placeholder">
            <img alt="Movie poster"src={poster} className="movie-details__poster" />
          </div>
        </div>
        <div className="movie-details__info">
          <div className="movie-details__text--wrapper">
            <h1 className="movie-details__title">Title: {title}</h1>
            <h3 className="movie-details__plot">Plot: {plot}</h3>
            <div className='.movie-details__detail'>
            <p className="movie-details__year">Year Released: {year}</p>
            <p className="movie-details__rating">Rating: {rating}</p>
            <p className="movie-details__released">Date Released: {released}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
