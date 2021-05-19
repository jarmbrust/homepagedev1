import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Image from 'react-bootstrap/Image'
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import avatar from './../images/jamesavatar4.png';

export const NavbarMain = () => {

  const renderTooltip = props => (
    <Tooltip id="tooltip-right" {...props}>
      A rather inaccurate avatar of me...
    </Tooltip>
  );

  return(
    <>
      <div className="avatar-frame">
        <OverlayTrigger
          key="right"
          placement="right"
          overlay={renderTooltip}
          className="avatar-frame"
        >
          <Image className="avatar-circle" src={avatar} alt="avatar" roundedCircle fluid />
        </OverlayTrigger>
      </div>
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
