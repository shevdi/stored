export interface IFile {
  [key: string]: any;
}

export interface IResource {
  name: string;
  path: string;
  size: number;
  file: string;
  resource_id: string;
}

export interface IFile extends IResource {
  type: 'file';
}

export interface IDir extends IResource {
  type: 'dir';
}

export type Resource = File | IDir;

export interface IState {
  resources: Array<IFile | IDir>;
}

export interface IGetDiskInfoRequest {
  type: 'DISK:GET_DISK_INFO_REQUEST';
}

export interface IGetDiskInfoSuccess {
  type: 'DISK:GET_DISK_INFO_SUCCESS';
  payload: any;
}

export interface IGetDiskInfoError {
  type: 'DISK:GET_DISK_INFO_ERROR';
  error: string;
}

export interface IGetResourcesRequest {
  type: 'DISK:GET_RESOURCES_REQUEST';
  payload?: string;
}

export interface IGetResourcesSuccess {
  type: 'DISK:GET_RESOURCES_SUCCESS';
  payload: any;
}

export interface IGetResourcesError {
  type: 'DISK:GET_RESOURCES_ERROR';
  error: string;
}

export interface IResetDiskState {
  type: 'DISK:RESET_STATE';
}

export type IActions = IGetDiskInfoRequest | IGetDiskInfoSuccess | IGetDiskInfoError
  | IGetResourcesRequest | IGetResourcesSuccess | IGetResourcesError | IResetDiskState;
