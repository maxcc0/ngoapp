import React from 'react';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import Mail from 'material-ui/svg-icons/content/mail';
import Flag from 'material-ui/svg-icons/content/flag';
import VerifiedUser from 'material-ui/svg-icons/action/verified-user';
import LinearProgressCard from '../shared/widgets/LinearProgressCard';
import CircularProgressCard from '../shared/widgets/CircularProgressCard';
import {StatisticsCardV1, StatisticsCardV2, StatisticsCardV3} from '../shared/widgets/StatisticsCards';


function sampleCardContent1() {
  return (
    <div className='text-center' >
      <VerifiedUser className='text-white-base' style={{ height: '60px', width: '60px' }}/>
      <h1 className="text-white-base font-light">430</h1>
      <h3 className="font-thin text-white-base no-margins">
        New Users
      </h3>
      <span className='text-white-base'>Successfully Authenticated</span>
    </div>
  )
}

export default class Widgets extends React.Component {

  render() {
    return (
      <div>





      </div>
    )

  }
}