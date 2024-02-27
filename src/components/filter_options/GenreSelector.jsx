import React, { useContext, useEffect, useState } from "react"
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import Select from "react-select"


const GenreSelector = ({ setGenre }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api

    // Component States
    const [selectValue, setSelectValue] = useState({
        "value": 28,
        "label": "Action"
      })

    // Hooks
    useEffect(() => setGenre(selectValue), [selectValue])

    return (
        <Form.Group controlId="formGenre">
            <Form.Label>Genre</Form.Label>
            <Select 
                onChange={(obj) => setSelectValue(obj)}
                defaultValue={{value: 28, label: "Action"}}
                className="select-box"
                options={
                apiDefaults.genreList && apiDefaults.genreList.map((gen) => (
                    { value: gen.id, label: gen.name}
                ))
            } />
        </Form.Group>
    )
}


export default GenreSelector