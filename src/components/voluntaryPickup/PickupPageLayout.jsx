import React from 'react';
import { Link } from "react-router";
import Map from './Map'
import $ from 'jQuery';
import Signup from './Signup';
import DonorList from './DonorList';
import DropOffLocationSelect from './DropOffLocationSelect';
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

function _fetchDropOffLocations(cb) {
  webapi.fetchDropLocations(cb);
}

let _dest = null;
let _origin = null;


var PickupPageLayout = React.createClass({
  getInitialState() {
    return {
      dropOffLocations: [],
      selectedDL: null,
      data: null,
      origin: null,
      dest: null,
      waypoints: null,
      assignmentError: null
    }
  },

  setWayPoints(data) {
    var waypoints = [];
    _.forEach(data, function (item) {
      const address = item.donor_address;
      address && address.trim() !== '' && waypoints.push({
        location: address,
        stopover: true
      });
    });

    this.setState({
      data: data,
      origin: new google.maps.LatLng(_origin.coords.latitude, _origin.coords.longitude),
      dest: new google.maps.LatLng(18.5793, 73.9089),
      waypoints: waypoints
    })
  },

  handlePickups(err, data) {
    if (err) {
      return
    }
    if (!_.isEmpty(JSON.parse(data))) {
      this.setWayPoints(JSON.parse(data));
    }

  },

  handleDropLocationData(err, data) {
    if (err) {
      return
    }
    const parsed = JSON.parse(data);
    //set drop locations fetched 
    this.setState({ dropOffLocations: parsed, selectedDL: parsed.length && parsed[0].addressid });
  },

  handleChange(e, v) {
    this.setState({ selectedDL: v });
  },

  componentDidMount() {
    _fetchDropOffLocations(this.handleDropLocationData);
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
    if (err) {
      this.setState({ assignmentError: 'Failed to assign route. ' + err })
    }
    console.log('assigment complete')
  },
  assignRoute() {
    _assignVolunteer(this.state.data, this.handleAssign)
  },

  renderAddresses() {
    const dest = _dest && _dest.address;
    //const origin = _origin && _origin.formatted_address;
    //<PathPoints startAddress={dest} endAddress={origin}/>
    if (this.state.data && this.state.data.length) {
      return (
        <div>
          <p className="card-text text-center text-red-variant1">{this.state.assignmentError || null}</p>
          <Accept assignRoute={this.assignRoute}/>
          <br/><br/>
          <DonorList data={this.state.data} dropOffLocation={dest}/>
        </div>
      )

    }

  },

  render: function () {

    //<Signup fetchPickups={this.fetchPickups}/>
    return (
      <div key="collection" className="reports-page">

        <div className='row pledge-logo-section'>
          <div className='col-md-4 bg-white-base'>
            <h4 className='font-thin text-center'>Volunteer Drop Route Confirmation</h4>
            <div className='text-center'>
              <img src={require("../../assets/images/logo_ngo.png") } width='200px'/>

            </div>

            <div className='card-block'>
              <DropOffLocationSelect options={this.state.dropOffLocations} fetchPickups={this.fetchPickups}/>
              {this.renderAddresses() }
            </div>
          </div>

          <div className='col-md-8' style={{ height: 500 }}>
            <Map origin={this.state.origin} dest={this.state.dest} waypoints={this.state.waypoints}/>
          </div>
        </div>
      </div>
    );
  }

});

export default PickupPageLayout;