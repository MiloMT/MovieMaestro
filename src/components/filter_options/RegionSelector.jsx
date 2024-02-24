import React, { useContext, useEffect, useState } from "react"
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"

const RegionSelector = ({ setRegion }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("AU")

    // Hooks
    useEffect(() => setRegion(selectValue), [selectValue])

    return (
        <Form.Group controlId="formRegion">
            <FloatingLabel label="Region">
                <Form.Select
                    onChange={(event) => setSelectValue(event.target.value)}
                    value={selectValue}
                >
                    {apiDefaults.regionList && apiDefaults.regionList.map((reg) => (
                        <option key={reg.iso_3166_1} value={reg.iso_3166_1}>
                            {reg.english_name}
                        </option>
                    ))}
                </Form.Select>
            </FloatingLabel>
        </Form.Group>
    )
}


export default RegionSelector