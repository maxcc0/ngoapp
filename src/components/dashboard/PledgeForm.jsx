import React from 'react';
import $ from 'jQuery';
import _ from 'lodash';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

function fetchDropLocations(cb) {
      $.ajax({

      type: 'get',
      data: {  },
      url: 'https://www.socialpixe.com/socialpixe/react/droplocations.php',
      success: function (response) {
        alert(response);
      }
    })
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
    //set drop locations fetched 
    this.setState({dropLocations: data});
  },
  componentDidMount() {
    fetchDropLocations(this.handleDropLocations)
  },
  handleChange(e, v) {
    this.setState({selectedDL: v});
    console.log(v);
  },
  render: function () {
    const locations = [];
    _.forEach(this.state.dropLocations, function(item){
      locations.push(<RadioButton
        value={item.locationid}
        label={item.address}
        style={styles.radioButton}
      />)

    })
    return (
      <div className='row'>
          <div className='col-xs-4'>
          <h4 className='font-thin'>Choose a drop off location:</h4>
          </div>
          <div className='col-xs-8'>
        <form>
     <RadioButtonGroup name="notRight" labelPosition="left" className='text-left' onChange={this.handleChange}>
      <RadioButton
        value="reverse"
        label="Address 1"
        style={styles.radioButton}
      />
            <RadioButton
        value="2"
        label="Address 2"
        style={styles.radioButton}
      />
            <RadioButton
        value="3"
        label="Address 3"
        style={styles.radioButton}
      />
                  <RadioButton
        value="4"
        label="Address 4"
        style={styles.radioButton}
      />
                  <RadioButton
        value="5"
        label="Address 5"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
        <div className="form-group row">
          <div className=" text-left col-sm-12">
            <button  className="btn btn-lg yellow-bg-v2">Confirm</button>
          </div>
        </div>
      </form>
          </div>
      </div>
    );
  }

});

export default PledgeForm;