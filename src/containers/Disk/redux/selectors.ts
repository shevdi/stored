import { IReduxState } from 'types';

export const getFolders = (state: IReduxState) => state.disk.resources.filter((item) => item.type === 'dir');

export const getFiles = (state: IReduxState) => state.disk.resources.filter((item) => item.type === 'file');
