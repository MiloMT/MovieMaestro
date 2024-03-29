import React, { useContext } from "react"
import { Card } from "react-bootstrap"
import { Context } from "./App"
import Button from "react-bootstrap/Button"
import { jwtDecode } from "jwt-decode"

const WatchedList = () => {
    const { loggedUser } = useContext(Context);
    const user = loggedUser[0];
    const setUser = loggedUser[1];

    // Check if the user and watchList are defined before rendering
    if (!user || !user.watchList || user.watchList.length === 0) {
        return <div>Search movies to add to your watch list.</div>;
    }

    const removeMovie = async (movie) => {
        const user = jwtDecode(sessionStorage.getItem("token"));
        const response = await fetch(
        `https://moviemaestro-api.onrender.com/users/${user.id}/watchList`,
        {
            method: "DELETE",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            body: JSON.stringify(movie),
        }
        );
        const updatedUser = await response.json();
        setUser(updatedUser);
    };

    return (
        <>
            <h3 style={{ textAlign: "left" }}>Watched list</h3>
            <div className="watched-container">
                {user.watchList.map((movie, index) => (
                <div key={index} className="watched-card-container">
                    <Card style={{ padding: 0 }}>
                        <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            style={{ height: "200px" }}
                        />
                        <Card.Body style={{ display: "flex", flexWrap: "wrap" }}>{movie.title}</Card.Body>
                        <Button variant="danger" onClick={() => removeMovie(movie)}>
                            Remove
                        </Button>
                    </Card>
                </div>
                ))}
            </div>
        </>
    )
}

export default WatchedList
