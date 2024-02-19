import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import Home from '../views/Home';
import Login from '../views/Login';
import Movie from '../views/Movie';
import Profile from '../views/Profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <h1>MovieMaestro!</h1>
      </Routes>
    </BrowserRouter>
  );
}

export default App
