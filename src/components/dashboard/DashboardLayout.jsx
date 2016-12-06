import React from 'react';
import { Link } from "react-router";
import { History } from 'history';
import PledgeGrid from './PledgeGrid';

var Dashboard = React.createClass({
  mixins: [History],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div key="dashboard" className="reports-page" style={{height: '100%'}}>
      <div className='row pledge-logo-section' style={{height: '100%'}}>
        <div style={{padding: '2rem', paddingTop: 0}}>
          <PledgeGrid/>
        </div>
      </div></div>
    );
  }

});

export default Dashboard;