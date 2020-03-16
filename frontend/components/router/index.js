import React from 'react';
import {ConnectedRouter} from "connected-react-router";
import {Switch, Route, Redirect} from 'react-router';
import {history} from "../../store/store";
import Main from '@pages/main'
import UserPage from '@pages/user'
import DetailPage from '@pages/booking/detail'
import Loadable from 'react-loadable'
import DefaultLoading from '@atoms/loading/default'
import ErrorPage from '@pages/error/404'

const Hotel = Loadable({
  loader: () => import('@pages/hotel'),
  loading: DefaultLoading,
});

const User = Loadable({
  loader: () => import('@pages/user'),
  loading: DefaultLoading,
});

const Detail = Loadable({
  loader:()=> import('@pages/booking/detail'),
  loading:DefaultLoading,
})

class RouterWrapper extends React.PureComponent {
  render() {
    return (
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/hotel'} component={Hotel}/>
            <Route exact path={'/user'} component={User}></Route>
            <Route exact path={'/detail'} component={Detail}/>
            <Route path={'/404'} component={ErrorPage}/>
            <Redirect from="*" to="/404" />
          </Switch>
        </ConnectedRouter>
    )
  }
}

export default RouterWrapper;
