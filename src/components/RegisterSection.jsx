import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/Row"


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
            <Form.Group as={Row} controlId="formPlaintextName">
                <Form.Control type="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <button type="submit">Create Account</button>
        </Form>
    )
}


export default RegisterSection