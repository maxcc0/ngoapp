import React from 'react';
import PledgeForm from './PledgeForm'

var PledgeCard = React.createClass({
  render: function () {
    return (
      <div className="card " style={{marginTop: '.75rem'}}>
       <div className="card-header text-center">
          <h4 className=' font-thin'>Voluneer Drop Route Confirmation</h4>
      </div>
        <div className="card-block text-center">
            <h2 className="card-title no-margins font-thin">Thank you for your help!</h2>
            <br/>
            <PledgeForm/>
            <p className="card-text">Hey Volunteer!! We thank you for your time and support.</p>
          </div>
      </div>
    );
  }

});

export default PledgeCard;