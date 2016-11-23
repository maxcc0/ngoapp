import React from 'react';
import Alert from 'material-ui/svg-icons/alert/warning';

export default class ErrorView extends React.Component{

    render() {
      let errorMessage = this.props.messageText || 'Failed to load data. Something Went Wrong.';
      return (
          <div className='text-center'>
            <div>
              <Alert style={{ height: '110px', width: '110px' }} color={"#fd9c35"}/>
            </div>
            <span className='text-muted font-thin'>{errorMessage}</span>
            <br/><br/>
          </div>
        )
    }
  }
