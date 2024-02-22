import React, { useContext, useState, useEffect } from "react";
import OtherMovies from "./OtherMovies.jsx";
import { Context } from "./App.jsx"

const MovieDisplay = ({ movies }) => {
  const { api, isLoggedIn } = useContext(Context)
  const [apiDefaults, setApiDefaults] = api
  const [selectedMovies, setSelectedMovies] = useState([])
  const [movieIndex, setMovieIndex] = useState([0])
  const [isBusy, setBusy] = useState(true)

  useEffect(() => {
    selectMovies();
    setBusy(false)
  }, []);

  const selectMovies = () => {
    if (movies && movies.length > 0) {
      const movieList = [];
      while (movieList.length < 5) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        if (!movieList.includes(movies[randomIndex])) {
          movieList.push(movies[randomIndex]);
        }
      }
      setSelectedMovies(movieList);
    }
  }

  // useEffect(() => {
  //   if (movies && movies.length > 0 && selectedMovieIndex === null) {
  //     selectRandomMovie();
  //   }
  // }, []);

  // const selectRandomMovie = () => {
  //   if (movies && movies.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * movies.length);
  //     setSelectedMovieIndex(randomIndex);
  //   }
  // };

  return (
    <>
      { isBusy ? (
        <h1>Loading...</h1>
      ) : (
      <>
        <div>
          <h2>Movie Display</h2>
          {selectedMovies !== null && movies && movies.length > 0 && (
            <div className="movie-details">
              <img
                src={`https://image.tmdb.org/t/p/original${selectedMovies[movieIndex].poster_path}`}
                alt="Movie Poster Image"
                style={{ width: "300px", height: "400px" }}
              />
              <h4>Title: {selectedMovies[movieIndex].title}</h4>
              <h6>Overview: {selectedMovies[movieIndex].overview}</h6>
              <p>Rating: {selectedMovies[movieIndex].vote_average}</p>
              <p>
                Genres:{" "}
                {selectedMovies[movieIndex].genre_ids
                  .map((id) => apiDefaults.genreList.find((obj) => obj.id === id).name)
                  .join(", ")}
              </p>
            </div>
          )}
          {/* <button onClick={selectRandomMovie}>Refresh</button> */}
        </div>
        <OtherMovies selectedMovies={selectedMovies} setMovieIndex={setMovieIndex} />
      </>
      )}
    </>
  );
};

export default MovieDisplay;
