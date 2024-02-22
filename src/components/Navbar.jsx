import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Navbar fixed="top" className="bg-body-tertiary">
            <Container>
                <Link to="/">
                    <Navbar.Brand>LOGO</Navbar.Brand>
                </Link>
                <h1>MovieMaestro</h1>
                <Link to="/">
                    <Navbar.Brand>profile</Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    );
}
export default NavBar;