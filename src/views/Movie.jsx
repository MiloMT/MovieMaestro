import React from 'react'
import MovieDisplay from '../components/MovieDisplay';


const Movie = ({movies, genreList}) => {
  return (
    <>
      <div>Movie</div>
      <MovieDisplay movies={movies} genreList={genreList} />
      
    </>
  );
}

export default Movie