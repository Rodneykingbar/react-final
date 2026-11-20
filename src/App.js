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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const query = searchTerm.trim();
    let cancelled = false;


    if (query.length < 3) {
      setResponse({ Search: [] });
      setLoading(query.length > 0);
      return () => {
        cancelled = true;
      };
    }

    const fetchMovies = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`https://omdbapi.com/?s=${query}&apikey=${apiKey}`);

        if (!cancelled) {
          if (res.data.Response === "True") {
            setResponse(res.data);
          } else {
            setResponse({ Search: [] });
          }
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Error fetching movies:', error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      cancelled = true;
    };
  }, [searchTerm, apiKey]);
  return (
    <div className="App">
      <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Router>
        <Routes>
          <Route path="/" element={<Home loading={loading} movie={response}/>} />
          <Route path={`/movie/:id`} element={<Movie />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
