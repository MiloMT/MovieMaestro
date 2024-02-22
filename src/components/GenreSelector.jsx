import React, { useContext, useEffect, useState } from "react";
import { Context } from "./App.jsx"

const GenreSelector = ({ setGenre, genreList }) => {
  const [selectValue, setSelectValue] = useState("")
  const { api, isLoggedIn } = useContext(Context)
  const [apiDefaults, setApiDefaults] = api

  useEffect(() => setGenre(selectValue), [selectValue]);

  return (
    <select
      onChange={(event) => setSelectValue(event.target.value)}
      value={selectValue}
    >
      {apiDefaults.genreList && apiDefaults.genreList.map((gen) => (
        <option key={gen.id} value={gen.id}>
          {" "}
          {gen.name}{" "}
        </option>
      ))}
    </select>
    
  );
};

export default GenreSelector;
