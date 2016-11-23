import React from 'react';
import { Link } from "react-router";
import PledgeCard from './PledgeCard'

var Settings = React.createClass({
  render: function () {
    return (
      <div key="pledge" className="reports-page">

        <div className='row pledge-logo-section'>
          <div className='col-md-4 bg-white-base'>
          <img className='left-align' src={require("../../assets/images/peacock.jpg") } width='400px' height='500px'/>
          <img style={{position: 'relative', left: '15px'}} className='pull-right'  src={require("../../assets/images/volunteer.jpg") } width='50%'/>
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