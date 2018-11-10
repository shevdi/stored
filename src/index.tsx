import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
