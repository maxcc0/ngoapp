import React, { PropTypes, Component } from 'react';
import ToggleSwitch from '../shared/form-fields/ToggleSwitch';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 12,
};
var Buttons = React.createClass({
  
  handleClick() {
    alert('button clicked')
  },

  render: function() {
    return (
      <div>
        <div> 
          <h2>Buttons <small></small></h2>
          Buttons and code should appear here.
          Buttons should reside in shared/form-fields folder 
          <br/>
          <RaisedButton primary style={style} label='Submit' onClick={this.handleClick}/>
          <RaisedButton secondary style={style} label='Submit' onClick={this.handleClick}/>
          <RaisedButton default style={style} label='Submit' onClick={this.handleClick}/>
          <RaisedButton label="Disabled" disabled={true} style={style} />

          <h2>Toggle Switches <small></small></h2>
          <ToggleSwitch/>
        </div>
      </div>  
    );
  }

});

export default Buttons;