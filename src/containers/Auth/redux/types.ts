export interface IState {
  token: string;
}

export interface ILoginRequest {
  type: 'AUTH:LOGIN_REQUEST';
  payload?: string;
}

export interface ILoginSuccess {
  type: 'AUTH:LOGIN_SUCCESS';
  payload?: string;
}

export interface ILoginError {
  type: 'AUTH:LOGIN_ERROR';
  error: Error;
}

export interface ILogout {
  type: 'AUTH:LOGOUT';
}

export type actionTypes = ILoginRequest | ILoginSuccess | ILoginError | ILogout;
