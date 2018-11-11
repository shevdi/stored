import { IState, actionTypes } from './types';

const initialState: IState = {
  token: '',
};

const auth = (state: IState = initialState, action: actionTypes) => {
  switch (action.type) {
    case 'AUTH:LOGIN_SUCCESS': {
      return {
        ...state,
        token: action.payload || '',
      };
    }

    case 'AUTH:LOGOUT': {
      return {
        ...state,
        token: '',
      };
    }

    default: {
      return state;
    }
  }
};

export default auth;
