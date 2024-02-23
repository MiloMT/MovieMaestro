import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"

const LanguageSelector = ({ setLanguage }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("en")

    useEffect(() => setLanguage(selectValue), [selectValue]);

    return (
        <div>
            <h6>Select a Language</h6>
            <Form.Select 
                onChange={(event) => setSelectValue(event.target.value)}
                value={selectValue}
            >
                {apiDefaults.languageList && apiDefaults.languageList.map((lan) => (
                    <option key={lan.iso_639_1} value={lan.iso_639_1}>
                    {" "}
                    {lan.english_name}{" "}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
};

export default LanguageSelector;
