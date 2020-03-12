import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {errorReducer} from './error';
import {modalReducer} from './modal';
import {userReducer} from './user';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  errorReducer,
  modalReducer,
  userReducer,

})

export default createRootReducer;


