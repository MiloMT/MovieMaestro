import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import Home from '../views/Home';
import Login from '../views/Login';
import Movie from '../views/Movie';
import Profile from '../views/Profile';
import NavBar from './Navbar';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
