import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import ItemsButton from './ItemsButton';

const Header = ({ itemCount, onModalToggle }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar  className="custom-navbar" variant="dark" expand="lg" >
        <Container>
          <Navbar.Brand href="#" style={{ textAlign: 'left' }}>Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarTogglerDemo03" />
          <Navbar.Collapse id="navbarTogglerDemo03">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex form-search">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2 search-bar"
              />
              <Button
                variant="danger"
                style={{ width: '50px', alignItems: 'center', padding: 0, height: '40px' }}
              >
                <i className="fa fa-search"></i>
              </Button>
            </Form>
            <ItemsButton itemCount={itemCount} onClick={onModalToggle} /> {/* Trigger modal on click */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
