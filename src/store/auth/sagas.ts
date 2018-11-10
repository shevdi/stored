import { takeLatest } from 'redux-saga/effects';
import * as types from './types';

function* loginSaga() {
  try {
    yield 0;
  } catch (e) {
    yield -1;
  }
}

function* userSaga() {
  const loginType: types.ILoginRequest['type'] = 'DISK:LOGIN-REQUEST';
  yield takeLatest(loginType, loginSaga);
}

export default userSaga;
