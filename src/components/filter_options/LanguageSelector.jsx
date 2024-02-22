import React, { useContext, useEffect, useState } from "react";
import Select from "react-select"
import { Context } from "../App.jsx"

const LanguageSelector = ({ language, setLanguage }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("en")

    useEffect(() => setLanguage(selectValue), [selectValue]);

    return (
        <select
        onChange={(event) => setSelectValue(event.target.value)}
        value={selectValue}
        >
        {apiDefaults.languageList && apiDefaults.languageList.map((lan) => (
            <option key={lan.iso_639_1} value={lan.iso_639_1}>
            {" "}
            {lan.english_name}{" "}
            </option>
        ))}
        </select>
        
    );
};

export default LanguageSelector;
