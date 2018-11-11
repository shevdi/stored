import * as React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';

import { actions } from './redux';
import config from 'api/config';

interface IProps {
  isLogged: boolean;
  login: typeof actions.login;
}

class Auth extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.props.login();
  }

  public render() {
    const link = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${config.clientId}`;
    return (
      <Nav pullRight>
        { this.props.isLogged ? (
          <NavItem eventKey={2} href="#">
            Logout
          </NavItem>
        ) : (
          <NavItem eventKey={1} href={link}>
            Login
          </NavItem>
        )}
      </Nav>
    );
  }
}

const mapStateToProps = () => ({
  isLogged: false,
});

const mapDispatchToProps = {
  login: actions.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
