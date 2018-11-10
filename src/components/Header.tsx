import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

interface IProps {
  isLogged: boolean;
}

const Header = ({ isLogged }: IProps) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          { isLogged ? (
            <NavItem eventKey={2} href="#">
              Logout
            </NavItem>
          ) : (
            <NavItem eventKey={1} href="#">
              Login
            </NavItem>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
