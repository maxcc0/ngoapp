import Geosuggest from 'react-geosuggest';
import React from 'react';
import Formsy from 'formsy-react';

var GeoSuggestAddress = React.createClass({
  /**
   * Render the example app
   */
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form

  render: function() {
    var fixtures = [
    ];
    const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage() || this.props.error;
        // <div className='col-xs-2'>
        //       <IconButton style={{ height: '34px', padding: '0' }} tooltipPosition="top-center" tooltip="Fetch My Location" onClick={this.props.getMyGeoLocation}>
        //         <PlaceIcon style={{ verticalAlign: 'bottom' }} color={'#ff7e82'}/>
        //       </IconButton>
        //     </div>
    return ( 
      
        <div className="form-group row">
       {this.props.label && <label className="col-sm-2 col-form-label">{this.props.label}</label>}
        <div className={this.props.label? 'col-sm-10': 'col-xs-12'}>
             <Geosuggest style={{width: '100%'}}
             placeholder={this.props.placeholder || null} 
             initialValue={this.props.value || ''}
             country='in' onSuggestSelect={this.onSuggestSelect}
          />
        </div>

        <div className="col-sm-10">
          <p className='text-red-variant1'>{errorMessage}</p>
        </div>
      </div>
    )
  },

  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect: function(suggest) {
     this.setValue(suggest.label);
    this.props.setGeoLocation(suggest);
  }
});

export default GeoSuggestAddress;