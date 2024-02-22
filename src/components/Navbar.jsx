import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Navbar fixed="top" className="bg-body-tertiary">
            <Container>
                <Link to="/"></Link>
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <h1>MovieMaestro</h1>
                <Navbar.Brand href="/profile">profile</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;