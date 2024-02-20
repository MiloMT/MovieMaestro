import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function RegisterLogin() {

    const [action, setAction] = useState('Register')
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleName = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }


    return (
        <Form>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction('Register')}}>Register</div>
            <div className={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction('Login')}}>Login</div>
            {action==="Login"?<div></div>:<Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Control type="name" value={name} onChange={event => handleName(event)} placeholder="Name" />
            </Form.Group>}
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Control type="email" value={email} onChange={event => handleEmail(event)} placeholder="Email" />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {action==="Register"?<div></div>:<Button variant="link">Forgot password?</Button>}
            <div></div>
            {action==="Register"?<button type="submit">Create Account</button>:<button type="submit">Login</button>}
        </Form>
    );
}

export default RegisterLogin;