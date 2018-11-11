import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import * as H from 'history';

import Auth from 'containers/Auth/Auth';

interface IProps {
  history: H.History;
}

const Header = (props: IProps) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Stored</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Auth history={props.history} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
