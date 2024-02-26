import React from 'react'
// Component Imports
import RegisterLoginSwitch from '../components/RegisterLoginSwitch'
// Bootstrap Components
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import Col from "react-bootstrap/Col"


const Login = () => {
    return (
        <>
            <Container fluid>
                <Col md={12}>
                    <RegisterLoginSwitch />
                </Col>
            </Container>
        </>
    )
}


export default Login    