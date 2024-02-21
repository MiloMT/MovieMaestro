import React from 'react'
import MovieDisplay from '../components/MovieDisplay';
import OtherMovies from '../components/OtherMovies';


const Movie = ({movies, genreList}) => {
  return (
    <>
      <div>Movie</div>
      <MovieDisplay movies={movies} genreList={genreList} />
      
    </>
  );
}

export default Movie