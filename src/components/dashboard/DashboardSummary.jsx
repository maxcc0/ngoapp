import React from 'react';
import Tile from '../shared/widgets/Tile'
import _ from 'lodash';
import VolunteerIcon from 'material-ui/svg-icons/social/mood';
import PledgeIcon from 'material-ui/svg-icons/action/pan-tool';
import DoneIcon from 'material-ui/svg-icons/action/done';
import LocalShipIcon from 'material-ui/svg-icons/maps/local-shipping';

var DashboardSummary = React.createClass({
  render: function () {
    const props = this.props;
    const volunteerCount = _.filter(props.users, {role: 'volunteer'}).length;
    const receivedCount = _.filter(props.donations, {status: 'closed'}).length;
    const newPledgeCount = _.filter(props.donations, {status: 'created'}).length;
  const assignedCount = _.filter(props.donations, {status: 'assigned'}).length;
    return (
      <div>
      <div className='row'>
        <div className='col-sm-3'>
          <Tile value={volunteerCount} subtitle='Registered Volunteers' fuiStyle='info' icon={<VolunteerIcon color='rgba(255, 255, 255, 0.65)' className='text-white-base' style={{ height: '60px', width: '60px' }}/>}/>
        </div>
        <div className='col-sm-3'>
          <Tile value={newPledgeCount} icon={<PledgeIcon color='rgba(255, 255, 255, 0.65)' className='text-white-base' style={{ height: '60px', width: '60px' }}/>} subtitle='New Pledges' fuiStyle='primary' />
        </div>
        <div className='col-sm-3'>
          <Tile value={receivedCount} icon={<DoneIcon color='rgba(255, 255, 255, 0.65)' className='text-white-base' style={{ height: '60px', width: '60px' }} />}subtitle='Donations Received So Far'  fuiStyle='successSpecial' />
        </div>
        <div className='col-sm-3'>
          <Tile value={assignedCount} icon={<LocalShipIcon color='rgba(255, 255, 255, 0.65)' className='text-white-base' style={{ height: '60px', width: '60px' }}/>} subtitle='Being Collected' fuiStyle='warning'/>
        </div>
      </div>
      
      </div>
    );
  }

});

export default DashboardSummary;