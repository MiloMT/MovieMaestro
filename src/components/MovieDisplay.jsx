import React, { useState, useEffect } from "react";


const MovieDisplay = ({ movies, genreList }) => {
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0 && selectedMovieIndex === null) {
      selectRandomMovie();
    }
  }, []);

  const selectRandomMovie = () => {
    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setSelectedMovieIndex(randomIndex);
    }
  };


  return (
    <>
      <div>
        <h2>Movie Display</h2>
        {selectedMovieIndex !== null && movies && movies.length > 0 && (
          <div className="movie-details">
            <img
              src={`https://image.tmdb.org/t/p/original${movies[selectedMovieIndex].poster_path}`}
              alt="Movie Poster Image" style={{ width: "300px", height: "400px"}}
            />
            <h4>Title: {movies[selectedMovieIndex].title}</h4>
            <h6>Overview: {movies[selectedMovieIndex].overview}</h6>
            <p>Rating: {movies[selectedMovieIndex].vote_average}</p>
            <p>Genre: {selectedGenre}</p>
          </div>
        )}
        <button onClick={selectRandomMovie}>Refresh</button>
      </div>
    </>
  );
};

export default MovieDisplay;
