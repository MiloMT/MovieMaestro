import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import ProviderSelector from "./filter_options/ProviderSelector"
import LanguageSelector from "./filter_options/LanguageSelector"
import RegionSelector from "./filter_options/RegionSelector"
import { Context } from "./App"


function EditProfile() {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [user, setUser] = loggedUser

    const [show, setShow] = useState(false)
    const [provider, setProvider] = useState("")
    const [language, setLanguage] = useState("")
    const [region, setRegion] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleCancel = () => {
        setName("");
        setEmail("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const updateEntry = {
            name: name,
            email: email,
        }
        console.log(updateEntry)
        // id?
        // const res = await fetch('https://moviemaestro-api.onrender.com/users/?', {
        //     method: 'PATCH',
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
                        <Form.Group as={Row}>
                            <Form.Label htmlFor="nameField">Name</Form.Label>
                            <Form.Control 
                                type="name" 
                                id="nameField"
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                                placeholder={user.name}
                            />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label htmlFor="emailField">Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                id="emailField"
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                placeholder={user.email}
                            />
                        </Form.Group>
                        <ProviderSelector setProvider={setProvider}/>
                        <RegionSelector setRegion={setRegion} />
                        <LanguageSelector setLanguage={setLanguage} />
                        <div></div>
                        <Button type="submit" variant="warning">Save</Button>{' '}
                        <Button type="submit" onClick={handleCancel} variant="secondary">Cancel</Button>{' '}
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


export default EditProfile