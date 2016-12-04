import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import { History } from 'history';
import HamburgerMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from "react-router";
import auth from '../../utils/auth';
var Menu = React.createClass({
  getInitialState() {
    return {
      open: false
    }
  },
  
  mixins: [History],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  
  gotodashboard() {
    this.context.router.push('/dashboard');
    return false;
  },
  
  getDashboard() {
    if(auth.loggedIn()) {
      return <MenuItem primaryText="Dashboard" onTouchTap={this.gotodashboard}/>
    }
    return false
  },

  render() {
    return (
        <IconButton  style={{padding: 0, marginLeft:'1rem'}} onClick={this.handleToggle}>
                   <IconMenu iconButtonElement={<HamburgerMenu className='app-header-menu-icon'/>}>
                   {this.getDashboard()}
            <MenuItem primaryText="Events" href='http://domutthi.org/events.html' target='_blank'/>
            <MenuItem primaryText="Picture Gallery" href='http://domutthi.org/index.html' target='_blank' />
            <MenuItem primaryText="About Us" href='http://domutthi.org/about-us.html' target='_blank'/>
            <MenuItem primaryText="Contact Us" href='http://domutthi.org/index.html' target='_blank'/>
            
          </IconMenu>     
        </IconButton>
    );
  }
});

export default Menu;

// export default class Sidebar extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {open: false};
//   }
//   gotodashboard() {

//   }
//   render() {
//     return (
//         <IconButton  style={{padding: 0, marginLeft:'1rem'}} onClick={this.handleToggle}>
//                    <IconMenu iconButtonElement={<HamburgerMenu className='app-header-menu-icon'/>}>
//             <MenuItem primaryText="Dashboard" onTouchTap={this.gotodashboard}/>
//             <MenuItem primaryText="Events" href='http://domutthi.org/events.html' target='_blank'/>
//             <MenuItem primaryText="Picture Gallery" href='http://domutthi.org/index.html' target='_blank' />
//             <MenuItem primaryText="About Us" href='http://domutthi.org/about-us.html' target='_blank'/>
//             <MenuItem primaryText="Contact Us" href='http://domutthi.org/index.html' target='_blank'/>
            
//           </IconMenu>     
//         </IconButton>
//     );
//   }
// }