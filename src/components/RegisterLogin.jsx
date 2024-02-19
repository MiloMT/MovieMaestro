import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function RegisterLogin() {

    const [action, setAction] = useState('Login')

    return (
        <Form>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction('Register')}}>Register</div>
            <div className={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction('Login')}}>Login</div>
            {action==="Login"?<div></div>:<Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Control type="name" placeholder="Name" />
            </Form.Group>}
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {action==="Register"?<div></div>:<div className="forgot-password">Forgot password?</div>}
            {action==="Register"?<button type="submit">Create Account</button>:<button type="submit">Login</button>}
            
        </Form>
    );
}

export default RegisterLogin;