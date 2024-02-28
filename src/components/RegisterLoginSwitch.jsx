import { useState } from 'react'
// Bootstrap Components
import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
// Component Imports
import RegisterSection from './RegisterSection'
import LoginSection from './LoginSection'



function RegisterLoginSwitch() {
    // Component State
    const [action, setAction] = useState("Register")
    
    return (
        <>
            <Stack gap={3}>
                <Row>
                    <Col style={{paddingRight: 0, paddingLeft: 0}}>
                        <div onClick={() => { setAction('Register') }}
                            className={action === "Login" ? "inactive" : "active"}
                        >
                            <h6>Register</h6>
                            <hr />
                        </div>   
                    </Col>
                    <Col style={{paddingRight: 0, paddingLeft: 0}}>
                    <div onClick={() => { setAction('Login') }} 
                        className={action === "Register" ? "inactive" : "active"}
                    >
                        <h6>Login</h6>
                        <hr />
                    </div>
                    
                    </Col>
                </Row>
                {action === "Register" ? (
                    <RegisterSection setAction={setAction} />
                ) : (
                    <LoginSection />
                )}
            </Stack>
            
        </>
    )
}


export default RegisterLoginSwitch