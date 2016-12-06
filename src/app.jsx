import '../lib/geoPosition';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory } from 'react-router'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import { createHashHistory, useBasename } from 'history';
import { Router, useRouterHistory, Redirect  } from 'react-router';
import "./assets/styles/app.less";
import NProgress from 'nProgress';

import Base from './components/core/Base';
import Home from './components/core/Home';
import Dashboard from './components/dashboard/DashboardLayout';
import Login from './components/login/Login';
import Pledge from './components/pledge/Pledge'
import VoluntaryPickup from './components/voluntaryPickup/PickupPageLayout'
import auth from './utils/auth';


NProgress.configure({ showSpinner: false });

function redirectHome(nextState, replace) {
   replace('/');
}

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
   redirectHome(nextState, replace)
  }
}

//  const history = useBasename(createHashHistory)({
//     queryKey: false
//  })
// useRouterHistory creates a composable higher-order function
const history = useRouterHistory(createHashHistory)({ queryKey: false });

const rootRoute = {
  path: '/',
  component: Base,
  indexRoute: { component: Login },
  childRoutes: [
    {
      component: Home,
      childRoutes: [
        {
          path: 'pledge',
          component: Pledge
        },
         {
          path: 'voluntaryPickup',
          component: VoluntaryPickup,
          onEnter: requireAuth
        },
         {
          path: 'dashboard',
          component: Dashboard,
          onEnter: requireAuth
        }
      ]
    },
    {
      path: 'login',
      onEnter: redirectHome
    }
  ]
}

render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('react-app')
)