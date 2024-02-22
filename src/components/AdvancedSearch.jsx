import React, { useState, useContext } from "react"
import Accordion from "react-bootstrap/Accordion"
import GenreSelector from "./filter_options/GenreSelector"
import LanguageSelector from "./filter_options/LanguageSelector"
import ProviderSelector from "./filter_options/ProviderSelector"
import RegionSelector from "./filter_options/RegionSelector"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"
import { Context } from "./App"

function AdvancedSearch() {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [movies, setMovies] = movieList
    // Component States
    const [genre, setGenre] = useState("28");
    const [language, setLanguage] = useState("en");
    const [provider, setProvider] = useState("8");
    const [region, setRegion] = useState("AU");
    const [adult, setAdult] = useState("false")
    // Object Initialization
    const navigate = useNavigate();

    function MovieRequest() {
        
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=${adult}&include_video=false&language=${language}&page=1&sort_by=popularity.desc&watch_region=${region}&with_genres=${genre}&with_watch_providers=${provider}`

        fetch( url,
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
            <GenreSelector genre={genre} setGenre={setGenre} />
            <LanguageSelector language={language} setLanguage={setLanguage} />
            <RegionSelector region={region} setRegion={setRegion} />
            <ProviderSelector provider={provider} setProvider={setProvider} />
            <Button onClick={MovieRequest} variant="primary">
                Search Movie
            </Button>{" "}
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
}

export default AdvancedSearch;
