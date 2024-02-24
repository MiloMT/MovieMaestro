import { useState } from 'react'
// Bootstrap Components
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
// Component Imports
import FastSearch from './FastSearch'
import AdvancedSearch from './AdvancedSearch'


function Responsive() {
    // Component States
    const [show, setShow] = useState(false)
    
    return (
        <>
            <Button  variant="primary" className="d-lg-none" onClick={() => setShow(true)}>
                Search Movie
            </Button>

            <Offcanvas show={show} onHide={() => setShow(false)} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Search Movie</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Check p later  */}
                    {/* <p className="mb-0"> */}
                        <FastSearch />
                        <AdvancedSearch />
                    {/* </p> */}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


export default Responsive