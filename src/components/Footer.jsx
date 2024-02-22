import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/TMDBLogo.svg";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <>
        <Navbar fixed="bottom" className="bg-body-tertiary">
            <Navbar.Brand href="https://www.themoviedb.org/">
            <img src={Logo} alt="TMDB Logo" className="tmdb-logo" />
            </Navbar.Brand>
            <p className="tmdb-attribution">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
            </p>
            <Container>
            <Navbar.Brand className="footer-names">
                <p>Created by: Myles, Yoshi, Mitch</p>
            </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    );
};

export default Footer;
