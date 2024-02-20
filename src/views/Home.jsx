import React from 'react'
import FastSearch from '../components/FastSearch';
import RegisterButton from '../components/RegisterButton';


const Home = ({setMovies}) => {
  return (
    <>
      <div>Home</div>
      <FastSearch setMovies={setMovies} />
      <RegisterButton />
    </>
  );
}

export default Home