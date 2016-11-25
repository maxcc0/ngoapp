import React from 'react';
import { Link } from "react-router";
import PledgeCard from './PledgeCard'
import PledgeOverview from './PledgeOverview'
          // <div className='col-md-4'>
          // <img src={require("../../assets/images/pledge_kids.jpg") } width='100%'/>
          // <img src={require("../../assets/images/donate.jpg") } width='100%'/>
          // </div>
var Settings = React.createClass({
  render: function () {
    return (
      <div key="pledge" className="reports-page">

        <div className='row pledge-logo-section'>
         <div className='col-md-3 text-center'>
            <div>
              <img src={require("../../assets/images/logo_ngo.png") } width='200px'/>
            </div>
          </div>

      
          <div className='col-md-6'>
            <PledgeCard />
          </div>
         

        </div>
        <PledgeOverview/>
      </div>
    );
  }

});

export default Settings;