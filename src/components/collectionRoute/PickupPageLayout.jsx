import React from 'react';
import { Link } from "react-router";
import Map from './Map'
import $ from 'jQuery';
import Signup from './Signup';
import DropLocationList from './DropLocationList';
import PathPoints from './Path';
    import Accept from './AcceptAssignmentModal';
import webapi from '../../actions/api';

import {fetchAddress, getGeoLocation} from '../../utils/Location';

function _fetchPickups(origin, dest, cb) {
  webapi.fetchPickupLocations(origin, dest, cb);
}
function _assignVolunteer(data, cb) {
  webapi.assignVoluteer(data, cb);
}
let _dest = null;
let _origin = null;
var PickupPageLayout = React.createClass({
  getInitialState() {
    return {
      data: null,
      origin: null,
      dest: null,
      waypoints: null,
      assignmentError: null
    }
  },
  setWayPoints(data) {
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
          data: data,
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
  handleAssign(err, data) {
    if(err) {
      this.setState({assignmentError: 'Failed to assign route. '+ err})
    }
    console.log('assigment complete')
  },
  assignRoute() {
    _assignVolunteer(this.state.data, this.handleAssign)
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
            <PathPoints/>
            <p className="card-text text-center text-red-variant1">{this.state.assignmentError || null}</p>
            <Accept assignRoute={this.assignRoute}/>
            <DropLocationList />

   
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