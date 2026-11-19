import React from 'react';
import logo from "../assets/fes-logo.png"
import "./styles/Nav.css"
import axios from 'axios';
import { useEffect } from 'react';
import { Search } from 'lucide-react';


const Nav = ({response, setResponse, searchTerm, setSearchTerm, apiKey}) => {

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`https://omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
        
        if (res.data.Response === "True") {
          setResponse(res.data);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (searchTerm && apiKey) {
      fetchMovies();
    }
  }, [searchTerm, setResponse, apiKey]);

  function search(e) {
    setSearchTerm(e.target.value); 
  }

  return (
    
    <div className="nav">
      <div href="/" className="logo">
        <img src={logo} className="logo__img"alt="Logo"/>
        <h1 className="logo__title">Simplified <span className="logo__title span">flix</span></h1>
      </div>
      <form className="search-form">
        <div className="search-form__group">
          <input className="search-form__input" type="text" onChange={search} placeholder="Search movies..." />
          <Search className="search-form__button"/>
        </div>
      </form>
    </div>
  );
}

export default Nav;
