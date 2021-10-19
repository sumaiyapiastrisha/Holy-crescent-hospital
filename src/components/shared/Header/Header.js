
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { hashLink } from 'react-router-hash-link'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        // logo



        <>

            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Holy Creasent Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">services</Nav.Link>
                        <Nav.Link as={Link} to="/about">About us</Nav.Link>
                        <Nav.Link as={Link} to="/doctors"> Our Doctors</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">LogOut</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>

                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>



    );
};

export default Header;