import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Context } from "./App";
import "../styles/WatchedList.css";

const WishList = () => {
  const { loggedUser } = useContext(Context);
  const user = loggedUser[0];
  {console.log(user)}

  // Check if the user and watchList are defined before rendering
  if (!user || !user.wishList || user.wishList.length === 0) {
    return <div>No movies in your wish list</div>;
  }

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
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishList;
