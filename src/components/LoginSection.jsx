import React, { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
// Bootstrap Components
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { Context } from './App'


const LoginSection = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [isLoggedIn, setLoggedIn] = LoggedIn
    const [user, setUser] = loggedUser
    // Component States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [failedLogin, setFailedLogin] = useState(false)
    const [isBusy, setBusy] = useState(false)

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
                const userObj = jwtDecode(sessionStorage.getItem("token"))
                fetch (
                    `https://moviemaestro-api.onrender.com/users/${userObj.id}`, {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                        },
                    }
                )
                .then((res) => res.json())
                .then((data) => setUser(data))
                .then(() => nav('/'))
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
            <Stack gap={3}>
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
                    <Button type="submit" variant="primary">Login</Button>
                </Row>
            </Stack>
        </Form>
    )
}


export default LoginSection