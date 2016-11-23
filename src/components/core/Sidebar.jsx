import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import HamburgerMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import WorkIcon from 'material-ui/svg-icons/action/work';
import { Link } from "react-router";
import SidebarMenuItems from '../base/SidebarMenuItems';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
        <IconButton  onClick={this.handleToggle}>
                   <IconMenu iconButtonElement={<HamburgerMenu className='app-header-menu-icon'/>}>
            <MenuItem primaryText="Events" />
            <MenuItem primaryText="Picture Gallery" />
            <MenuItem primaryText="About Us" />
            <MenuItem primaryText="Contact Us" />
          </IconMenu>     
        </IconButton>
    );
  }
}