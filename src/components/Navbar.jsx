import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Context } from "./App.jsx"
// Style Imports
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
// Component Imports
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"


const NavBar = () => {
    // Context States
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [isLoggedIn, setLoggedIn] = LoggedIn
    const [user, setUser] = loggedUser
    // Object initialization
    const nav = useNavigate();

    function logout() {
        setLoggedIn(false)
        sessionStorage.removeItem("token")
        setUser(null)
        nav("/")
    }

    return (
        <Navbar fixed="top" className="bg-body-tertiary">
            <Container>
                <Col style={{display: "flex", justifyContent: "start"}}>
                    <Link to="/">
                        <Navbar.Brand>
                            <img src={logo} style={{height:"65px"}} />
                        </Navbar.Brand>
                    </Link>
                </Col>
                <Col>
                    <h1 className="mobile-hide">MovieMaestro</h1>
                </Col>
                {/* Render is conditional on whether use is logged in */}
                <Col style={{display: "flex", justifyContent: "end"}}>
                    { isLoggedIn ? (
                        <>
                            <Stack direction="horizontal" gap={2}>
                                <Link to="/profile">
                                    <Button onClick={() => nav("/profile")}>
                                        PROFILE
                                        {/* <img src={profile} style={{height:"20px"}} /> */}
                                    </Button>
                                </Link>
                                <Button onClick={logout}>LOGOUT</Button>
                            </Stack>
                        </>
                    ) : (
                        <Button onClick={() => nav("/login")}>LOGIN</Button>
                    )}
                </Col>
            </Container>
        </Navbar>
    )
}


export default NavBar