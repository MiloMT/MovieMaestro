import React, { useContext, useEffect, useState } from "react"
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import Select from "react-select"


const ProviderSelector = ({ setProvider }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState("8")

    // Hooks
    useEffect(() => setProvider(selectValue), [selectValue])

    return (
        <Form.Group controlId="formProvider">
            <Form.Label>Streaming Providers</Form.Label>
            <Select 
                isMulti
                onChange={(array) => setSelectValue(array.map(prov => prov.value).join("%7C"))}
                defaultValue={{value: 8, label: "Netflix"}}
                options={
                apiDefaults.providerList && apiDefaults.providerList.map((prov) => (
                    { value: prov.provider_id, label: prov.provider_name}
                ))
            } />
        </Form.Group>
    )
}


export default ProviderSelector