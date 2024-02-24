import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Context } from "./App.jsx"
// Style Imports
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from "react-bootstrap/Button"
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
                <Link to="/">
                    <Navbar.Brand>
                        <img src={logo} style={{height:"65px"}} />
                    </Navbar.Brand>
                </Link>
                <h1>MovieMaestro</h1>
                {/* Render is conditional on whether use is logged in */}
                { isLoggedIn ? (
                    <>
                        <Link to="/profile">
                            <Navbar.Brand>
                                <img src={profile} style={{height:"35px"}} />
                            </Navbar.Brand>
                        </Link>
                        <Button onClick={logout}>Logout</Button>
                    </>
                ) : (
                    <Link to="/login">
                        <Navbar.Brand>login</Navbar.Brand>
                    </Link>
                )}
            </Container>
        </Navbar>
    )
}


export default NavBar