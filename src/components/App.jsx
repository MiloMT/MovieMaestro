import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "../views/Home";
import Login from "../views/Login";
import Movie from "../views/Movie";
import Profile from "../views/Profile";
import NavBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState, useEffect } from "react";
import Footer from "./Footer";

const Context = React.createContext()

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [apiDefaults, setApiDefaults] = useState([])
  let [movies, setMovies] = useState([])
  const [isBusy, setBusy] = useState(true)

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2NkNDA5NDQ3MGU3YmFhNjZmYTg0MjljYmU3OTM3YiIsInN1YiI6IjY1YzVkODg5OGUyMGM1MDE2NDMzMTM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OBGleiES5kWMJQmgbRAvnzsSEGmJvHcx-tBkr454SoY",
      },
    })
      .then((res) => res.json())
      .then((data) => {setApiDefaults(...apiDefaults, { genreList: data.genres })})
      .then(() => setBusy(false))
  }, []);

  return (
    <>
      { isBusy ? (
        <h1>Loading...</h1>
      ) : (
        <Context.Provider value={[ apiDefaults, setApiDefaults, isLoggedIn, setLoggedIn ]}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home setMovies={setMovies} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/movie" element={<Movie movies={movies} />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Context.Provider>
      )}
    </>
  );
}

export { App, Context };
