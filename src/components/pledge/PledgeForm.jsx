import React from 'react';
import Formsy from 'formsy-react';
import $ from 'jQuery';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import {fetchAddress, getGeoLocation} from '../../utils/Location';
// var geocoder;

// function initialize() {
//   geocoder = new google.maps.Geocoder();
// }

// function codeLatLng(lat, lng, cb) {
//   var latlng = new google.maps.LatLng(lat, lng);
//   geocoder.geocode({
//     'latLng': latlng
//   }, function (results, status) {
//     if (status === google.maps.GeocoderStatus.OK) {
//       if (results[1]) {
//         console.log(results[1]);
//         cb(null, results[1].formatted_address)
//       } else {
//         cb(null, '')
//       }
//     } else {
//       cb('Geocoder failed due to: ' + status, '')
//     }
//   });
// }
// // initialize();
// function _getMyGeoLocation(cb) {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (location) {
//       cb(null, location);
//     });
//   } else {
//     cb('not supported');
//     alert('Geolocation is not supported in your browser');
//   }

// }

const MyAppForm = React.createClass({
  getInitialState() {

    return {
      canSubmit: false,
      geoLocation: null,
      address: null
    }
  },

  enableButton() {
    this.setState({
      canSubmit: true
    });
  },
  disableButton() {
    this.setState({
      canSubmit: false
    });
  },

  submit(model) {
    model.geoLocation = this.state.geoLocation;
    $.ajax({

      type: 'post',
      data: { DATAasdasd: model },
      url: 'https://www.socialpixe.com/socialpixe/react/myphp.php',
      success: function (response) {
        alert(response);
      }
    })
  },
  handleAddress(err, address) {
    if(err){
      return
    }
    this.setState({address: address});
  },
  handleGeoLocation(err, data) {
    if(err) {
      return
    }
    this.setState({geoLocation: data});
    fetchAddress(data.coords.latitude, data.coords.longitude, this.handleAddress)
  },

  getMyGeoLocation() {
    getGeoLocation(this.handleGeoLocation)
  },

  render() {
    return (
      <Formsy.Form onValidSubmit= { this.submit } onValid= { this.enableButton } onInvalid= { this.disableButton } >
        <MyOwnInput name="name" label='Name' required/>
        <MyOwnInput name="address"  value={this.state.address} label='Address' required/>
        <MyOwnInput name="email" label='Email'  validations="isEmail" validationError="This is not a valid email"/>
        <MyOwnInput name="contact" label='Contact#'   required/>
        <MyOwnInput name="contact_alternate" label='Alternate Contact#'/>
        <MyOwnInput name="donation_type" label='Donate' required/>
        <div className="form-group row text-left">
        <div className='col-sm-2'>
        </div>
        <div className='col-xs-4'>
        <button type="submit" className="btn btn-lg yellow-bg-v2" disabled={!this.state.canSubmit}>Confirm</button>
        </div>
        <div className='col-xs-6'>
        <button type="button" onClick={this.getMyGeoLocation} className="btn  btn-primary-dm pull-right" ><PlaceIcon color={'#fff'}/>Use My Location</button>
        </div>
        
        
        </div>
      </Formsy.Form >
    );
  }
});

const MyOwnInput = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">{this.props.label}</label>
        <div className="col-sm-10">
          <input className="col-sm-2 form-control" type="text" onChange={this.changeValue} value={this.getValue() }/>
        </div>

        <span>{errorMessage}</span>
      </div>
    );
  }
});

export default MyAppForm;