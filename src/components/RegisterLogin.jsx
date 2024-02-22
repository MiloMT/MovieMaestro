import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Context } from './App'


function RegisterLogin() {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [isLoggedIn, setLoggedIn] = LoggedIn
    // Component State
    const [action, setAction] = useState("Register")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [failedLogin, setFailedLogin] = useState(false)
    // Object Initialization
    const nav = useNavigate()

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (action === "Register") {
                console.log({
                    name,
                    email,
                    password
                })
                await addUser(name, email, password)
                nav('/login')
            } else {
                await loginUser({ email: email, password: password })
            }
        } catch (error) {
            console.log("Error:", error)
        }
    }


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
        const data = await res.json()
        console.log(data)
    }
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

    return (
        <Form onSubmit={handleSubmit}>
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction('Register') }}>Register</div>
            <div className={action === "Register" ? "submit gray" : "submit"} onClick={() => { setAction('Login') }}>Login</div>
            {action === "Login" ? <div></div> : <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                <Form.Control type="name" value={name} onChange={e => handleName(e)} placeholder="Name" />
            </Form.Group>}

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Control type="email" value={email} onChange={e => handleEmail(e)} placeholder="Email" />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Control type="password" value={password} onChange={e => handlePassword(e)} placeholder="Password" />
            </Form.Group>
            {action === "Register" ? <div></div> : <Button variant="link">Forgot password?</Button>}
            <div></div>
            {action === "Register" ? <button type="submit">Create Account</button> : <button type="submit">Login</button>}
        </Form>
    );
}


export default RegisterLogin;