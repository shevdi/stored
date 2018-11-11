import * as types from './types';

export function login(): types.ILoginRequest {
  return { type: 'AUTH:LOGIN-REQUEST' };
}

export function loginSuccess(payload: string): types.ILoginSuccess {
  return { type: 'AUTH:LOGIN-SUCCESS', payload };
}

export function loginError(error: Error): types.ILoginError {
  return { type: 'AUTH:LOGIN-ERROR', error };
}
