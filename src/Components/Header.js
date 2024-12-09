import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Style.css";
import imge from "./Asset/logo.png";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bar text-white">
        <Container fluid>
            <img className='logo' src={imge}/>
          {/* <Navbar.Brand href="#">  </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
              <Nav.Link href="#action2" className="text-white">Movies</Nav.Link>
              <NavDropdown title={<span className="dropdown-title">Browse By Language</span>} id="navbarScrollingDropdown">
  <NavDropdown.Item href="#action3" className="bg-dark text-white">Tamil</NavDropdown.Item>
  <NavDropdown.Item href="#action4" className="bg-dark text-white">English</NavDropdown.Item>
  <NavDropdown.Item href="#action4" className="bg-dark text-white">Telugu</NavDropdown.Item>
  <NavDropdown.Item href="#action4" className="bg-dark text-white">Hindi</NavDropdown.Item>
  {/* <NavDropdown.Divider /> */}
  <NavDropdown.Item href="#action5" className="bg-dark text-white">More Languages &gt;&gt; </NavDropdown.Item>
</NavDropdown>
              <Nav.Link href="#" disabled className="text-white">
                My Favourites
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
