export const OPEN_MODAL = 'OPEN_MODAL';
export const INIT_MODAL = 'INIT_MODAL';

const initialState = {
  open       : false,
  title      : null,
  description: null,
  onConfirm  : () => {
    alert('noting');
  }
}

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: true,
        ...action.payload
      }
    case INIT_MODAL:
      return initialState
    default:
      return state;
  }
}
