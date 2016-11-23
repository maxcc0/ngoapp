import React from 'react';
import { Link } from "react-router";
import PledgeCard from './PledgeCard'

var Settings = React.createClass({
  render: function () {
    return (
      <div key="pledge" className="reports-page">

        <div className='row pledge-logo-section'>
          <div className='col-md-4'>
          <img src={require("../../assets/images/pledge_kids.jpg") } width='100%'/>
          <img src={require("../../assets/images/donate.jpg") } width='100%'/>
          </div>
      
          <div className='col-md-6'>
            <PledgeCard />
          </div>
          <div className='col-md-2 '>
            <div style={{marginTop: '.75rem'}}>
              <img src={require("../../assets/images/logo_ngo.png") } width='200px'/>
            </div>
          </div>

        </div>
      </div>
    );
  }

});

export default Settings;