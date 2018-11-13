import Api from 'api/Api';
import { IState as IDiskState } from 'containers/Disk/redux/types';
import { IState as IAuthState } from 'containers/Auth/redux/types';

export interface IDependencies {
  api: Api;
}

export interface IReduxState {
  disk: IDiskState;
  auth: IAuthState;
}

export interface IActionState {
  isRequesting: boolean;
  error: string;
}
