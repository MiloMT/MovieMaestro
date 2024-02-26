import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Context } from "./App";
import "../styles/WatchedList.css";

const WatchedList = () => {
  const { loggedUser } = useContext(Context);
  const user = loggedUser[0];

  // Check if the user and watchList are defined before rendering
  if (!user || !user.watchList || user.watchList.length === 0) {
    return <div>There are no movies in your watched movies list</div>;
  }

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
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchedList;
