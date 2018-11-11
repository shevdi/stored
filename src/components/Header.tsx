import * as React from 'react';
import { Navbar } from 'react-bootstrap';

import Auth from 'containers/Auth/Auth';


const Header = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Stored</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Auth />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
