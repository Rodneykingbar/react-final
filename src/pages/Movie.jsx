import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom"
import MovieDetails from '../components/ui/MovieDetails';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

const Movie = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true)
  const [idResponse, setIdResponse] = useState({});
  const apiKey = process.env.REACT_APP_IMDB_KEY;
  
  useEffect(() => {
    const findMovieById = async () => {
      try {
        const res = await axios.get(`https://omdbapi.com/?i=${id}&apikey=${apiKey}`);
        
        setIdResponse(res.data);
        setLoading(false)
        
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    findMovieById()
  }, [id, apiKey])
  
  
  return (
    <div>
      {loading ? <div className="movie-details__container">
      <Link to="/" className="movie-details__back">
        <ArrowLeft />
      </Link>
      <div className="movie-details__content">
        <div className="movie-details__poster--wrapper">
          <div className="movie-details__poster-placeholder">
            <img alt={idResponse.Title + " poster"} className="movie-details__poster--skeleton"/>
          </div>
          </div>
        <div className="movie-details__info">
          <div className="movie-details__text--wrapper">
            <div className="movie-details__title--skeleton"></div>
            <div className="movie-details__plot"></div>
            <div className='.movie-details__detail--skeleton'>
            <p className="movie-details__detail--skeleton"></p>
            <p className="movie-details__detail--skeleton"></p>
            <p className="movie-details__detail--skeleton"></p>
          </div>
          </div>
        </div>
      </div>
    </div>:
    <MovieDetails title={idResponse.Title} plot={idResponse.Plot} poster={idResponse.Poster} year={idResponse.Year} rating={idResponse?.imdbRating} released={idResponse.Released}/> }
    </div>
  );
}

export default Movie;
