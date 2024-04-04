import React from "react"
// Bootstrap Components
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
// Image import
import Logo from "../assets/TMDBLogo.svg"


const Footer = () => {
    return (
        <>
            <Navbar fixed="bottom">
                <Container>
                    <Col md="auto">
                        <Navbar.Brand href="https://www.themoviedb.org/">
                            <img src={Logo} alt="TMDB Logo" className="tmdb-logo" />
                        </Navbar.Brand>
                    </Col>
                    <Col md="4">
                        <p className="tmdb-attribution tablet-hide">
                            This product uses the TMDB API but is not endorsed or certified by TMDB.
                        </p>
                    </Col>
                    <Col>
                    </Col>
                </Container>
            </Navbar>
        </>
    )
}


export default Footer