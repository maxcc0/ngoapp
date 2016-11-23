import React from 'react';
 import Formsy from 'formsy-react';
 import $ from 'jQuery';
 
  const MyAppForm = React.createClass({
    getInitialState() {
      return {
        canSubmit: false
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
        $.post("/api/pledge", {data: model}, function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      });
      console.log(model)
    },

    render() {
      return (
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <MyOwnInput name="name" label='Name' required/>
           <MyOwnInput name="address"  label='Address' required/>
            <MyOwnInput name="email" label='Email'  validations="isEmail" validationError="This is not a valid email"/>
             <MyOwnInput name="contact" label='Contact#'   required/>
              <MyOwnInput name="contact_alternate" label='Alternate Contact#'/>
               <MyOwnInput name="donation_type" label='Donate' required/>
          <button type="submit" className="btn btn-lg yellow-bg-v2" disabled={!this.state.canSubmit}>Confirm</button>
        </Formsy.Form>
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
            <input className="col-sm-2 form-control" type="text" onChange={this.changeValue} value={this.getValue()}/>
          </div>
          
          <span>{errorMessage}</span>
        </div>
      );
    }
  });

export default MyAppForm;