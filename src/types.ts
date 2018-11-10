import Api from 'api/Api';
import { IState as IDiskState } from 'containers/Disk/redux/types';

export interface IDependencies {
  api: Api;
}

export interface IReduxState {
  disk: IDiskState;
}
