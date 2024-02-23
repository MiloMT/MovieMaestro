import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Context } from "./App"
import Form from 'react-bootstrap/Form';
import ProviderSelector from "./filter_options/ProviderSelector"
import LanguageSelector from "./filter_options/LanguageSelector"
import { Row } from 'react-bootstrap';


function EditProfile() {
    // Context State
    // const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    // const [user, setUser] = loggedUser

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [provider, setProvider] = useState("");
    const [language, setLanguage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleCancel = () => {
        setName("");
        setEmail("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const updateEntry = {
            name: name,
            email: email
        }
        console.log(updateEntry)
        // id?
        // const res = await fetch('https://moviemaestro-api.onrender.com/users/?', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(updateEntry)
        // })
        // const data = await res.json()
        // console.log(data)
        
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit Profile
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Edit Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <h2>Profile Details</h2>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Control type="name" value={name} onChange={e => handleName(e)} placeholder="Name" />
                            </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Control type="email" value={email} onChange={e => handleEmail(e)} placeholder="Email" />
                        </Form.Group>
                        <p>Streaming Platform: </p>
                        <ProviderSelector setProvider={setProvider}/>
                        <p>Language: </p>
                        <LanguageSelector setLanguage={setLanguage} />
                        <div></div>
                        <Button type="submit" variant="warning">Save</Button>{' '}
                        <Button type="submit" onClick={handleCancel} variant="secondary">Cancel</Button>{' '}
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default EditProfile;