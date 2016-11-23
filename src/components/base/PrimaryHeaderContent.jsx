import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import HeaderNotification from './HeaderNotification';

function renderHamburgerMenu() {
    return <Sidebar></Sidebar>
}


export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <section>        
        <ToolbarGroup>
          <DropDownMenu labelStyle={{color: '#fff'}}
          className='text-white-base' value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="India" />
            <MenuItem value={2} primaryText="France" />
            <MenuItem value={3} primaryText="Italy" />
          </DropDownMenu>
          <HeaderNotification/>
            <IconMenu iconButtonElement={<IconButton>
              <NavigationExpandMoreIcon className='text-white-base'/></IconButton>}>
            <MenuItem primaryText="See Profile" />
            <MenuItem primaryText="Logout" />
          </IconMenu>
        </ToolbarGroup>
      </section>
    );
  }
}