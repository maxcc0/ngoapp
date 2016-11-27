import React from 'react';
import Formsy from 'formsy-react';
import $ from 'jQuery';
import _ from 'lodash';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import IconButton from 'material-ui/IconButton';
import {fetchAddress, getGeoLocation, fetchCoords} from '../../utils/Location';
import webapi from '../../actions/api';

function _savePledge(data, cb) {
  webapi.createPledge(data, cb);
}

import NavigationIcon from 'material-ui/svg-icons/maps/navigation';
const MyAppForm = React.createClass({
  getInitialState() {

    return {
      canSubmit: false,
      geoLocation: null,
      address: '',
      geoLocationError: null,
      donation_options: [
        {key: 'toys', value: 'Toys'},
        {key: 'clothes', value: 'Clothes'},
        {key: 'bns', value: 'Books & Stationery'},
         {key: 'fooditems', value: 'Food Items'},
            {key: 'meds', value: 'Unexpired Medicines'}
      ]
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
  handleSavePledgeResponse(err, data){
    if(err) {
      alert('Something went wrong. Could not submit request.')
    }
    alert('Request Submitted. Thanks for your contribution.')
  },
  
  submit(model) {
    console.log(model)
    console.log('submitting form')
    const self = this;
      model.geoLocation =self.state.geoLocation;
      _savePledge(model, self.handleSavePledgeResponse)
    // fetchCoords(model.address, function (err, data) {
    //   if (err || _.isEmpty(data)) {
    //     return self.setState({ geoLocationError: 'We could not locate your address. Please try changinga few keywords address.' })
    //   }
    //   if (data[0].formatted_address.toLowercase() != model.address.toLowercase()) {
    //     return self.setState({ geoLocationError: 'We could not locate your address. Please try changinga few keywords address.' })
    //   }
    //   model.geoLocation =self.state.geoLocation;
    //   _savePledge(model, self.handleSavePledgeResponse)
    // })

  },
  handleAddress(err, address) {
    if (err) {
      this.setState({ geoLocationError: 'Could not fetch your location from geo services. Please add your address.' })
      return
    }
//alert(address);
    this.setState({ address: address });
  },
  handleGeoLocation(err, data) {
    if (err) {
      this.setState({ geoLocationError: err.message || 'Something went wrong while fetching your location.' })
      return
    }
    this.setState({ geoLocation: data });
    //alert(data.coords.latitude + ' ' + data.coords.longitude);
    fetchAddress(data.coords.latitude, data.coords.longitude, this.handleAddress)
  },

  getMyGeoLocation() {
    getGeoLocation(this.handleGeoLocation)
  },

  render() {
    return (
      <Formsy.Form onValidSubmit= { this.submit } onValid= { this.enableButton } onInvalid= { this.disableButton } >
        <MyOwnInput name="name" label='Name' required/>

        <Address required name="address" getMyGeoLocation={this.getMyGeoLocation} error={this.state.geoLocationError} placeholder='Please hit the icon for fetching address' value={this.state.address} label='Address' required/>
        <MyOwnInput name="email" label='Email'  validations="isEmail" validationError="This is not a valid email"/>
        <MyOwnInput name="contact" label='Contact#'   required/>
        <MyOwnInput name="contact_alternate" label='Alternate Contact#'/>
        <Select required name='donation_type' options={this.state.donation_options} value={this.state.donation_options[0].value} label='Donate'/>
        <div className="form-group row text-left">
          <div className='col-sm-2 '>
          </div>
          <div className='col-sm-4 '>
            <button type="submit" className="btn btn-block btn-lg yellow-bg-v2" disabled={!this.state.canSubmit}>Confirm</button>
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

          <input className="col-sm-2 form-control"  placeholder={this.props.placeholder || null} type="text" onChange={this.changeValue} value={this.getValue() }/>
        </div>
        <div className="col-xs-12 col-sm-offset-2">
          <p className='text-red-variant1'>{errorMessage}</p>
        </div>
      </div>
    );
  }
});


const Address = React.createClass({

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
    const errorMessage = this.getErrorMessage() || this.props.error;

    return (
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">{this.props.label}</label>
        <div className="col-sm-10">
        <div className='row'>
          <div className='col-xs-10'>
            <input className="form-control"   placeholder={this.props.placeholder || null} type="text" onChange={this.changeValue} value={this.getValue() }/>
          </div>
          <div className='col-xs-2'>
            <IconButton style={{height: '34px', padding: '0'}} tooltipPosition="top-center" tooltip="Fetch My Location" onClick={this.props.getMyGeoLocation}>
              <PlaceIcon style={{ verticalAlign: 'bottom' }} color={'#ff7e82'}/>
            </IconButton>
          </div></div>



        </div>
        <div className='col-sm-2 '>
        </div>
        <div className="col-sm-10">
          <p className='text-red-variant1'>{errorMessage}</p>
        </div>
      </div>
    );
  }
});
const Select = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue(event) {
        this.setValue(event.currentTarget.value);
    },
    // componentWillReceiveProps(np) {
    //     const v = np.options && np.options[0].address;
    //     this.setValue(v)
    // },
    render() {
        const className = 'form-group' + (this.props.className || ' ') +
            (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
        const errorMessage = this.getErrorMessage();
        const helpMessage = this.props.helpMessage || null;

        const options = this.props.options.map((option, i) => (
            <option key={option.key + option.value} value={option.value}>
                {option.value}
            </option>
        ));

        return (
                <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">{this.props.label}</label>
        <div className="col-sm-10">

         <select className='form-control' name={this.props.name} onChange={this.changeValue} value={this.getValue() }>
                    {options}
                </select></div>
        <div className="col-xs-12 col-sm-offset-2">
        <span className='help-block text-muted'>{helpMessage}</span>
          <p className='text-red-variant1'>{errorMessage}</p>
        </div></div>
        );
    }

});

export default MyAppForm;