import { useState } from 'react'
import RegisterSection from './RegisterSection'
import LoginSection from './LoginSection'


function RegisterLoginSwitch() {
    // Component State
    const [action, setAction] = useState("Register")
    
    return (
        <>
            <div onClick={() => { setAction('Register') }}>Register</div>
            <div onClick={() => { setAction('Login') }}>Login</div>
            {action === "Register" ? (
                <RegisterSection />
            ) : (
                <LoginSection />
            )}
        </>
    )
}


export default RegisterLoginSwitch