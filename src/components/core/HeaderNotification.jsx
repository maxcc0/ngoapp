import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

export default class HeaderNotification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  render() {
    return (
    <Badge className='notification-bell' badgeContent={this.state.value} primary={true} badgeStyle={{top: 4, right: 6}}>
      <IconButton tooltip="Notifications">
          <NotificationsIcon className='text-white-base'/>
      </IconButton>
    </Badge>
    );
  }
}