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
  palette: {
    primary1Color: appTheme.palette.accent2,
    //secondaryTextColor: appTheme.palette.accent3
  },
  raisedButton: {
    primaryColor: appTheme.palette.accent2,
    secondaryColor: appTheme.palette.accent3,
    fontSize: 15
  }
});
console.log(getMuiTheme())

var Base = React.createClass({
  componentWillMount: function(){
    // this.props.history.pushState(null, '/dashboard/overview');
  },

  render: function() {
  	const { pathname } = this.props.location;

    if(pathname.substr(0, 10) == '/dashboard')
        var change = 'internal';
    else
        var change = pathname;

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