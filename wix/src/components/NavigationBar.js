import React from 'react'
import { Button, Image, Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import logo from '../images/wix.png';

function NavigationBar() {
    return (
        <>
            <Navbar  expand="lg" className="navbar" fixed="top" >
                <Container className='navbar-container'>
                    <Link to="/">
                        <Image src={logo} className='img-logo'/>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown title="Creation " id="basic-nav-dropdown" className="navbar-username-el">
                        <NavDropdown.Item>Seaded</NavDropdown.Item>
                        <NavDropdown.Item>Logi välja</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Business " id="basic-nav-dropdown" className="navbar-username-el">
                        <NavDropdown.Item>Seaded</NavDropdown.Item>
                        <NavDropdown.Item>Logi välja</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Growth " id="basic-nav-dropdown" className="navbar-username-el">
                        <NavDropdown.Item>Seaded</NavDropdown.Item>
                        <NavDropdown.Item>Logi välja</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Resources " id="basic-nav-dropdown" className="navbar-username-el">
                        <NavDropdown.Item>Seaded</NavDropdown.Item>
                        <NavDropdown.Item>Logi välja</NavDropdown.Item>
                    </NavDropdown>
                    <Nav className="m-auto">
                        <Link id="navbar-link-el" to="/">Enterprise</Link> 
                        <Link id="navbar-link-el" to="/">Pricing</Link> 
                        <Link id="navbar-link-el" to="/">Support</Link> 
                    </Nav>
                    </Navbar.Collapse>
                </Container>    
                <Button variant="custom">Sign In</Button>
                
            </Navbar>
        </>
    )
}
export default NavigationBar;
