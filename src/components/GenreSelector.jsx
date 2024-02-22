import React, { useContext, useEffect, useState } from "react"
import { Context } from "./App.jsx"

const GenreSelector = ({ setGenre, genreList }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("")

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
