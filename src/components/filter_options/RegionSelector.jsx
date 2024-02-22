import React, { useContext, useEffect, useState } from "react";
import Select from "react-select"
import { Context } from "../App.jsx"

const RegionSelector = ({ region, setRegion }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("AU")

    useEffect(() => setRegion(selectValue), [selectValue]);

    return (
        <select
        onChange={(event) => setSelectValue(event.target.value)}
        value={selectValue}
        >
        {apiDefaults.regionList && apiDefaults.regionList.map((reg) => (
            <option key={reg.iso_3166_1} value={reg.iso_3166_1}>
            {" "}
            {reg.english_name}{" "}
            </option>
        ))}
        </select>
        
    );
};

export default RegionSelector;
