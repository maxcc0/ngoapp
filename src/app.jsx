import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'; 
import { browserHistory } from 'react-router'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import { createHashHistory, useBasename } from 'history';
import { Router , useRouterHistory  } from 'react-router';
import "./assets/styles/app.less";
import NProgress from 'nProgress';
import Base from './components/core/Base';
import Dashboard from './components/core/Home';
import Login from './components/login/Login';
import DashboardLayout from './components/dashboard/DashboardLayout';
NProgress.configure({ showSpinner: false });

//  const history = useBasename(createHashHistory)({
//     queryKey: false
//  })
 // useRouterHistory creates a composable higher-order function
const history = useRouterHistory(createHashHistory)({ queryKey: false });

const rootRoute = {
  path: '/',
  component: Base,
  indexRoute: {component: Dashboard},
  childRoutes: [ 
    {
      component: Dashboard,
      indexRoute: {component: DashboardLayout},
      childRoutes: [
        require('./components/dashboard'),
        require('./components/pledge'),
        require('./components/collectionRoute')
        
      ]
    },
    {
      path: '/login',
      component:Login,
      childRoutes: [
      ]
    }
  ]
}

render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('react-app')
)