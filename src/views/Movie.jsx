import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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

import { Context } from '../components/App'


const Movie = () => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [movies, setMovies] = movieList
    // Object Initialization
    const navigate = useNavigate()

    // If directly navigated to movie page without searching, directs back to home
    useEffect(() => {
        if (movies.length == 0) {
            console.error("No movies to display, navigating back to home")
            navigate("/")
            return
        }
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col lg={8} md={12}>
                        <MovieDisplay />
                    </Col>
                    <Col lg={4} md={12}>
                        {/* Only show normal drop downs on larger screen sizes */}
                        <div className="tablet-hide">
                            <Stack gap={3}>
                                <FastSearch  />
                                <AdvancedSearch/>
                            </Stack>
                        </div>
                        {/* Only show side menu on smaller screen sizes */}
                        <div className="tablet-show">
                            <SideFilterMenu />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Movie