import React from 'react'
// Bootstrap Components
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
// Component Imports
import MovieDisplay from '../components/MovieDisplay'
import FastSearch from '../components/FastSearch'
import SideFilterMenu from '../components/SideFilterMenu'
import AdvancedSearch from '../components/AdvancedSearch'


const Movie = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={8}>
                        <MovieDisplay />
                    </Col>
                    <Col md={4}>
                        <Stack gap={3}>
                            <FastSearch />
                            <AdvancedSearch />
                            {/* <SideFilterMenu /> */}
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Movie