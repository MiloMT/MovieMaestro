import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import GenreSelector from "./filter_options/GenreSelector";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Context } from "./App";

function AdvancedSearch() {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [movies, setMovies] = movieList
    // Component States
    const [genre, setGenre] = useState("");
    // Object Initialization
    const navigate = useNavigate();

    function MovieRequest() {
        fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,
        {
            method: "GET",
            headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2NkNDA5NDQ3MGU3YmFhNjZmYTg0MjljYmU3OTM3YiIsInN1YiI6IjY1YzVkODg5OGUyMGM1MDE2NDMzMTM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OBGleiES5kWMJQmgbRAvnzsSEGmJvHcx-tBkr454SoY",
            },
        }
        )
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
        })
        .then(() => navigate("/movie"));
    }

    return (
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Advanced Search</Accordion.Header>
            <Accordion.Body>
            <p>Select a Genre</p>
            <GenreSelector setGenre={setGenre} />
            <Button onClick={MovieRequest} variant="primary">
                Search Movie
            </Button>{" "}
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
}

export default AdvancedSearch;