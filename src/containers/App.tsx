import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import HomePage from '../pages/Home';
import config from 'config';

const history = createBrowserHistory();

class App extends React.PureComponent {
  public render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={config.appPath} component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
