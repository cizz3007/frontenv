import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from '../store/store'
import Head from '../components/head'
import RouterWrapper from '../components/router'
import ErrorBoundary from '../components/error/errorReport'
import ResetStyle from '../global/resetStyle'
import PageRenderer from '@pages/render'

class IndexPage extends React.PureComponent {

  render() {
    const store = configureStore().store;
    const persistor = configureStore().persistor;

    return (
        <ErrorBoundary>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <PageRenderer>
                <ResetStyle/>
                <Head/>
                <RouterWrapper/>
              </PageRenderer>
            </PersistGate>
          </Provider>
        </ErrorBoundary>
    )
  }
}

export default IndexPage
