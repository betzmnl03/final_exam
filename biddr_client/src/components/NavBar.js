import React from "react";
import {NavLink} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'


const NavBar =(props)=>{
    function handleSignOut(){
        props.destroySession()
    }

    return (
        <nav>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Biddr</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/auctions">Auctions</Nav.Link>
                    {
                        props.currentUser? 
                        (
                        <>
                            <p className="text-white">{`${props.currentUser.first_name} ${props.currentUser.last_name}`}</p> 
                            |
                            <button onClick={handleSignOut}>Sign Out</button>
                        </>
                        )
                        :
                        <>
                        <Nav.Link href='/sign_in'>Sign In</Nav.Link>
                        |
                        <Nav.Link href='/sign_up'>Sign Up</Nav.Link>
                        </>
                }
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </nav>
    )
}

export default NavBar