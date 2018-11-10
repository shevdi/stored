import { takeLatest, put, call } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from './types';
import { IDependencies } from 'types';

function* getDiskInfoSaga() {
  try {
    yield 0;
  } catch (e) {
    yield -1;
  }
}

function* getResourcesSaga({ api }: IDependencies) {
  try {
    const response = yield call(api.getResources, encodeURI('/'));
    yield put(actions.getResourcesSuccess(response));
  } catch (error) {
    yield put(actions.getResourcesError(error.message));
  }
}

function* userSaga(deps: IDependencies) {
  const getDiskInfoType: types.IGetDiskInfoRequest['type'] = 'DISK:GET-DISK-INFO-REQUEST';
  const getResourcesType: types.IGetResourcesRequest['type'] = 'DISK:GET-RESOURCES-REQUEST';
  yield takeLatest(getDiskInfoType, getDiskInfoSaga);
  yield takeLatest(getResourcesType, getResourcesSaga, deps);
}

export default userSaga;
