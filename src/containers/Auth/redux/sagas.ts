import { takeLatest, call, put } from 'redux-saga/effects';

import { IDependencies } from 'types';
import * as types from './types';
import * as actions from './actions';

function* loginSaga({ api }: IDependencies) {
  try {
    const response = yield call(api.authorize, '6027283');
    yield put(actions.loginSuccess(response));
  } catch (error) {
    yield put(actions.loginError(error.message))
  }
}

function* userSaga(deps: IDependencies) {
  const loginType: types.ILoginRequest['type'] = 'AUTH:LOGIN-REQUEST';
  yield takeLatest(loginType, loginSaga, deps);
}

export default userSaga;
