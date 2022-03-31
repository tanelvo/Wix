import React from 'react'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <>
            <Navbar  expand="lg" className="navbar" fixed="top" >
            <Link to="/">
                <img src='../wixlogo.jpg' alt="Wix Logo" id='img-logo'/>
            </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown title="Creation" id="basic-nav-dropdown" className="navbar-username-el">
                    <NavDropdown.Item>Seaded</NavDropdown.Item>
                    <NavDropdown.Item>Logi välja</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Business" id="basic-nav-dropdown" className="navbar-username-el">
                    <NavDropdown.Item>Seaded</NavDropdown.Item>
                    <NavDropdown.Item>Logi välja</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Growth" id="basic-nav-dropdown" className="navbar-username-el">
                    <NavDropdown.Item>Seaded</NavDropdown.Item>
                    <NavDropdown.Item>Logi välja</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="basic-nav-dropdown" className="navbar-username-el">
                    <NavDropdown.Item>Seaded</NavDropdown.Item>
                    <NavDropdown.Item>Logi välja</NavDropdown.Item>
                </NavDropdown>
                <Nav className="m-auto">
                    <Link id="navbar-link-el" to="/">Enterprise</Link> 
                    <Link id="navbar-link-el" to="/">Pricing</Link> 
                    <Link id="navbar-link-el" to="/">Support</Link> 
                </Nav>
                <NavDropdown title="Sign in" id="basic-nav-dropdown" className="navbar-username-el">
                    <NavDropdown.Item>Seaded</NavDropdown.Item>
                    <NavDropdown.Item>Logi välja</NavDropdown.Item>
                </NavDropdown>
                </Navbar.Collapse>
                <Button variant="custom">Sign In</Button>
            </Navbar>
        </>
    )
}
export default NavigationBar;
