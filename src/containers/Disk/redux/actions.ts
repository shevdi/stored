import * as types from './types';

export function getResources(): types.IGetResourcesRequest {
  return { type: 'DISK:GET-RESOURCES-REQUEST' };
}

export function getResourcesSuccess(payload: any): types.IGetResourcesSuccess {
  return { type: 'DISK:GET-RESOURCES-SUCCESS', payload };
}

export function getResourcesError(error: string): types.IGetResourcesError {
  return { type: 'DISK:GET-RESOURCES_ERROR', error };
}
