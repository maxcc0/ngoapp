import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Button extends React.Component { 

      constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
      }
      
      handleClick() {
        this.props.handleClick && this.props.handleClick();
      }
      
      render() {
        let props = this.props;

        return (
          <RaisedButton {...props} label={this.props.label}/>
        )

      }
}