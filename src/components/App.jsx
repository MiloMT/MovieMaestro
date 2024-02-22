import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "../views/Home";
import Login from "../views/Login";
import Movie from "../views/Movie";
import Profile from "../views/Profile";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { fetchDefaults } from "../utils/fetchDefaults";

const Context = React.createContext()

function App() {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [apiDefaults, setApiDefaults] = useState([])
  const [movies, setMovies] = useState([])
  const [isBusy, setBusy] = useState(true)

  useEffect(() => {
    fetchDefaults(setApiDefaults, setBusy)
  }, []);

  return (
    <>
      { isBusy ? (
        <h1>Loading...</h1>
      ) : (
        <Context.Provider value={{ 
          api: [apiDefaults, setApiDefaults], 
          LoggedIn: [isLoggedIn, setLoggedIn],
          loggedUser: [user, setUser] 
          }}>
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
