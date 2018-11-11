import { takeLatest, call, put } from 'redux-saga/effects';

import { IDependencies } from 'types';
import * as types from './types';
import * as actions from './actions';

function* loginSaga({ api }: IDependencies, { payload }: types.ILoginRequest) {
  try {
    const response: string = yield call(api.authorize, payload);
    yield put(actions.loginSuccess(response));
  } catch (error) {
    yield put(actions.loginError(error.message));
  }
}

function* logoutSaga({ api }: IDependencies) {
  yield call(api.unauthorize);
}

function* userSaga(deps: IDependencies) {
  const loginType: types.ILoginRequest['type'] = 'AUTH:LOGIN_REQUEST';
  const logoutType: types.ILogout['type'] = 'AUTH:LOGOUT';
  yield takeLatest(loginType, loginSaga, deps);
  yield takeLatest(logoutType, logoutSaga, deps);
}

export default userSaga;
