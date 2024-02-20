import React from 'react'
import FastSearch from '../components/FastSearch';

const Home = ({setMovies}) => {
  return (
    <>
      <div>Home</div>
      <FastSearch setMovies={setMovies}/>
    </>
  );
}

export default Home