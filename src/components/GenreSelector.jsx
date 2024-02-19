import React, { useEffect, useState } from "react";

const GenreSelector = ({ setGenre }) => {
  const [selectValue, setSelectValue] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => setGenre(selectValue), [selectValue]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2NkNDA5NDQ3MGU3YmFhNjZmYTg0MjljYmU3OTM3YiIsInN1YiI6IjY1YzVkODg5OGUyMGM1MDE2NDMzMTM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OBGleiES5kWMJQmgbRAvnzsSEGmJvHcx-tBkr454SoY",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }, []);

  return (
    <select
      onChange={(event) => setSelectValue(event.target.value)}
      value={selectValue}
    >
      {genres.map((gen) => (
        <option key={gen.id} value={gen.id}>
          {" "}
          {gen.name}{" "}
        </option>
      ))}
    </select>
  );
};

export default GenreSelector;
