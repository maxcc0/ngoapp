import React from "react";
import Router, { Link, RouteHandler } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jQuery";
import classNames from "classnames";
import PrimaryHeader from './PrimaryHeader';

function renderBrandForFooter() {
    return <img src={require("../../assets/images/logo_ngo.png")} style={{marginLeft: '10px'}} className="brand-logo" /> 
}
import webapi from '../../actions/api';

function _logout(cb) {

}
var HomePage = React.createClass({
  getInitialState: function(){
    return {
    };
  },

  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function(){
    $(window).unbind('resize',this.adjustResize);
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  gotohome() {
    
  },
  
  logout() {
    console.log('logging out')
    const self = this;
    webapi.logout(function (err, data) {
      if(err) {
        return 
      }
      window.location.reload()
      //self.context.router.push('/login');
      return false;
    })
  },
  
  render: function() {
    const { pathname } = this.props.location;
    
    return (
        <div className="dashboard-page ui-view">
          <PrimaryHeader logout={this.logout}></PrimaryHeader>
          <div className="container-fluid"> 
            <div className="row">  
                {React.cloneElement(<div className="main ui-view">{this.props.children}</div> || <div />, { key: pathname })}
            </div> 
          </div> 
        </div>
    );
  },

  statics: {
    fetchData: function(params) {
      }
  }
  
});

export default HomePage;
