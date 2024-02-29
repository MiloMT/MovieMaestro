import { useState } from 'react'
// Bootstrap Components
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Stack from 'react-bootstrap/Stack'
// Component Imports
import FastSearch from './FastSearch'
import AdvancedSearch from './AdvancedSearch'


function SideFilterMenu() {
    // Component States
    const [show, setShow] = useState(false)
    
    return (
        <>
            <Button  variant="primary" className="d-lg-none button-full" onClick={() => setShow(true)}>
                Search Movie
            </Button>

            <Offcanvas show={show} onHide={() => setShow(false)} responsive="lg">
                <Offcanvas.Header data-testid="close-button" closeButton>
                    <Offcanvas.Title >Search Movie</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        <FastSearch onHide={() => setShow(false)} />
                        <AdvancedSearch onHide={() => setShow(false)} />
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


export default SideFilterMenu