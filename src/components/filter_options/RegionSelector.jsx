import React, { useContext, useEffect, useState } from "react"
import { Context } from "../App.jsx"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import Select from "react-select"


const RegionSelector = ({ setRegion }) => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [apiDefaults, setApiDefaults] = api
    // Component States
    const [selectValue, setSelectValue] = useState({
        "value": "AU",
        "label": "Australia"
      })

    // Hooks
    useEffect(() => setRegion(selectValue), [selectValue])

    return (
        <Form.Group controlId="formRegion">
            <Form.Label>Region</Form.Label>
            <Select 
                onChange={(obj) => setSelectValue(obj)}
                defaultValue={{value: "AU", label: "Australia"}}
                className="select-box"
                options={
                apiDefaults.regionList && apiDefaults.regionList.map((reg) => (
                    { value: reg.iso_3166_1, label: reg.english_name}
                ))
            } />
        </Form.Group>
    )
}


export default RegionSelector