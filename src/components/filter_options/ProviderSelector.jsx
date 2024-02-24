import React, { useContext, useEffect, useState } from "react"
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"

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
            <FloatingLabel label="Streaming Provider">
                <Form.Select
                    onChange={(event) => setSelectValue(event.target.value)}
                    value={selectValue}
                >
                    {apiDefaults.providerList && apiDefaults.providerList.map((prov) => (
                        <option key={prov.provider_id} value={prov.provider_id}>
                            {prov.provider_name}
                        </option>
                    ))}
                </Form.Select>
            </FloatingLabel>
        </Form.Group>
    )
}


export default ProviderSelector