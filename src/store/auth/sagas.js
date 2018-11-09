import { takeLatest } from 'redux-saga/effects';
import * as AUTH from './actionTypes';

function* loginSaga() {
  try {
    yield 0;
  } catch (e) {
    yield -1;
  }
}

function* userSaga() {
  yield takeLatest(AUTH.LOGIN, loginSaga);
}

export default userSaga;
