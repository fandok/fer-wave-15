import { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Navbar as ReactstrapNavbar,
} from "reactstrap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ReactstrapNavbar color="dark" dark expand="lg">
      <NavbarBrand href="/">Binar Academy</NavbarBrand>
      <NavbarToggler onClick={toggleCollapse} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="px-2">
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem className="px-2">
            <Link to="/about">About</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  );
};
export default Navbar;
