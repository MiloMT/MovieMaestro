import React, { useContext, useEffect, useState } from "react"
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"

const LanguageSelector = ({ setLanguage }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("en")

    // Hooks
    useEffect(() => setLanguage(selectValue), [selectValue])

    return (
        <Form.Group controlId="formLanguage">
            <FloatingLabel label="Language">
                <Form.Select 
                    onChange={(event) => setSelectValue(event.target.value)}
                    value={selectValue}
                >
                    {apiDefaults.languageList && apiDefaults.languageList.map((lan) => (
                        <option key={lan.iso_639_1} value={lan.iso_639_1}>
                            {lan.english_name}
                        </option>
                    ))}
                </Form.Select>
            </FloatingLabel>
        </Form.Group>
    )
}


export default LanguageSelector