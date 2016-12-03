import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Route, DefaultRoute, RouteHandler } from "react-router";
const appTheme = {
  palette: {
    accent1: '#36a372',
    accent2: '#74ba00',
    accent3: '#1a3b7a',
    accent4: '#dd4343' 
  } 
}
const muiTheme = getMuiTheme({
  fontFamily: "Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
});

var Base = React.createClass({
  componentWillMount: function(){
    //this.props.history.pushState(null, '/login');
  },

  render: function() {
  	const { pathname } = this.props.location;

    if(pathname.substr(0, 10) == '/dashboard')
        var change = 'internal';
    else
        var change = pathname;
        console.log(muiTheme)
  	return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="ui-view">
        <div className="ui-base">
        	{<ReactCSSTransitionGroup component="div"
                           transitionName="ng"
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
          >
            {React.cloneElement(<div className="ui-view">{this.props.children}</div> || <div />, { key: change })}
          </ReactCSSTransitionGroup>}
        </div>
      </div>
      </MuiThemeProvider>
    );
  }

});

export default Base;