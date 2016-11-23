import React from 'react';
import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import IconButton from 'material-ui/IconButton';
import $ from "jQuery";
import AppBar from 'material-ui/AppBar';
import Features from './Features';
import Intro from './Intro';

import HamburgerMenu from 'material-ui/svg-icons/navigation/menu';
import SideMenu from '../core/Sidebar';
function renderBrand() {
    return <img src={require("../../assets/images/logo_ngo.png")} style={{verticalAlign: 'super', marginLeft: '10px'}} className="brand-logo" /> 
}

const AppPrimaryHeader = () => (
  <AppBar className='app-header'

    iconElementLeft={null}
    title={renderBrand()}
  />
);

var LoginPage = React.createClass({
  mixins: [History],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  handleLogin: function (e) {
    e.preventDefault();
    this.context.router.pushState(null, '/home/collect');
    // this.transitionTo('dashboard');

    return false;
  },
  handlePledge: function (e) {
    e.preventDefault();
    this.context.router.pushState(null, '/home/pledge');
    // this.transitionTo('dashboard');

    return false;
  },
  render: function () {
    return (
      <MuiThemeProvider >
        <div>
          <div className="login-page intro-header">
            <div className='' >
            <div className='login-header row'>
              <div style={{width: '200px', padding: '.25rem', paddingLeft: '1rem'}}>
              <SideMenu/>   {renderBrand()}
              </div>
             </div>
             <Intro handleLogin={this.handleLogin}/>
             </div>
             
             <Features handlePledge={this.handlePledge} handleLogin={this.handleLogin}/>
              
             <div className='page-footer text-center font-light'>
              Copyright
             </div>
          </div>
         
        </div>
      </MuiThemeProvider>
    );
  }



});

export default LoginPage;