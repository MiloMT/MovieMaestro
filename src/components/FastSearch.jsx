import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import GenreSelector from "./GenreSelector"; // Import the GenreSelector component here

import Button from "react-bootstrap/Button";

function FastSearch() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  let [genre, setGenre] = useState("");

  function MovieRequest() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2NkNDA5NDQ3MGU3YmFhNjZmYTg0MjljYmU3OTM3YiIsInN1YiI6IjY1YzVkODg5OGUyMGM1MDE2NDMzMTM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OBGleiES5kWMJQmgbRAvnzsSEGmJvHcx-tBkr454SoY",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data.results));
  }

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Fast Search</Accordion.Header>
        <Accordion.Body>
          <p>Select a Genre</p>
          <GenreSelector setGenre={setGenre} />
          <Button onClick={MovieRequest} variant="primary">
            Search Movie
          </Button>{" "}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FastSearch;
