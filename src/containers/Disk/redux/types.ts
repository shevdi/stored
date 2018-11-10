export interface IFile {
  [key: string]: any;
}

export interface IResource {
  name: string;
  path: string;
}

export interface IFile extends IResource {
  type: 'file';
}

export interface IDir extends IResource {
  type: 'dir';
}

export type Resource = Array<IFile | IDir>;

export interface IState {
  resources: Resource[];
}

export interface IGetDiskInfoRequest {
  type: 'DISK:GET-DISK-INFO-REQUEST';
}

export interface IGetDiskInfoSuccess {
  type: 'DISK:GET-DISK-INFO-SUCCESS';
  payload: any;
}

export interface IGetDiskInfoError {
  type: 'DISK:GET-DISK-INFO_ERROR';
  error: string;
}

export interface IGetResourcesRequest {
  type: 'DISK:GET-RESOURCES-REQUEST';
}

export interface IGetResourcesSuccess {
  type: 'DISK:GET-RESOURCES-SUCCESS';
  payload: any;
}

export interface IGetResourcesError {
  type: 'DISK:GET-RESOURCES_ERROR';
  error: string;
}

export type IActions = IGetDiskInfoRequest | IGetDiskInfoSuccess | IGetDiskInfoError
  | IGetResourcesRequest | IGetResourcesSuccess | IGetResourcesError;
