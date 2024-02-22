import React from 'react'
import FastSearch from '../components/FastSearch'
import AdvancedSearch from '../components/AdvancedSearch'
import RegisterButton from '../components/RegisterButton'


const Home = () => {
    return (
        <>
            <div>Home</div>
            <FastSearch />
            <AdvancedSearch />
            <RegisterButton />
        </>
    );
}


export default Home