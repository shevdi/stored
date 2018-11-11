
export interface ILoginRequest {
  type: 'AUTH:LOGIN-REQUEST';
}

export interface ILoginSuccess {
  type: 'AUTH:LOGIN-SUCCESS';
  payload: string;
}

export interface ILoginError {
  type: 'AUTH:LOGIN-ERROR';
  error: Error;
}

export interface ILogoutRequest {
  type: 'AUTH:LOGOUT-REQUEST';
}

export interface ILogoutSuccess {
  type: 'AUTH:LOGOUT-SUCCESS';
}

export interface ILogoutError {
  type: 'AUTH:LOGOUT-ERROR';
}
