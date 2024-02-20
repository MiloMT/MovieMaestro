import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function RegisterLogin() {

    const [action, setAction] = useState("Register")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [users, setUsers] = useState([])

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


    const handleSubmit = (e) => {
        e.preventDefault()
        if (action === "Register") {
            console.log({
                name,
                email,
                password
            })
            // nav('/')
            addUser(name, email)
        } else {
            console.log({
                email,
                password
            })
            // nav('/')
        }
    }

    // async function addUser(name, email) {

    //     const newUser = {
    //         name: name,
    //         email: email
    //     }
    //     // const res = await fetch('', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     },
    //     //     body: JSON.stringify(newUser)
    //     // })
    //     const data = newUser
    //     setUsers([...users, data])
    //     // console.log(users)
    // }

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