import React, { PropTypes, Component } from 'react';
import SimpleDialog from '../shared/overlays/SimpleDialog';
var Modals = React.createClass({
  render: function() {
    return (
      <div>
        <div> 
          <h2>Modals <small></small></h2>
          Modals and code should appear here 
          <SimpleDialog/>
        </div>
      </div>  
    );
  }

});

export default Modals;