import React, { useState, useContext } from "react";

const Login = () => {
    // Component States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ email, password });
        setPassword("")
        setEmail("")
    };

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
};

export default Login;