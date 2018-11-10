
export interface ILoginRequest {
  type: 'DISK:LOGIN-REQUEST';
}

export interface ILoginSuccess {
  type: 'DISK:LOGIN-SUCCESS';
}

export interface ILoginError {
  type: 'DISK:LOGIN-ERROR';
}

export interface ILogoutRequest {
  type: 'DISK:LOGOUT-REQUEST';
}

export interface ILogoutSuccess {
  type: 'DISK:LOGOUT-SUCCESS';
}

export interface ILogoutError {
  type: 'DISK:LOGOUT-ERROR';
}
