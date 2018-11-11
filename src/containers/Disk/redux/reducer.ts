import * as types from './types';

const initialState: types.IState = {
  resources: [],
};

const disk = (state = initialState, action: types.IActions) => {
  switch (action.type) {
    case 'DISK:GET_DISK_INFO_SUCCESS': {
      return {
        ...state,
      };
    }

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

export default disk;
