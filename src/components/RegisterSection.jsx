import React, { useState } from "react"
// Bootstrap Components
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


const RegisterSection = ({ setAction }) => {
    // Component States
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function addUser(name, email, password) {
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
            setAction('Login')
        } catch (error) {
            console.log("Error:", error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={3}>
                <Row>
                    <Form.Control 
                        type="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder="Name" 
                    />
                </Row>
                <Row>
                    <Form.Control 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Email" 
                    />
                </Row>
                <Row>
                    <Form.Control 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Password" 
                    />
                </Row>
                <Row>
                    <Button type="submit" variant="primary">
                        Create Account
                    </Button>
                </Row>
            </Stack>
            
        </Form>
    )
}


export default RegisterSection