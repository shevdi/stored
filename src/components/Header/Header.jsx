import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import './Header.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        Header
      </div>
    );
  }
}

Header.propTypes = {
};

export default withRouter(connect(
  () => ({}),
  {},
)(Header));
