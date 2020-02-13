import React, { useState } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from "reactstrap";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" className="navbar-dark navbar-expand-sm" expand="lg" fluid="true" >

        <img className="header-logo" src={logo} alt="Learn React" style={{ maxWidth: "80px" }} />

        <NavbarBrand href="/">reactstrap</NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
			<Nav className="mr-auto" navbar>
				<Link to="/" className="nav-link"> Home </Link>
				<Link to="/about" className="nav-link"> About </Link>
			</Nav>

			<Nav className="ml-auto" navbar>
				<Link to="/" className="nav-link"> Signup </Link>
				<Link to="/about" className="nav-link"> Login </Link>
			</Nav>

        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
