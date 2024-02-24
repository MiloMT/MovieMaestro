import React, { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { Context } from './App'


const LoginSection = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [isLoggedIn, setLoggedIn] = LoggedIn
    // Component States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [failedLogin, setFailedLogin] = useState(false)

    const nav = useNavigate()

    async function loginUser(credentials) {
        return await fetch('https://moviemaestro-api.onrender.com/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
        .then(data => {
            if (data.status === "Successful Login") {
                setLoggedIn(true)
                setFailedLogin(false)
                sessionStorage.setItem("token", data.accessToken)
                nav('/')
            } else {
                throw new Error("Incorrect login details")
                setFailedLogin(true)
            }
        })
        .catch((err) => console.log(err))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await loginUser({ email: email, password: password })
        } catch (error) {
            console.log("Error:", error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Button variant="link">Forgot password?</Button>
            <div></div>
            <button type="submit">Login</button>
        </Form>
    )
}


export default LoginSection