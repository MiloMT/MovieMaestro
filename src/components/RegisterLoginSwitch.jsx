import { useState } from 'react'
// Bootstrap Components
import Stack from "react-bootstrap/Stack"
// Component Imports
import RegisterSection from './RegisterSection'
import LoginSection from './LoginSection'



function RegisterLoginSwitch() {
    // Component State
    const [action, setAction] = useState("Register")
    
    return (
        <>
            <Stack gap={3}>
                <Stack direction="horizontal" gap={5}>
                    <div onClick={() => { setAction('Register') }}>Register</div>
                    <div onClick={() => { setAction('Login') }}>Login</div>
                </Stack>
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