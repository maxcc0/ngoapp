import React from 'react';
import Formsy from 'formsy-react';
import $ from 'jQuery';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import {fetchAddress, getGeoLocation, fetchCoords} from '../../utils/Location';
function _savePledge() {

}
import NavigationIcon from 'material-ui/svg-icons/maps/navigation';
const MyAppForm = React.createClass({
  getInitialState() {

    return {
      canSubmit: false,
      geoLocation: null,
      address: null,
      geoLocationError: null
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
  handleFetchCoords(err, data) {
    console.log(data);
  },
  submit(model) {
    // if(!this.state.geoLocation) {
    //   fetchCoords(model.address, this.handleFetchCoords)
    // }
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
      this.setState({geoLocationError: 'Could not fetch your location from geo services. Please add your address.'})
      return
    }
    this.setState({address: address});
  },
  handleGeoLocation(err, data) {
    if(err) {
      this.setState({geoLocationError: err.message || 'Something went wrong while fetching your location.'})
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
     
        <button type="button" onClick={this.getMyGeoLocation} className="btn  btn-lg btn-primary-dm pull-right" ><PlaceIcon style={{verticalAlign: 'bottom'}} color={'#fff'}/>Use My Location</button>
        </div>
        
        
        </div>
        <p className="card-text text-center text-red-variant1">{this.state.geoLocationError || null}</p>
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
        <div className="col-sm-12 col-sm-offset-2">
        <p className='text-red-variant1'>{errorMessage}</p>
        </div>
      </div>
    );
  }
});

export default MyAppForm;