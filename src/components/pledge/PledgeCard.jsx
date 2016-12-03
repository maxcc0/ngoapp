import React from 'react';
import PledgeForm from './PledgeForm'
import Snackbar from 'material-ui/Snackbar';
import Toastr from '../shared/overlays/Toastr';

var PledgeCard = React.createClass({

  handleSavePledgeResponse(err, data) {
    console.log(err);
    if (err) {
       return this.refs.toast.show('Something went wrong. Please try after sometime.')
    }
    this.refs.toast.show('Pledge added successfully.')
  },
  
  onRequestClose() {
   this.props.handlePledge(); 
  },

  render: function () {
    return (
      <div className="card ">
        <div className="card-header text-center">
          <h4 className=' font-thin'>Donation Pledge Confirmation</h4>
        </div>
        <div className="card-block ">
          <h2 className="card-title text-center no-margins font-thin">Thank you for your help!</h2>
          <br/>
          <PledgeForm handleSavePledgeResponse={this.handleSavePledgeResponse}/>
          <Toastr onRequestClose={this.onRequestClose} ref='toast'/>
          <p className="card-text text-center text-muted">We thank you for your contribution.Our volunteer will get in touch with you soon.</p>
        </div>
      </div>
    );
  }

});

export default PledgeCard;