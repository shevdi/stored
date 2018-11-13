import { combineReducers } from 'redux';

import { IActionState } from 'types';
import * as types from './types';

const initialActionState: IActionState = {
  isRequesting: false,
  error: '',
};

const initialState: types.IDataState = {
  resources: [],
};

const initialActionsState: types.IActionsState = {
  getResources: initialActionState,
};

const dataReducer = (state = initialState, action: types.IActions) => {
  switch (action.type) {
    case 'DISK:GET_RESOURCES_SUCCESS': {
      return {
        ...state,
        resources: action.payload,
      };
    }

    case 'DISK:RESET_STATE': {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

const actionsStateReducer = (state = initialActionsState, action: types.IActions) => {
  switch (action.type) {
    case 'DISK:GET_RESOURCES_REQUEST': {
      return {
        ...state,
        getResources: {
          isRequesting: true,
          error: '',
        },
      };
    }

    case 'DISK:GET_RESOURCES_SUCCESS': {
      return {
        ...state,
        getResources: initialActionState,
      };
    }

    case 'DISK:GET_RESOURCES_ERROR': {
      return {
        ...state,
        getResources: {
          isRequesting: false,
          error: action.error,
        },
      };
    }

    case 'DISK:RESET_STATE': {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  data: dataReducer,
  actions: actionsStateReducer,
});
