import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'connected-react-router';
import reducer from '../reducer/index';
import {persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

/*히스토리 생성*/
export const history = createBrowserHistory();

export const sagaMiddleware = createSagaMiddleware()
const isDev = process.env.NODE_ENV;

//리덕스 개발툴
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION?.();

const persistConfig = {
  key      : 'root',
  storage  : storage,
  whitelist: ['clientStatusReducer'], //user unique ID를 가지고 있는 리듀서를 저장한다.
};

const persistedReducer = persistReducer(persistConfig, reducer(history));

export default (preloadedState) => {
  const store = createStore(
      persistedReducer,
      preloadedState,
      compose(
          applyMiddleware(
              routerMiddleware(history),
              sagaMiddleware,
          ),
          isDev && reduxDevTools && window.navigator.userAgent.includes('Chrome') ? reduxDevTools : compose
      )
  );

  

  let persistor = persistStore(store);

  return {store, persistor}
}

