import React, { useContext, useEffect, useState } from "react"
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import Select from "react-select"


function getDefault(user, isLoggedIn) {
    if (sessionStorage.getItem("token") && isLoggedIn) {
        return user.region
    } else {
        return {
            "value": "AU",
            "label": "Australia"
          }
    }
}

const RegionSelector = ({ setRegion }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    const [user, setUser] = loggedUser
    const [isLoggedIn, setLoggedIn] = LoggedIn

    const regionDefault = getDefault(user, isLoggedIn)

    // Component States
    const [selectValue, setSelectValue] = useState(regionDefault)

    // Hooks
    useEffect(() => setRegion(selectValue), [selectValue])

    return (
        <Form.Group controlId="formRegion" className="selector">
            <Form.Label className="selector-label">Region</Form.Label>
            <Select 
                onChange={(obj) => setSelectValue(obj)}
                defaultValue={regionDefault}
                options={
                apiDefaults.regionList && apiDefaults.regionList.map((reg) => (
                    { value: reg.iso_3166_1, label: reg.english_name}
                ))
            } />
        </Form.Group>
    )
}


export default RegionSelector