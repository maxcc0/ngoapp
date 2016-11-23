import React from 'react';
import { Link } from "react-router";
import Map from './Map'
import $ from 'jQuery';
import Signup from './Signup';
import {fetchAddress, getGeoLocation} from '../../utils/Location';

function _fetchPickups(origin, dest, cb) {
  $.ajax({

    type: 'post',
    data: { origin: origin, dest: dest },
    url: 'https://www.socialpixe.com/socialpixe/react/fetchPickups.php',
    success: function (response) {
      cb(null, response)
    }
  })
}

let _dest = null;

var PickupPageLayout = React.createClass({
  getInitialState() {
    return {
      origin: null,
      dest: null,
      drops: null,
    }
  },
  handlePickups(err, data) {
    if (err) {
      return
    }
    console.log(data);
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
    _fetchPickups(data, _dest, this.handlePickups)
  },


  fetchPickups(dest) {
    _dest = dest;
    this.getMyGeoLocation();
  },


  render: function () {
    return (
      <div key="collection" className="reports-page">

        <div className='row pledge-logo-section'>
          <div className='col-md-4 bg-white-base'>
            <img src={require("../../assets/images/logo_ngo.png") } width='200px'/>
            <Signup fetchPickups={this.fetchPickups}/>
          </div>

          <div className='col-md-8' style={{ height: 400 }}>
            <Map/>
          </div>
        </div>
      </div>
    );
  }

});

export default PickupPageLayout;