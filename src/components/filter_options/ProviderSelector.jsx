import React, { useContext, useEffect, useState } from "react";
import Select from "react-select"
import { Context } from "../App.jsx"

const ProviderSelector = ({ provider, setProvider }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("8")

    useEffect(() => setProvider(selectValue), [selectValue]);

    return (
        <select
        onChange={(event) => setSelectValue(event.target.value)}
        value={selectValue}
        >
        {apiDefaults.providerList && apiDefaults.providerList.map((prov) => (
            <option key={prov.provider_id} value={prov.provider_id}>
            {" "}
            {prov.provider_name}{" "}
            </option>
        ))}
        </select>
        
    );
};

export default ProviderSelector;
