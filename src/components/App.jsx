// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { useState, useEffect } from "react"
// Style Imports
import "../styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// Component Imports
import Home from "../views/Home"
import Login from "../views/Login"
import Movie from "../views/Movie"
import Profile from "../views/Profile"
import NavBar from "./Navbar"
import Footer from "./Footer"
import { fetchDefaults } from "../utils/fetchDefaults"


const Context = React.createContext()

function App() {
    // Context States
    const [apiDefaults, setApiDefaults] = useState([])
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [movies, setMovies] = useState([])
    // Component States
    const [isBusy, setBusy] = useState(true)

    // Grabbing onmount api defaults for context
    useEffect(() => {
        fetchDefaults(setApiDefaults, setBusy)
    }, [])

    return (
      <>
        {isBusy ? (
          <h1>Loading...</h1>
        ) : (
          <Context.Provider
            value={{
              api: [apiDefaults, setApiDefaults],
              LoggedIn: [isLoggedIn, setLoggedIn],
              loggedUser: [user, setUser],
              movieList: [movies, setMovies],
            }}
          >
            <BrowserRouter>
                <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </Context.Provider>
        )}
      </>
    );
}

export { App, Context }
