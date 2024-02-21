import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const OtherMovies = ({ selectedMovies, setMovieIndex }) => {

  return (
    <>
      <CardGroup
        className="other-movie-cards"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {selectedMovies.map((movie, index) => (
          <div
            key={index}
            onClick={() => setMovieIndex(index)}
            style={{ width: "calc(20% - 10px)", margin: "5px" }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </CardGroup>
    </>
  );
};

export default OtherMovies;
