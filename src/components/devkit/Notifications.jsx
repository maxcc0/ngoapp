import React from 'react';
import Toastr from '../shared/overlays/ToastrNotification';

var Notifications = React.createClass({
  render: function() {
    return (
      <div>
        <div> 
          <h2>Toastr Notifications <small></small></h2>
          <Toastr success message='File Uploaded sucessfully. It may take a few minutes for the files to appear here.'/>
        </div>
      </div>  
    );
  }

});

export default Notifications;