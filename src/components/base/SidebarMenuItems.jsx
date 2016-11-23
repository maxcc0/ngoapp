import React from 'react';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {List, ListItem} from 'material-ui/List';
import { Link } from "react-router";
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class SidebarMenuItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleClose = this.handleClose.bind(this);
    this.expandSelection = this.expandSelection(this);
  }

  componentDidMount() {
  }
  
  componentWillUnmount() {
  }
  
  handleClose = () => this.props.toggle();

  expandSelection() {
  }

  render() {
    return (
      <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <List>
          <Link to="/home/dashboard">
            <ListItem className='text-white-base' primaryText="Dashboard"  onClick={this.handleClose}/>
          </Link>
          <Link to="/home/second">
            <ListItem className='text-white-base' primaryText="Settings"  onClick={this.handleClose}/>
          </Link>
          <ListItem className='text-white-base' onClick={this.expandSelection}
            primaryText="Developer Kit" rightIcon={<NavigationExpandMoreIcon className='app-header-menu-icon'/>} />
          <List style={{ paddingLeft: 20 + 'px' }}>
            <Link to="/home/developerkit">
              <ListItem onClick={this.handleClose} className='text-white-base' primaryText="All" rightIcon={<ActionInfo />} />
            </Link>
            <ListItem onClick={this.handleClose} className='text-white-base' primaryText="Charts" rightIcon={<ActionInfo />} />
            <ListItem onClick={this.handleClose} className='text-white-base' primaryText="Data Grid" rightIcon={<ActionInfo />} />
            <ListItem onClick={this.handleClose} className='text-white-base' primaryText="Widgets" rightIcon={<ActionInfo />} />
          </List>
        </List>
      </div>
    );
  }
}