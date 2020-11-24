import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

// import { Switch, Route, Link } from "react-router-dom";
// import Landing from "./Landing";
function Navigation() {
  const [navbar, setNavbar] = useState(false);
  // const changeBackground = () => {
  //   if (window.scrollY > 400) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  function handleClick() {
    setNavbar(!navbar);
  }
  // window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <Navbar
        className={navbar ? "navbar active" : "navbar "}
        collapseOnSelect
        // bg="light"
        variant="light"
        fixed="top"
        expand="lg"
      >
        <Navbar.Brand
          as={Link}
          className="pointer"
          to="landing"
          smooth={true}
          duration={1000}
        >
          <HomeIcon />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleClick}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="about" smooth={true} duration={1000}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="mySkills" smooth={true} duration={1500}>
              Skills
            </Nav.Link>
            <Nav.Link as={LinkRoute} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={2000}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
