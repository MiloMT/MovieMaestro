import React, { useContext, useState, useEffect } from "react"
import { Context } from "./App.jsx"
import { jwtDecode } from "jwt-decode"
// Bootstrap Components
import Stack from "react-bootstrap/Stack"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
// Component Imports
import OtherMovies from "./OtherMovies.jsx"

const MovieDisplay = () => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    const [movies, setMovies] = movieList
    const [isLoggedIn, setLoggedIn] = LoggedIn
    const [user, setUser] = loggedUser
    // Component States
    const [selectedMovies, setSelectedMovies] = useState([])
    const [movieIndex, setMovieIndex] = useState([0])
    const [isBusy, setBusy] = useState(true)
    const [inWatchedList, setInWatchedList] = useState(false)

    // Updates the movie list to re-render when movies state updated
    useEffect(() => {
        selectMovies()
        setBusy(false)
    }, [movies])

    useEffect(() => {
        if (selectedMovies.length !== 0 && isLoggedIn) {
            setInWatchedList(false)
            checkWatchedList()
        }
    }, [movieIndex])

    const checkWatchedList = () => {
        if (user) {
            if (
                user.watchList.some(
                    (movies) => movies.title === selectedMovies[movieIndex].title
                )
            ) {
                setInWatchedList(true)
            }
        }
    }

    const selectMovies = () => {
        if (movies && movies.length > 0) {
            const movieList = [];
            while (movieList.length < 4) {
                const randomIndex = Math.floor(Math.random() * movies.length)
                if (!movieList.includes(movies[randomIndex])) {
                    movieList.push(movies[randomIndex])
                }
            }
            setSelectedMovies(movieList)
        }
    };

    const handleAddWatchedList = async () => {
        const user = jwtDecode(sessionStorage.getItem("token"))

        const response = await fetch(
            `https://moviemaestro-api.onrender.com/users/${user.id}/watchList`,
            {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
                body: JSON.stringify(selectedMovies[movieIndex]),
            }
        )
        const data = await response.json()
        setUser(data)
    }

    const handleAddWishList = () => {
        const user = jwtDecode(sessionStorage.getItem("token"))

        fetch(`https://moviemaestro-api.onrender.com/users/${user.id}/wishList`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            body: JSON.stringify(selectedMovies[movieIndex]),
        })
    }

    return (
        <>
            {isBusy ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <Stack gap={5}>
                        {selectedMovies !== null && movies && movies.length > 0 && (
                            <Row className="selected-movie">
                                <Col md={"auto"}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${selectedMovies[movieIndex].poster_path}`}
                                    alt="Movie Poster Image"
                                    style={{ height: "400px" }}
                                />
                                </Col>
                                <Col>
                                    <Stack gap={3}>
                                        <h4>{selectedMovies[movieIndex].title}</h4>
                                        <h6>{selectedMovies[movieIndex].overview}</h6>
                                        <p>Rating: {selectedMovies[movieIndex].vote_average}</p>
                                        <p>Genres:{" "}
                                        {selectedMovies[movieIndex].genre_ids
                                            .map(
                                            (id) =>
                                                apiDefaults.genreList.find((obj) => obj.id === id)
                                                .name
                                            )
                                            .join(", ")}
                                        </p>
                                        {isLoggedIn && (
                                            <>
                                                <Row md={2}>
                                                <Col>
                                                    {inWatchedList ? (
                                                        <Button variant="outline-success">Added</Button>
                                                    ) : (
                                                        <Button
                                                        variant="outline-primary"
                                                        onClick={() => {
                                                            handleAddWatchedList()
                                                            setInWatchedList(true)
                                                        }}
                                                        >
                                                            Watched
                                                        </Button>
                                                    )}
                                                </Col>
                                                <Col>
                                                    <Button
                                                    variant="outline-primary"
                                                    onClick={() => {
                                                        handleAddWishList()
                                                    }}
                                                    >
                                                        Watch Later
                                                    </Button>
                                                </Col>
                                                </Row>
                                            </>
                                        )}
                                    </Stack>
                                </Col>
                            </Row>
                        )}
                        <OtherMovies 
                            selectedMovies={selectedMovies} 
                            setMovieIndex={setMovieIndex} 
                        />
                    </Stack>
                </>
            )}
        </>
    );
};

export default MovieDisplay;
