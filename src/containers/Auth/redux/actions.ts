import * as types from './types';

export function login(payload?: string): types.ILoginRequest {
  return { type: 'AUTH:LOGIN_REQUEST', payload };
}

export function loginSuccess(payload: string): types.ILoginSuccess {
  return { type: 'AUTH:LOGIN_SUCCESS', payload };
}

export function loginError(error: Error): types.ILoginError {
  return { type: 'AUTH:LOGIN_ERROR', error };
}

export function logout(): types.ILogout {
  return { type: 'AUTH:LOGOUT' };
}