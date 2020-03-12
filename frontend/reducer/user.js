const initialState = {
  language: 'ko'
}

export const SET_USER_LANGUAGE = 'SET_USER_LANGUAGE';
export const GET_USER_LANGUAGE = 'GET_USER_LANGUAGE';
export const INIT_USER_LANGUAGE = 'INIT_USER_LANGUAGE';

export function userReducer(state = initialState, action) {

  switch (action.type) {
    case SET_USER_LANGUAGE:
      return {
        ...state,
        language: action.language,
      }
    case GET_USER_LANGUAGE:
      return state;
    case INIT_USER_LANGUAGE:
      return initialState;
    default:
      return state
  }

}
