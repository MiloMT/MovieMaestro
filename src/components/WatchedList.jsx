import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Context } from "./App";
import "../styles/WatchedList.css";
import Button from "react-bootstrap/Button";
import { jwtDecode } from "jwt-decode";

const WatchedList = () => {
  const { loggedUser } = useContext(Context);
  const user = loggedUser[0];
  const setUser = loggedUser[1];

  // Check if the user and watchList are defined before rendering
  if (!user || !user.watchList || user.watchList.length === 0) {
    return <div>There are no movies in your watched movies list</div>;
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
        body: JSON.stringify(movie), // Send the title of the movie to be removed
      }
    );
    const updatedUser = await response.json();
    setUser(updatedUser);
  };

  return (
    <>
      <h3>Watched list</h3>
      <div className="watched-container">
        {user.watchList.map((movie, index) => (
          <div key={index} className="watched-card-container">
            <Card className="watched-card" style={{ maxHeight: 600 }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
              <Card.Body className="watched-card-body">
                <Card.Title className="watched-card-title">
                  {movie.title}
                </Card.Title>
                <Button variant="danger" onClick={() => removeMovie(movie)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchedList;
