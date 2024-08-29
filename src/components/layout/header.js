import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo.jpg'

const header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={Logo}
          width="150"
          height="100"
          className="d-inline-block align-top"
          alt="React Bootstrap logo" />

        <Navbar.Brand href="#home">Michael Kores </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-auto"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
          <Nav className=" me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default header