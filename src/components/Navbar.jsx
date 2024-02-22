import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"
import { Context } from "./App.jsx"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";



const NavBar = () => {
    const { api, LoggedIn, loggedUser } = useContext(Context)
    const [isLoggedIn, setLoggedIn] = LoggedIn
    const [user, setUser] = loggedUser
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
                    <Navbar.Brand>LOGO</Navbar.Brand>
                </Link>
                <h1>MovieMaestro</h1>
                { isLoggedIn ? (
                    <>
                        <Link to="/profile">
                            <Navbar.Brand>Profile</Navbar.Brand>
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