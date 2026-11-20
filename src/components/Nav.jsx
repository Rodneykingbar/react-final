import React from 'react';
import logo from "../assets/fes-logo.png"
import "./styles/Nav.css"
import { Search } from 'lucide-react';


const Nav = ({ searchTerm, setSearchTerm }) => {

  function search(e) {
    setSearchTerm(e.target.value); 
  }

  return (
    
    <div className="nav">
      <div className="logo">
        <img src={logo} className="logo__img"alt="Logo"/>
        <h1 className="logo__title">Simplified <span className="logo__title span">flix</span></h1>
      </div>
      <form className="search-form">
        <div className="search-form__group">
          <input className="search-form__input" type="text" onChange={search} placeholder="Search movies..." />
          <Search className="search-form__button"/>
        </div>
      </form>
      <h1 className="get__started"><span className="welcome__text">Welcome!</span> Search to get started.</h1>
    </div>
  );
}

export default Nav;
