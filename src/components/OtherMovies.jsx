import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const OtherMovies = ({ movies, genreList, otherMovies }) => {


  // Function to limit the length of movie overview
  const truncateOverview = (overview, maxLength) => {
    if (overview.length > maxLength) {
      return overview.substring(0, 50) + "...";
    } else {
      return overview;
    }
  };

  return (
    <>
      <CardGroup className="other-movie-cards">
        {otherMovies.map((movie, index) => (
          <Card key={index}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{truncateOverview(movie.overview, 150)}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Rating: {movie.vote_average}</small>
              <br />
              <small className="text-muted">
                Genres:{" "}
                {movie.genre_ids
                  .map((id) => genreList.find((obj) => obj.id === id).name)
                  .join(", ")}
              </small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default OtherMovies;
