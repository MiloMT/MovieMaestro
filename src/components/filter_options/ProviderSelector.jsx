import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"

const ProviderSelector = ({ setProvider }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("8")

    useEffect(() => setProvider(selectValue), [selectValue]);

    return (
        <div>
            <h6>Select a Provider</h6>
            <Form.Select
                onChange={(event) => setSelectValue(event.target.value)}
                value={selectValue}
            >
                {apiDefaults.providerList && apiDefaults.providerList.map((prov) => (
                    <option key={prov.provider_id} value={prov.provider_id}>
                    {" "}
                    {prov.provider_name}{" "}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
};

export default ProviderSelector;
