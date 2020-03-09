export const SET_ERROR = 'SET_ERROR';
export const INIT_ERROR = 'INIT_ERROR';

const initialState = {};

export function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        [action.error]: action.payload
      }
    case INIT_ERROR:
      return initialState;

    default :
      return state;
  }

}
