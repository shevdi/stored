import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';

const history = createBrowserHistory();

const Root = () => (
  <Provider store={store}>
    <App history={history} />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
