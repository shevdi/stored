import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import Api from 'api/Api';
import { sagas as authSaga, reducer as auth } from 'store/auth';
import { sagas as diskSaga, reducer as disk } from 'containers/Disk/redux';

const app = combineReducers({
  auth,
  disk,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(app, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const api = new Api();
sagaMiddleware.run(authSaga, { api });
sagaMiddleware.run(diskSaga, { api });

export default store;
