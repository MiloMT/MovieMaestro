import React, { useState } from "react"
// Bootstrap Components
import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import SyncLoader from "react-spinners/SyncLoader"


const RegisterSection = ({ setAction }) => {
    // Component States
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isBusy, setBusy] = useState(false)

    async function addUser(name, email, password) {
        setBusy(true)

        const newEntry = {
            name: name,
            email: email,
            password: password
        }

        const res = await fetch('https://moviemaestro-api.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEntry)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addUser(name, email, password)
            setBusy(false)
            // Changes to login component after successful registration
            setAction('Login')
        } catch (error) {
            setBusy(false)
            console.log("Error:", error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={3}>
                <Row>
                    <Form.Control 
                        data-testid="name"
                        type="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder="Name" 
                    />
                </Row>
                <Row>
                    <Form.Control 
                        data-testid="email"
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Email" 
                    />
                </Row>
                <Row>
                    <Form.Control 
                        data-testid="password"
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Password" 
                    />
                </Row>
                <Row>
                    {/* Gives user feedback by changing button if waiting on registration */}
                    {isBusy ? (
                        <Button variant="secondary">
                            <SyncLoader 
                                color="#0d6efd" 
                                size={10}
                                aria-label="Loading Spinner"
                                speedMultiplier={0.5}    
                            />
                        </Button>
                    ) : (
                        <Button type="submit" variant="primary">Create Account</Button>
                    )}
                </Row>
            </Stack>
            
        </Form>
    )
}


export default RegisterSection