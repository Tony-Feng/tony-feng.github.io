import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { lazy } from '@loadable/component';
import Loading from './pages/loading';

const Home = lazy(() => import('./containers/home'));
const Error = lazy(() => import('./pages/error'));

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={ <Loading /> }>
          <Switch>
            <Route path="/" exact component={ () => <Home /> } />
            <Route component={ Error } />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  };
}
