import React, { useContext, useEffect, useState } from "react"
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import Select from "react-select"


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
            <Form.Label>Language</Form.Label>
            <Select 
                onChange={(event) => setSelectValue(event.value)}
                defaultValue={{value: "en", label: "English"}}
                options={
                apiDefaults.languageList && apiDefaults.languageList.map((lan) => (
                    { value: lan.iso_639_1, label: lan.english_name}
                ))
            } />
        </Form.Group>
    )
}


export default LanguageSelector