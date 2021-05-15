import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';

export const NavbarMain = () => {

  return(
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">James Armbrust</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jamesarmbrust"><GrLinkedin/></Nav.Link>
            <Nav.Link href="https://github.com/jarmbrust"><GoMarkGithub/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
