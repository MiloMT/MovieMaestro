import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FastSearch from './FastSearch';
import AdvancedSearch from './AdvancedSearch';

function Responsive() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Button  variant="primary" className="d-lg-none" onClick={handleShow}>
            Search Movie
            </Button>

            <Offcanvas show={show} onHide={handleClose} responsive="lg">
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
    );
}

export default Responsive;