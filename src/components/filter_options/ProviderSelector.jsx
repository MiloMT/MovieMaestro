import React, { useContext, useEffect, useState } from "react"
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import Select from "react-select"


function getDefault(user, isLoggedIn) {
    if (sessionStorage.getItem("token") && isLoggedIn) {
        return user.streamingPlatform
    } else {
        return [{
            "value": "8", 
            "label": "Netflix"
        }]
    }
}

const ProviderSelector = ({ setProvider }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    const [user, setUser] = loggedUser
    const [isLoggedIn, setLoggedIn] = LoggedIn

    const providerDefault = getDefault(user, isLoggedIn)

    // Component States
    const [selectValue, setSelectValue] = useState(providerDefault)

    // Hooks
    useEffect(() => setProvider(selectValue), [selectValue])

    return (
        <Form.Group controlId="formProvider">
            <Form.Label>Streaming Providers</Form.Label>
            <Select 
                isMulti
                onChange={(array) => setSelectValue(array)}
                defaultValue={providerDefault}
                className="select-box"
                options={
                apiDefaults.providerList && apiDefaults.providerList.map((prov) => (
                    { value: prov.provider_id, label: prov.provider_name}
                ))
            } />
        </Form.Group>
    )
}


export default ProviderSelector