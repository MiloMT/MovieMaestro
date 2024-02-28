import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "./App"
// Bootstrap Components
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
// Filter Components
import GenreSelector from "./filter_options/GenreSelector"


function FastSearch({ onHide = null }) {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [movies, setMovies] = movieList
    // Component States
    let [genre, setGenre] = useState("")
    // Object Initialization
    const navigate = useNavigate()

    function MovieRequest() {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.value}`

        fetch( url, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results)
        })
        .then(() => navigate("/movie"))
        .then(() => window.scrollTo(0, 0))
    }

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Fast Search</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Stack gap={3}>
                            <GenreSelector setGenre={setGenre} />
                            <Form.Group className="button" controlId="submitButton">
                                <Button onClick={() => {
                                    MovieRequest()
                                    if (onHide) {
                                        onHide()
                                    }
                                }} 
                                variant="primary">
                                    Search Movie
                                </Button>{" "}
                            </Form.Group>
                        </Stack>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}


export default FastSearch