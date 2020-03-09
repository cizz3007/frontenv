import React from 'react';
import {ConnectedRouter} from "connected-react-router";
import {Switch, Route, Redirect} from 'react-router';
import {history} from "../../store/store";
import Main from '../../pages/main'
import SignInRoute from './sign/signIn'
import ErrorBoundary from '../error/errorReport'

class RouterWrapper extends React.PureComponent {
  render() {
    return (
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Redirect from="*" to="/404"/>
            <Redirect to={'/login'}/>
          </Switch>
        </ConnectedRouter>
    )
  }
}

export default RouterWrapper;
