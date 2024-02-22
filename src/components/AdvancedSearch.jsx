import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "./App"
// Bootstrap Components
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
// Filter Components
import GenreSelector from "./filter_options/GenreSelector"
import LanguageSelector from "./filter_options/LanguageSelector"
import ProviderSelector from "./filter_options/ProviderSelector"
import RegionSelector from "./filter_options/RegionSelector"

function AdvancedSearch() {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [movies, setMovies] = movieList
    // Component States
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [provider, setProvider] = useState("");
    const [region, setRegion] = useState("");
    const [adult, setAdult] = useState("false")
    // Object Initialization
    const navigate = useNavigate();

    function MovieRequest() {
        console.log(region)
        console.log(language)
        console.log(genre)
        console.log(provider)

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
                <div>
                    <h6>Select a Genre</h6>
                    <GenreSelector genre={genre} setGenre={setGenre} />
                </div>
                <div>
                    <h6>Select a Language</h6>
                    <LanguageSelector language={language} setLanguage={setLanguage} />
                </div>
                <div>
                    <h6>Select a Region</h6>
                    <RegionSelector region={region} setRegion={setRegion} />
                </div>
                <div>
                    <h6>Select a Provider</h6>
                    <ProviderSelector provider={provider} setProvider={setProvider} />
                </div>
                <Button onClick={MovieRequest} variant="primary">
                    Search Movie
                </Button>{" "}
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
}

export default AdvancedSearch;
