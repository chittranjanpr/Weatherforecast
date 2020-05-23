import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSearch } from "@fortawesome/free-solid-svg-icons";

import "./header.css";

const Header = (props) => {
  return (
    <div className="headerConatiner">
      <Navbar bg="dark" variant="dark" className="headerHead">
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faCloud} className="logoIcon" />
          <span className="logoIcon"> Weather Forecast </span> 
        </Navbar.Brand>
        <Nav className="searchIcon" onClick={()=>props.handleToggle()}>
          <FontAwesomeIcon className="logoIcon" icon={ faSearch } color="white" />
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
