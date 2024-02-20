import React from 'react'
import MovieDisplay from '../components/MovieDisplay';


const Movie = ({movies}) => {
  return (
    <>
      <div>Movie</div>
      <MovieDisplay movies={movies} />
      
    </>
  );
}

export default Movie