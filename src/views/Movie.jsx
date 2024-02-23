import React from 'react'
import MovieDisplay from '../components/MovieDisplay'
import FastSearch from '../components/FastSearch';
import Responsive from '../components/SideFilterMenu';


const Movie = () => {
    return (
        <>
            <div>Movie</div>
            <MovieDisplay />
            <Responsive />
            {/* <FastSearch /> */}
        </>
    );
}


export default Movie