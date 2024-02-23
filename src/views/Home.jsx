import React from 'react'
import FastSearch from '../components/FastSearch'
import AdvancedSearch from '../components/AdvancedSearch'
import RegisterButton from '../components/RegisterButton'

import Stack from "react-bootstrap/Stack"


const Home = () => {
    return (
        <>
            <div>Home</div>
            <Stack gap={3}>
                <FastSearch />
                <AdvancedSearch />
                <RegisterButton />
            </Stack>
        </>
    );
}


export default Home