import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "./App"
// Bootstrap Components
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
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
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=${adult}&include_video=false&language=${language}&page=1&sort_by=popularity.desc&watch_region=${region}&with_genres=${genre}&with_watch_providers=${provider}`

        fetch( url,
            {
                method: "GET",
                headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
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
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Advanced Search</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <GenreSelector setGenre={setGenre} />
                        <LanguageSelector setLanguage={setLanguage} />
                        <RegionSelector setRegion={setRegion} />
                        <ProviderSelector setProvider={setProvider} />
                        <Form.Group className="button" controlId="submitButton">
                            <Button onClick={MovieRequest} variant="primary">
                                Search Movie
                            </Button>{" "}
                        </Form.Group>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}


export default AdvancedSearch;