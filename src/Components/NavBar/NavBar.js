import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "./Navbar.scss";
import { Link } from "react-router-dom";
// import logo from "../../Assets/IADS logo horizontal.png";
import logo from "../../Assets/IADS Horizontal 1.svg";

const NavBar = () => {
  return (
    <div className="navv container-fluid">
      <Navbar className="navbar" bg="none" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img className="iads-logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="nav-items me-auto my-2 my-lg-0"
              style={{ maxHeight: "1000px" }}
              navbarScroll
            >
              <Nav.Link className="nav-item home" href="/home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="nav-item" href="/governance">
                Governance
              </Nav.Link>
              <Nav.Link className="nav-item meetings" href="/meetings">
                Meetings
              </Nav.Link>
              <Nav.Link className="nav-item mambership" href="/membership">
                Membership
              </Nav.Link>
              <NavDropdown
                className="committees"
                title="Committees"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item className="" href="/workforce">
                  Workforce
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="" href="/committees/internal">
                  Internal Affairs
                </NavDropdown.Item>
                <NavDropdown.Item href="/committees/editorial">
                  {/* <Link to="/editorial"></Link> */}
                  Editorial Board
                </NavDropdown.Item>
                <NavDropdown.Item href="/committees/exchange">
                  Exchange Board
                </NavDropdown.Item>

                <NavDropdown.Item href="/committees/prophylaxis">
                  Prophylaxis
                </NavDropdown.Item>
                <NavDropdown.Item href="/committees/SCORE">
                  SCORE
                </NavDropdown.Item>
                <NavDropdown.Item href="/committees/training">
                  Training
                </NavDropdown.Item>
                <NavDropdown.Item href="/voluntary">Voluntary</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/projects/zhermack">
                  Zhermack
                </NavDropdown.Item>
                <NavDropdown.Item href="/projects/colgate">
                  Colgate
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item> */}
              </NavDropdown>

              <Nav.Link className="nav-item" href="/contact-us">
                Contact Us
              </Nav.Link>
            </Nav>
            <div className="auth d-flex">
              <Button className="login-btn" style={{ marginRight: "10px" }}>
                Login
              </Button>
              <Button className="signup-btn">Signup</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
