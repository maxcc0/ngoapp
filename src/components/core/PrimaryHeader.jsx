import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/action/account-circle';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ActionHome from 'material-ui/svg-icons/action/home';
import auth from '../../utils/auth';
import Menu from './Menu';

const BrandLogo = () => (
  <div style={{ 'lineHeight': 50 + 'px', marginLeft: '10px' }}>
  <a  href='#/'>
      <img src={require("../../assets/images/logo_ngo.png") }  className="brand-logo"/></a>
    </div>
);


function _getUserIcon() {
if(auth.loggedIn()) {
  return (
    <IconMenu iconButtonElement={<IconButton iconStyle={styles.smallIcon} className='text-white-base'>
          <NavigationExpandMoreIcon className='text-white-base'/></IconButton>}>
            <MenuItem onTouchTap={this.props.logout} primaryText="Logout" />
          </IconMenu>
  )
}
return null
}

function _getDashboardIcon() {
if(auth.loggedIn()) {
  return (
    <IconMenu iconButtonElement={<IconButton iconStyle={styles.smallIcon} className='text-white-base'>
          <NavigationExpandMoreIcon className='text-white-base'/></IconButton>}>
            <MenuItem onTouchTap={this.props.logout} primaryText="Logout" />
          </IconMenu>
  )
}
return null
}

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  }
};



export default class PrimaryHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value});
//          <BrandLogo/>
  render() {
    return (
      <Toolbar className='app-header'>
        <ToolbarGroup firstChild={true}>
          <Menu/>
          <IconButton href= '#/' style={{padding: '6px'} } iconStyle={styles.smallIcon}>
            <ActionHome color='#666'
      hoverColor={'#ff5a5f'}/>
          </IconButton>
        </ToolbarGroup>
        <ToolbarGroup>
          {_getUserIcon.call(this)}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}