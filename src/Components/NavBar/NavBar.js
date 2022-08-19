import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "./Navbar.scss";
import { Link } from "react-router-dom";
// import logo from "../../Assets/IADS logo horizontal.png";
import logo from "../../Assets/IADS Horizontal 1.svg";
import lock from "../../Assets/lock.svg";
import lock1 from "../../Assets/lock1.svg";
import LoginModal from "../LoginModal";

const NavBar = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  console.log(showLoginModal);
  return (
    <Navbar
      className={
        props.path == "/" || props.path == "/home"
          ? "navbar navbarWithOutBg"
          : "navbar navbarWithBg"
      }
      bg="none"
      expand="xl"
    >
      {showLoginModal && <LoginModal show={showLoginModal} />}
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
            <Nav.Link className="nav-item nav-item-White home" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item nav-item-White" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-item nav-item-White" href="/governance">
              Governance
            </Nav.Link>
            <Nav.Link className="nav-item nav-item-White" href="/meetings">
              Meetings
            </Nav.Link>
            <Nav.Link className="nav-item nav-item-White" href="/membership">
              Membership
            </Nav.Link>
            <NavDropdown
              className="nav-item nav-item-White"
              title="Committees"
              id="navbarScrollingDropdownWhite"
            >
              <NavDropdown.Item className="" href="/workforce">
                Workforce
              </NavDropdown.Item>
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
              <NavDropdown.Item href="/committees/voluntary">
                Voluntary
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Projects"
              className="nav-item-Blue"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/projects/zhermack">
                Zhermack
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/colgate">
                Colgate
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item> */}
            </NavDropdown>

            <Nav.Link className="nav-item nav-item-Blue" href="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
          <div className="auth d-flex">
            <div
              onClick={() => setShowLoginModal(!showLoginModal)}
              className="login-btn"
            >
              <img
                src={props.path == "/" || props.path == "/home" ? lock : lock1}
              />
              <p>Login</p>
            </div>
            <a href="/signup" className="signup-btn">
              Signup
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
