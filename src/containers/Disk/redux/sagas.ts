import { takeLatest, put, call } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from './types';
import { IDependencies } from 'types';

function* getResourcesSaga({ api }: IDependencies, { payload = '/' }: types.IGetResourcesRequest) {
  try {
    const response = yield call(api.getResources, encodeURI(payload));
    yield put(actions.getResourcesSuccess(response));
  } catch (error) {
    debugger;
    yield put(actions.getResourcesError(error.message));
  }
}

function* resetStateSaga() {
  yield put(actions.resetDiskState());
}

function* userSaga(deps: IDependencies) {
  const getResourcesType: types.IGetResourcesRequest['type'] = 'DISK:GET_RESOURCES_REQUEST';
  yield takeLatest(getResourcesType, getResourcesSaga, deps);
  yield takeLatest('AUTH:LOGOUT', resetStateSaga, deps);
}

export default userSaga;
