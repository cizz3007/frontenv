import React from 'react';
import {ConnectedRouter} from "connected-react-router";
import {Switch, Route, Redirect} from 'react-router';
import {history} from "../../store/store";
import Main from '@pages/main'
import HotelPage from '@pages/hotel'
import UserPage from '@pages/user'

class RouterWrapper extends React.PureComponent {
  render() {
    return (
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/hotel'} component={HotelPage}/>
            <Route exact path={'/user'} component={UserPage}/>
            <Redirect from="*" to="/404"/>
            <Redirect to={'/login'}/>
          </Switch>
        </ConnectedRouter>
    )
  }
}

export default RouterWrapper;
