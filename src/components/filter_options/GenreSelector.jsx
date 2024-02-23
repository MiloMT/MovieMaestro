import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"

const GenreSelector = ({ setGenre }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("28")

    useEffect(() => setGenre(selectValue), [selectValue]);

    return (
        <div>
            <h6>Select a Genre</h6>
            <Form.Select 
                onChange={(event) => setSelectValue(event.target.value)}
                value={selectValue}
            >
                {apiDefaults.genreList && apiDefaults.genreList.map((gen) => (
                    <option key={gen.id} value={gen.id}>
                        {gen.name}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
};

export default GenreSelector;
