import * as React from 'react';
import { connect } from 'react-redux';
import * as H from 'history';
import { Nav, NavItem } from 'react-bootstrap';

import { IReduxState } from 'types';
import { actions } from './redux';
import config from 'api/config';

interface IProps {
  isLogged: boolean;
  history: H.History;
  login: typeof actions.login;
  logout: typeof actions.logout;
}

class Auth extends React.PureComponent<IProps> {
  public componentDidMount() {
    if (location.hash) {
      const token = /access_token=([^&]+)/.exec(location.hash);
      this.props.history.replace('/');
      if (token) {
        this.props.login(token[1]);
      }
    } else {
      this.props.login();
    }
  }

  public render() {
    const link = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${config.clientId}`;
    return (
      <Nav pullRight>
        { this.props.isLogged ? (
          <NavItem eventKey={2} href="#" onClick={this.props.logout}>
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

const mapStateToProps = (state: IReduxState) => ({
  isLogged: !!state.auth.token,
});

const mapDispatchToProps = {
  login: actions.login,
  logout: actions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
