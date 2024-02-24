import React from "react"
// Bootstrap Components
import Navbar from "react-bootstrap/Navbar"
import { Container } from "react-bootstrap"
// Image import
import Logo from "../assets/TMDBLogo.svg"


const Footer = () => {
    return (
        <>
            <Navbar sticky="bottom" className="bg-body-tertiary">
                <Navbar.Brand href="https://www.themoviedb.org/">
                    <img src={Logo} alt="TMDB Logo" className="tmdb-logo" />
                </Navbar.Brand>
                <p className="tmdb-attribution">
                    This product uses the TMDB API but is not endorsed or certified by TMDB.
                </p>
                <Container>
                    <Navbar.Brand className="footer-names">
                        <p>Created by: Myles, Yoshi, Mitch</p>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}


export default Footer