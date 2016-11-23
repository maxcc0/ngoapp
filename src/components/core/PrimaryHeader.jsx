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


import Sidebar from './Sidebar';
import PrimaryHeaderContent from '../base/PrimaryHeaderContent';

const BrandLogo = () => (
  <div style={{ 'lineHeight': 50 + 'px', marginLeft: '10px' }}>
  <a  href='#/login'>
      <img src={require("../../assets/images/logo_ngo.png") }  className="brand-logo"/></a>
    </div>
);

export default class PrimaryHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar className='app-header'>
        <ToolbarGroup firstChild={true}>
          <Sidebar/>
          <BrandLogo/>
        </ToolbarGroup>


      </Toolbar>
    );
  }
}