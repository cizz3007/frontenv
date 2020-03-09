import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {errorReducer} from './error';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  errorReducer,
})

export default createRootReducer;


