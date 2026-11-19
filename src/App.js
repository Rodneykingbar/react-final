import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../src/components/Nav"
import Home from "./pages/Home";
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from "react";
import Movie from "./pages/Movie";
import Footer from "./components/Footer";

function App() {
  const [response, setResponse] = useState();
  const apiKey = process.env.REACT_APP_IMDB_KEY;
  const [searchTerm, setSearchTerm] = useState('');

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
    fetchMovies()
  }, [searchTerm, response, apiKey]);
  return (
    <div className="App">
      <Nav response={response} setResponse={setResponse} searchTerm={searchTerm} setSearchTerm={setSearchTerm} apiKey={apiKey}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home movie={response}/>} />
          <Route path={`/movie/:id`} element={<Movie />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
