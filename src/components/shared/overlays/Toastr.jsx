import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class ToastrNotification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: null,
      message: null,
    };
    this.show = this.show.bind(this);
  }
  show(message){
    this.setState({
    open: true,
    message: message
    })
  }
  success(message){
    this.setState({
    status: 'success',
    open: true,
    message: message
    })
  }
  error(message){
    this.setState({
    status: 'error',
    open: true,
    message: message
    })
  }
  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
    this.props.onRequestClose && this.props.onRequestClose();
  };

  render() {
    const props = this.props;
    let bodyStyle = {fontFamily: 'inherit'};
    
    this.state.status === 'success' && (bodyStyle = {background: '#74ba00', fontFamily: 'inherit'});
    this.state.status === 'error'&& (bodyStyle = {background: '#dd4343', fontFamily: 'inherit'});

    return (
        <Snackbar
          contentStyle={{fontSize: '15px'}}
          action="Ok"
          bodyStyle={bodyStyle}
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={6000}
          onActionTouchTap={this.handleRequestClose}
          onRequestClose={this.handleRequestClose}
          />
    );
  }
}