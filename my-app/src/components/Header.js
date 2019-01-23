import React from "react";
import {Navbar} from "react-bootstrap";

const Header = (props) =>{

    return (
      <Navbar style={{marginBottom:0}} fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/">{props.name}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullRight>{props.desc}</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default Header;