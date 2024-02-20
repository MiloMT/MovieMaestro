import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import Home from '../views/Home';
import Login from '../views/Login';
import Movie from '../views/Movie';
import Profile from '../views/Profile';
import NavBar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  let [movies, setMovies] = useState([])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setMovies={setMovies}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie movie={movies}/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
