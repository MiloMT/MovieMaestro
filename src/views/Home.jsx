import React from 'react'
import FastSearch from '../components/FastSearch';
import RegisterButton from '../components/RegisterButton';


const Home = ({ setMovies, genreList }) => {
  return (
    <>
      <div>Home</div>
      <FastSearch setMovies={setMovies} genreList={genreList} />
      <RegisterButton />
    </>
  );
}

export default Home