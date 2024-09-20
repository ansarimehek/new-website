import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo.jpg';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={Logo}
            width="110"
            height="90"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <b className="ms-2">Global Village</b>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Form className="d-flex mx-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-auto"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>

        <Nav className="ms-auto">
          <Nav.Link href="#link">Sign In</Nav.Link>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Products</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
