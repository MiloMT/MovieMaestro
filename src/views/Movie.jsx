import React from 'react'
import MovieDisplay from '../components/MovieDisplay';
import FastSearch from '../components/FastSearch';

const Movie = ({movies}) => {
  return (
    <>
      <div>Movie</div>
      <MovieDisplay movies={movies} />
      <FastSearch />
    </>
  );
}

export default Movie