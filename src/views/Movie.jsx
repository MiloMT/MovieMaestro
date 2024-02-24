import React from 'react'
// Component Imports
import MovieDisplay from '../components/MovieDisplay'
import FastSearch from '../components/FastSearch'
import Responsive from '../components/SideFilterMenu'


const Movie = () => {
    return (
        <>
            <MovieDisplay />
            <Responsive />
            {/* <FastSearch /> */}
        </>
    )
}


export default Movie