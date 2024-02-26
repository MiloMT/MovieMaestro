import React, { useEffect, useState } from "react"
// React Bootstrap imports
import Form from "react-bootstrap/Form"
import Select from "react-select"


const PrioritySelector = ({ setPriority }) => {
    // Component States
    const [selectValue, setSelectValue] = useState("popularity.desc")

    // Hooks
    useEffect(() => setPriority(selectValue), [selectValue])

    return (
        <Form.Group controlId="formRegion">
            <Form.Label>Search by</Form.Label>
            <Select 
                onChange={(event) => setSelectValue(event.value)}
                defaultValue={{ value: "popularity.desc", label: "Popularity"}}
                className="select-box"
                options= {[
                    { value: "popularity.desc", label: "Popularity"},
                    { value: "primary_release_date.desc", label: "Release Date"},
                    { value: "vote_average.desc", label: "Average Rating"},
                    { value: "revenue.desc", label: "Revenue"}
                ]}
            />
        </Form.Group>
    )
}


export default PrioritySelector