import React, { useState, useEffect } from "react";
import OtherMovies from "./OtherMovies.jsx";

const MovieDisplay = ({ movies, genreList }) => {
  // const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);
  const [otherMovies, setOtherMovies] = useState([]);

  useEffect(() => {
    selectOtherMovies();
  }, []);

  const selectOtherMovies = () => {
    if (movies && movies.length > 0) {
      const selectedMovies = [];
      while (selectedMovies.length < 5) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        if (!selectedMovies.includes(movies[randomIndex])) {
          selectedMovies.push(movies[randomIndex]);
        }
      }
      setOtherMovies(selectedMovies);
    }
  };

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
      <div>
        <h2>Movie Display</h2>
        {otherMovies !== null && movies && movies.length > 0 && (
          <div className="movie-details">
            {/* <img
              src={`https://image.tmdb.org/t/p/original${otherMovies[0].poster_path}`}
              alt="Movie Poster Image"
              style={{ width: "300px", height: "400px" }}
            /> */}
            <h4>Title: {otherMovies[0].title}</h4>
            <h6>Overview: {otherMovies[0].overview}</h6>
            <p>Rating: {otherMovies[0].vote_average}</p>
            <p>
              Genres:{" "}
              {otherMovies[0].genre_ids
                .map((id) => genreList.find((obj) => obj.id === id).name)
                .join(", ")}
            </p>
          </div>
        )}
        {/* <button onClick={selectRandomMovie}>Refresh</button> */}
      </div>
      <OtherMovies movies={movies} genreList={genreList} otherMovies={otherMovies} />
    </>
  );
};

export default MovieDisplay;
