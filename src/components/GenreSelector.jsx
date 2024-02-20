import React, { useEffect, useState } from "react";

const GenreSelector = ({ setGenre, genreList }) => {
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => setGenre(selectValue), [selectValue]);

  return (
    <select
      onChange={(event) => setSelectValue(event.target.value)}
      value={selectValue}
    >
      {genreList ? (
        genreList.map((gen) => (
          <option key={gen.id} value={gen.id}>
            {" "}
            {gen.name}{" "}
          </option>
        ))
      ) : (
        <option>Loading...</option>
      )}
    </select>
    
  );
};

export default GenreSelector;
