import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    };
  });

  const onUpdateActiveLink = ( value ) => {
    setActiveLink(value);
  }

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={scrolled ? "navbarContainer" : ""}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link
              href="#new" className={activeLink === "new" ? "active-navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("new")}
            >
              NEW
            </Nav.Link>
            <NavDropdown href="#skincare" title="SKINCARE"   className={activeLink === "new" ? "active-navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skincare")}
            >
              <div className="dropdown-div">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>          
              </div>

            </NavDropdown>
            <Nav.Link href="#home">HAIR & BODY</Nav.Link>
            <Nav.Link href="#home">MAKEUP</Nav.Link>
            <Nav.Link href="#home">PROMO</Nav.Link>

            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
