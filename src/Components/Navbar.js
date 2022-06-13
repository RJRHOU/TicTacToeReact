import React from 'react'
//import { NavLink } from 'react-router-dom';
//import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import myLogo from './download.jpg';



export default function Header(props) {
  return (
    <div id='navbar' >
    <Navbar bg="primary" variant="dark"
        >
    <Container>
    <Navbar.Brand href="/home">
      <img
          
        src={myLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link to="/home" href="/home">Home</Nav.Link>
      <Nav.Link to="/game" href="/game">Game</Nav.Link>
      <Nav.Link to="/instructions" href="/instructions">Instructions</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        
    </div>
  )
}

