import React, { PureComponent, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomePage from '../pages/Home';
import Header from '../components/Header';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        {this.props.isActivePreloader ? <div>Loading ...</div> : (
          <Router history={this.props.history}>
            <Fragment>
              <Header />

              <Switch>
                <Route exact path="/" component={HomePage} />
              </Switch>
            </Fragment>
          </Router>
        )}
      </Fragment>
    );
  }
}

App.propTypes = {
  isActivePreloader: PropTypes.bool,
};

export default connect(
  () => ({
    isActivePreloader: false,
  }),
  {},
)(App);
