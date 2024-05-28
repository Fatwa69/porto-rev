import { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";
import { navLinks } from "../data/dataArray";
import React from "react";

const NavbarComponent = () => {
  const [changeColor, setChangColor] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangColor(true);
    } else {
      setChangColor(false);
    }
  };

  const toggle = () => {
    setToggleButton(!toggleButton);
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar
        expand="lg"
        className={`${toggleButton ? "color active" : ""} ${changeColor ? "color active" : ""}`}
      >
        <Container>
          <NavbarBrand className="navbar-logo" href="/">
            Mama Moon
          </NavbarBrand>
          <NavbarToggle
            onClick={() => toggle()}
            aria-controls="basic-navbar-nav"
          />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="navbar-nav">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink href={link.path}>{link.text}</NavLink>
                  </div>
                );
              })}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
