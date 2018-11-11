import * as types from './types';

export function getResources(path?: string): types.IGetResourcesRequest {
  return { type: 'DISK:GET_RESOURCES_REQUEST', payload: path };
}

export function getResourcesSuccess(payload: any): types.IGetResourcesSuccess {
  return { type: 'DISK:GET_RESOURCES_SUCCESS', payload };
}

export function getResourcesError(error: string): types.IGetResourcesError {
  return { type: 'DISK:GET_RESOURCES_ERROR', error };
}

export function resetDiskState(): types.IResetDiskState {
  return { type: 'DISK:RESET_STATE' };
}
