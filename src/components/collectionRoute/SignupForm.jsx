import React from 'react';
import $ from 'jQuery';
import _ from 'lodash';
import {browserHistory, Link} from 'react-router';
import {fetchAddress, getGeoLocation} from '../../utils/Location';
// ...

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};
function assignDropLocation() {


}
function fetchDropLocations(cb) {
      $.ajax({
      type: 'get',
      data: {  },
      url: 'https://www.socialpixe.com/socialpixe/react/droplocations.php',
      success: function (response) {
           cb(response, null)
      }
    })
    // const data = [
    //   {addressid: 1, address: 'Flat 303, Sayali Niwas, Airoli, Navi Mumbai'},
    //   {addressid: 2, address: 'Flat 303, Sayali Niwas, Airoli, Navi Mumbai'},
    //   {addressid: 3, address: 'Flat 303, Sayali Niwas, Airoli, Navi Mumbai'},
    //   {addressid: 4, address: 'Flat 303, Sayali Niwas, Airoli, Navi Mumbai'},
    //   {addressid: 5, address: 'Flat 303, Sayali Niwas, Airoli, Navi Mumbai'},
    //   {addressid: 6, address: 'Flat 303, Sayali Niwas, Airoli, Navi Mumbai'}
    // ]
    //cb(data, null)
}

var PledgeForm = React.createClass({
  getInitialState() {
    return {
      dropLocations: [],
      selectedDL: null
    }
  },
  handleDropLocations(data, status) {
    console.log(data);
    console.log('data fetched successfully')
    const parsed = JSON.parse(data);
    //set drop locations fetched 
    this.setState({dropLocations: parsed, selectedDL: parsed.length && parsed[0].addressid});
  },
  
  componentDidMount() {
    fetchDropLocations(this.handleDropLocations)
  },
  
  handleChange(e, v) {
    this.setState({selectedDL: v});
  },
  handleSubmit() {
    this.props.fetchPickups(this.state.selectedDL);
    this.props.handleSubmit();
  },

  render: function () {
    const locations = [];
    // if(_.isEmpty(this.state.dropLocations)) {
    //   return <h4 className='font-thin'>No drop locations found :(</h4>;
    // }
    
    _.forEach(this.state.dropLocations, function(item){
      locations.push(<RadioButton key={item.addressid + '_' + _.random(0, 100)}
        value={item.addressid}
        label={item.address}
        style={styles.radioButton}
      />)

    })
    return (
      <div className='row'>
          <div className='col-xs-12'>
        <form onSubmit={this.handleSubmit}>
            <RadioButtonGroup defaultSelected={this.state.selectedDL} 
              name="notRight" labelPosition="left" className='text-left' onChange={this.handleChange}>
                  {locations}
            </RadioButtonGroup>
            <button  type='button' onClick={this.handleSubmit} className="btn btn-block btn-lg yellow-bg-v2">Confirm</button>
        </form>
          </div>
      </div>
    );
  }

});

export default PledgeForm;