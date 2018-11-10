import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import HomePage from '../pages/Home';
import Header from '../components/Header';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

interface IProps {
  isActivePreloader: boolean;
}

class App extends React.PureComponent<IProps> {
  render() {
    return (
      <React.Fragment>
        {this.props.isActivePreloader ? <div>Loading ...</div> : (
          <Router history={history}>
            <React.Fragment>
              <Header />

              <Switch>
                <Route exact path="/" component={HomePage} />
              </Switch>
            </React.Fragment>
          </Router>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  () => ({
    isActivePreloader: false,
  }),
  {},
)(App);
