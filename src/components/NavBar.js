import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


const Header =()=>{
    return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Container>
                <Navbar.Brand link to='/home'>CS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Link to ='/'> Home</Link>
                    <Link to ='/About'>About</Link>
                    <Link to='/Projects'>Projects</Link>
                    <Link to='/Contact'>Contact</Link>
                  </Nav>
                  <Nav>
                    <Link to='/Resume'>RESUME</Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
        
 

export default Header