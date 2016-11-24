import React from 'react';
import { Link } from "react-router";
import Map from './Map'
import $ from 'jQuery';
import Signup from './Signup';
import DropLocationList from './DropLocationList';
import {fetchAddress, getGeoLocation} from '../../utils/Location';

function _fetchPickups(origin, dest, cb) {
  $.ajax({

    type: 'post',
    data: { origin: origin, dest: dest },
    url: 'https://www.socialpixe.com/socialpixe/react/fetchPickups.php',
    success: function (response) {
      cb(null, response)
    },
    error: function (jqXHR, exception) {
      var msg = '';
      if (jqXHR.status === 0) {
        msg = 'Not connect.\n Verify Network.';
      } else if (jqXHR.status == 404) {
        msg = 'Requested page not found. [404]';
      } else if (jqXHR.status == 500) {
        msg = 'Internal Server Error [500].';
      } else if (exception === 'parsererror') {
        msg = 'Requested JSON parse failed.';
      } else if (exception === 'timeout') {
        msg = 'Time out error.';
      } else if (exception === 'abort') {
        msg = 'Ajax request aborted.';
      } else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
      }
      cb(msg)
    }
  })
}

let _dest = null;
let _origin = null;
var PickupPageLayout = React.createClass({
  getInitialState() {
    return {
      origin: null,
      dest: null,
      waypoints: null,
    }
  },
  setWayPoints() {
    var items = ["surat", "ahmedabad"];
    var waypoints = [];
    for (var i = 0; i < items.length; i++) {
      var address = items[i];
      if (address !== "") {
        waypoints.push({
          location: address,
          stopover: true
        });
      }
    }
    this.setState({
          origin: new google.maps.LatLng(_origin.coords.latitude, _origin.coords.longitude),
          dest: new google.maps.LatLng(28.5789564, 73.683705),
      waypoints: waypoints
    })
  },
  handlePickups(err, data) {
    if (err) {
      console.log(err) 
      return
    }
    this.setWayPoints(data);
  },

  componentDidMount() {
  },
  
  getMyGeoLocation() {
    getGeoLocation(this.handleGeoLocation)
  },

  handleGeoLocation(err, data) {
    if (err) {
      alert('Failed to get location. Please enable geo location in brower');
    }
    _origin = data;
    _fetchPickups(data, _dest, this.handlePickups);
  },


  fetchPickups(dest) {
    _dest = dest;
    this.getMyGeoLocation();
  },


  render: function () {
    console.log(this.state)
    return (
      <div key="collection" className="reports-page">

        <div className='row pledge-logo-section'>
          <div className='col-md-4 bg-white-base'>
              <img src={require("../../assets/images/logo_ngo.png") } width='200px'/>
            <div className='card-block'>
            <Signup fetchPickups={this.fetchPickups}/>
            <br/><br/>
            <DropLocationList/>

   
            </div>
          </div>

          <div className='col-md-8 card-block' style={{ height: 500, marginTop: '.75rem' }}>
            <Map origin={this.state.origin} dest={this.state.dest} waypoints={this.state.waypoints}/>
          </div>
        </div>
      </div>
    );
  }

});

export default PickupPageLayout;