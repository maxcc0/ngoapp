import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class ToastrNotification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
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
  };

  render() {
    const props = this.props;
    let bodyStyle;
    
    this.props.success && (bodyStyle = {background: '#74ba00', fontSize: '18px'});
    this.props.danger && (bodyStyle = {background: '#dd4343'});


    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Show Toastr"
          />

        <Snackbar
          className='toastr-notification'
          bodyStyle={bodyStyle}
          open={this.state.open}
          message={this.props.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          />
      </div>
    );
  }
}