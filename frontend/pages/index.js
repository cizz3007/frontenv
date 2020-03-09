import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from '../store/store'
import Head from '../components/head'
import RouterWrapper from '../components/router'
import ErrorBoundary from '../components/error/errorReport'
import ResetStyle from '../global/resetStyle'

/*상태 변화시 마다 log 출력*/
if (process.env.MODE === 'development') {
  configureStore().store.subscribe(function (e) {
    console.log('state trace :', store.getState());
  });
}

class IndexPage extends React.PureComponent {

  render() {
    const store = configureStore().store;
    const persistor = configureStore().persistor;

    return (
        <ErrorBoundary>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ResetStyle/>
              <Head/>
              <RouterWrapper/>
            </PersistGate>
          </Provider>
        </ErrorBoundary>
    )
  }
}

export default IndexPage
