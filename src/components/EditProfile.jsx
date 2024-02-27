import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import ProviderSelector from "./filter_options/ProviderSelector"
import LanguageSelector from "./filter_options/LanguageSelector"
import RegionSelector from "./filter_options/RegionSelector"
import { Context } from "./App"
import { useNavigate } from 'react-router-dom'


function EditProfile() {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [user, setUser] = loggedUser
    const [isLoggedIn, setLoggedIn] = LoggedIn


    const [show, setShow] = useState(false)
    const [provider, setProvider] = useState("")
    const [language, setLanguage] = useState("")
    const [region, setRegion] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")



    const handleClose = () => {setShow(false)}
    const handleShow = () => setShow(true)
    const navigate = useNavigate()



    const handleCancel = () => {
        setName("");
        setEmail("");
        setProvider("")
        setRegion("")
        setLanguage("")
    }


        const handleSubmit = async (e) => {
            e.preventDefault()
    
            if (email !=="" || name !=="" || provider !=="" || region !=="" || language !=="") {
                const updatedEntry = {
                    name: name == "" ? user.name : name,
                    email: email == "" ? user.email : email,
                    streamingPlatform: provider == "" ? user.provider : provider,
                    region: region == "" ? user.region : region,
                    language: language == "" ? user.language : language
                }
                
                fetch(`https://moviemaestro-api.onrender.com/users/${user._id}`, {
                    method: "PATCH",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                    body: JSON.stringify(updatedEntry),
                })
                .then((res) => res.json())
                .then((data) => setUser(data))
                .then(() => {
                    setName("")
                    setEmail("")
                    setProvider("")
                    setRegion("")
                    setLanguage("")
                })
            }  
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
                        <ProviderSelector setProvider={setProvider} />
                        <RegionSelector setRegion={setRegion} />
                        <LanguageSelector setLanguage={setLanguage} />
                        <div></div>
                        <Button type="submit" variant="warning">Save</Button>{' '}
                        <Button onClick={handleCancel} variant="secondary">Cancel</Button>{' '}
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


export default EditProfile