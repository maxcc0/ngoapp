import React from 'react';
import { Link } from "react-router";
import { History } from 'history';
import PledgeCard from './PledgeCard'
import PledgeOverview from './PledgeOverview'

var Pledge = React.createClass({
  mixins: [History],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  
  handlePledge: function () {
    this.context.router.push('/login');
    return false;
  },

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
            <PledgeCard handlePledge={this.handlePledge}/>
          </div>
         

        </div>
        <PledgeOverview/>
      </div>
    );
  }

});

export default Pledge;