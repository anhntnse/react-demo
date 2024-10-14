import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, Button, Form} from "react-bootstrap";
import ItemsButton from "./ItemsButton";
import LoginModal from "./LoginModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "./AuthContext";

const Header = ({ itemCount, onModalToggle }) => {
  const [showLogin, setShowLogin] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false); // Trạng thái đăng nhập

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);


  return (
    <>
      <Navbar variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#">Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarToggler" />
          <Navbar.Collapse id="navbarToggler">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex form-search">
              <Form.Control
                type="text"
                placeholder="Search"
                className="ms-auto search-bar"
              />
              <Button
                variant="danger"
                style={{ width: '50px', alignItems: 'center', padding: 0, height: '40px' }}
              >
                <i className="fa fa-search"></i>
              </Button>
            </Form>
            <ItemsButton itemCount={itemCount} onClick={onModalToggle} />
            {loggedIn ? (
                <Button className="ms-1 me-2" variant="dark">
                  <i class="fa fa-user" aria-hidden="true">  Profile</i>
                </Button>
              ) : (
                <Button className="ms-1 me-2" variant="dark" onClick={handleLoginShow}>
                  <FontAwesomeIcon/> <i class="fa fa-sign-in" aria-hidden="true"> Login</i>
                  
                </Button>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        show={showLogin}
        handleClose={handleLoginClose}
        setLoggedIn={setLoggedIn} 
      /> 

    </>
  );
};

export default Header;
