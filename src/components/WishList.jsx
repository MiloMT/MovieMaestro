import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Context } from "./App";
import "../styles/WatchedList.css";
import Button from "react-bootstrap/Button";
import { jwtDecode } from "jwt-decode";

const WishList = () => {
  const { loggedUser } = useContext(Context);
  const user = loggedUser[0];
  const setUser = loggedUser[1];
  {
    console.log(user);
  }

  // Check if the user and watchList are defined before rendering
  if (!user || !user.wishList || user.wishList.length === 0) {
    return <div>No movies in your wish list</div>;
  }

  const removeMovie = async (movie) => {
    const user = jwtDecode(sessionStorage.getItem("token"));
    const response = await fetch(
      `https://moviemaestro-api.onrender.com/users/${user.id}/wishList`,
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
      <h3>Wish list</h3>
      <div className="watched-container">
        {user.wishList.map((movie, index) => (
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

export default WishList;
