import React from 'react'
// Bootstrap Components
import Stack from "react-bootstrap/Stack"
// Component Imports
import FastSearch from '../components/FastSearch'
import AdvancedSearch from '../components/AdvancedSearch'
import RegisterButton from '../components/RegisterButton'
import Header from '../components/HomeHeader'


const Home = () => {
    return (
        <>
            <Header />
            <Stack gap={3}>
                <FastSearch />
                <AdvancedSearch />
                <RegisterButton />
            </Stack>
        </>
    );
}


export default Home