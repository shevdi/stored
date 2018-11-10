import * as types from './types';

export function getResources(path?: string): types.IGetResourcesRequest {
  return { type: 'DISK:GET-RESOURCES-REQUEST', payload: path };
}

export function getResourcesSuccess(payload: any): types.IGetResourcesSuccess {
  return { type: 'DISK:GET-RESOURCES-SUCCESS', payload };
}

export function getResourcesError(error: string): types.IGetResourcesError {
  return { type: 'DISK:GET-RESOURCES_ERROR', error };
}
