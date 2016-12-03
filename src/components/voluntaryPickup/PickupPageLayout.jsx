import React from 'react';
import { Link } from "react-router";
import Map from './Map'
import $ from 'jQuery';
import Signup from './Signup';
import { History } from 'history';
import DonorList from './DonorList';
import DropOffLocationSelect from './DropOffLocationSelect';
import PathPoints from './Path';
import Accept from './AcceptAssignmentModal';
import webapi from '../../actions/api';
import Toastr from '../shared/overlays/Toastr';
import {fetchAddress, getGeoLocation} from '../../utils/Location';

function _fetchPickups(origin, dest, cb) {
  webapi.fetchPickupLocations(origin, dest, cb);
}

function _fetchDropOffLocations(cb) {
  webapi.fetchDropLocations(cb);
}

function _assignRoute(donation, cb) {
  webapi.assignRoute(donation, cb);
}
function _updateDonationStatus(donation, cb) {
  webapi.updateDonationStatus(donation, cb);
}

function _submitAssignment(donation, cb) {
  webapi.submitAssignment(donation, cb);
}


let _dest = null;
let _origin = null;


var PickupPageLayout = React.createClass({
    mixins: [History],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  
  getInitialState() {
    return {
      dropOffLocations: [],
      geoLocationError: null,
      selectedDL: null,
      data: null,
      origin: null,
      originAddress: null,
      dest: null,
      waypoints: null,
      assignmentError: null,
      pledgeError: null,
      message: null,
    }
  },
  init() {
    this.setState({
      geoLocationError: null,
      data: null,
      //originAddress: null,
      dest: null,
      waypoints: null,
      assignmentError: null,
      pledgeError: null,
      message: null,
    })
  },
  getWayPoints(data) {
    var waypoints = [];
    _.forEach(data, function (item) {
      const address = item.donor_address;
      address && address.trim() !== '' && waypoints.push({
        location: address,
        stopover: true
      });
    });
    return waypoints;
  },

  handlePickups(err, data) {
    if (err) {
      return this.setState({pledgeError: 'Failed to load donor addresses. ' + err})
    }
    
    const allPledges = JSON.parse(data);
    if(_.isEmpty(allPledges)) {
      this.setState({data: [], waypoints:null});
      return
    }
    
    const assignedItems = _.filter(allPledges, function(item){
      return item.donation_status==='assigned' || item.donation_status==='picked'
    });
    let waypoints = [];
    if(assignedItems.length) {
      waypoints = this.getWayPoints(assignedItems);
    } else {
      waypoints = this.getWayPoints(allPledges);
    }
    
    const destCoords = _dest.geolocation.split(',')
    this.setState({ 
      data: allPledges,
      hasAssigned: assignedItems.length ? true: false,
      origin: new google.maps.LatLng(_origin.coords.latitude, _origin.coords.longitude),
      dest: new google.maps.LatLng(destCoords[0], destCoords[1]),
      waypoints: waypoints
    })
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
    //fetch drop locations on load
    _fetchDropOffLocations(this.handleDropLocationData);

    //fetch users current location
    this.getMyGeoLocation();
  },

  getMyGeoLocation() {
    getGeoLocation(this.handleGeoLocation)
  },

  handleAddress(err, data) {
    if(err) {
      return this.setState({geoLocationError: 'Something went wrong while fetching your location.'});
    }
    this.setState({originAddress: data});
  },
  
  handleGeoLocation(err, data) {
    this.init();
    
    if (err) {
      this.setState({geoLocationError: err.message || 'Something went wrong while fetching your location.'});
      return
    }
    _origin = data;
    
    this.setState({
      origin: new google.maps.LatLng(_origin.coords.latitude, _origin.coords.longitude)
    });
    
    fetchAddress(_origin.coords.latitude, _origin.coords.longitude, this.handleAddress)
  },

  fetchPickups(dest) {
   // this.init();
    _dest = dest;
    _fetchPickups(_origin, _dest, this.handlePickups);
    //this.getMyGeoLocation();
  },

  handleDonationStatusChange(err, donation) {
    if(err) {
      return this.refs.toast.show('Could not update status. Please try again later.')
    }
    this.refs.toast.show('Status updated successfully.')
    _fetchPickups(_origin, _dest, this.handlePickups);
    //update donation object in this.state.data
  },

  updateDonationStatus(data, status) {
    const donation = _.clone(data);
    donation.donation_status = status;
    _updateDonationStatus([donation], this.handleDonationStatusChange)
  },
  
  handleAssign(err, data) {
    if (err) {
      return this.setState({ assignmentError: 'Failed to assign route. ' + err })
    }
     _fetchPickups(_origin, _dest, this.handlePickups);
  },

  assignRoute() {
    const donation = _.clone(this.state.data);
    _assignRoute(donation, this.handleAssign)
  },
  
  handleSubmitAssignment(err, donation) {
    if(err) {
      return this.refs.toast.show('Could not update status. Please try again later.')
    }
    this.refs.toast.show('Assignment submitted successfully.')
    _fetchPickups(_origin, _dest, this.handlePickups);
    //update donation object in this.state.data
  },
onRequestClose() {
this.context.router.push('/login');
    return false;
},
  submitAssignment() {
    const pledges = _.filter(this.state.data, function(item){
      return item.donation_status==='assigned' || item.donation_status==='picked'
    })
    _submitAssignment(pledges, this.handleSubmitAssignment);
  },
  
  renderAddresses() {
    const dest = _dest && _dest.address;
    
    if(this.state.pledgeError) {
      return <div><br/>
      <p className="card-text text-center text-red-variant1">{this.state.pledgeError}</p>
      </div>
    }
    
    if(!this.state.data) return null

    if(_.isEmpty(this.state.data)){
      return (
        <div className='card-block text-center'>
          <h4 className=" no-margins font-thin">No Donor Addresses Found</h4></div>
      )
    }
    
    let pledgeList = this.state.data;
    let message = 'Assign the addresses shown below to yourself by clicking the confirm button. You can review the route here.';
    if(this.state.hasAssigned) {
       pledgeList  = _.filter(this.state.data, function(item){
            return item.donation_status === 'assigned' || item.donation_status === 'picked';
        })
      message = 'Your Assignment'
    }
    
    const assignedPledges = _.filter(this.state.data, {donation_status: 'assigned'})
    
      return (
        <div>
          <p className="card-text text-center text-red-variant1">{this.state.assignmentError || null}</p>
           <br/>
          {!this.state.hasAssigned && <div><Accept assignRoute={this.assignRoute}/><br/></div>} 
          <DonorList message={message} hasAssigned={this.state.hasAssigned} data={pledgeList} dropOffLocation={dest} 
          updateDonationStatus={this.updateDonationStatus} submitAssignment={this.submitAssignment}/>
        </div>
      )

  },
  
  setGeoLocation(location) {
    _origin = location;
    this.setState({
      data: [],
      waypoints: null,
      originAddress: location.formatted_address,
      origin: new google.maps.LatLng(_origin.coords.latitude, _origin.coords.longitude),
  });
  },
  
  render: function () {

    //<Signup fetchPickups={this.fetchPickups}/>
    return (
      <div key="collection" className="reports-page">
        <Toastr ref='toast'  />
        <Toastr ref='assignmentToast' onRequestClose={this.onRequestClose} />
        <div className='row pledge-logo-section'>
          <div className='col-md-4 bg-white-base'>
            <h4 className='font-thin text-center'>Volunteer Drop Route Confirmation</h4>
            <div className='text-center'>
              <img src={require("../../assets/images/logo_ngo.png") } width='200px'/>
            </div>

            <div className='card-block'>
              <h4 className='font-thin'>Welcome {global.username}</h4>
               <PathPoints startAddress={this.state.originAddress} setGeoLocation ={this.setGeoLocation }
                  getMyGeoLocation = {this.getMyGeoLocation}/>
              <p className="card-text text-center text-red-variant1">{this.state.geoLocationError || null}</p>
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