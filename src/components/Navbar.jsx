import { useContext } from "react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import { Context } from "./App.jsx"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"
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
                    <Navbar.Brand><img src={logo} style={{height:"65px"}} /></Navbar.Brand>
                </Link>
                <h1>MovieMaestro</h1>
                { isLoggedIn ? (
                    <>
                        <Link to="/profile">
                            <Navbar.Brand><img src={profile} style={{height:"35px"}} /></Navbar.Brand>
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
    );
}
export default NavBar;