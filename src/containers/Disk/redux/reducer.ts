import * as types from './types';

const initialState: types.IState = {
  folderName: '',
  folderPath: '/',
  resources: [],
};

const disk = (state = initialState, action: types.IActions) => {
  switch (action.type) {
    case 'DISK:GET-DISK-INFO-SUCCESS': {
      return {
        ...state,
        ...action.payload,
      };
    }

    case 'DISK:GET-RESOURCES-SUCCESS': {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default disk;
