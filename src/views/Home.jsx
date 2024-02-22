import React from 'react'
import FastSearch from '../components/FastSearch'
import AdvancedSearch from '../components/AdvancedSearch'
import RegisterButton from '../components/RegisterButton'
import Header from '../components/HomeHeader';


const Home = () => {
    return (
        <>
            <Header />
            <FastSearch />
            <AdvancedSearch />
            <RegisterButton />
        </>
    );
}


export default Home