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
          $.ajax({

      type: 'post',
      data: { DATAasdasd: model },
      url: 'https://www.socialpixe.com/socialpixe/react/signup.php',
      success: function (response) {
        alert(response);
      }
    })
    },

    render() {
      return (
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <MyOwnInput name="name" label='Name' required/>
            <MyOwnInput name="email" label='Email'  validations="isEmail" validationError="This is not a valid email"/>
             <MyOwnInput name="contact" label='Contact#'   required/>
             <MyOwnInput name="password" label='password'  type='password' required/>
             <div className="form-group row">
          <div className="col-sm-6 col-sm-offset-3">
          <button type="submit" className=" col-sm-6 col-sm-offset-3 btn btn-block btn-lg yellow-bg-v2 pull-right" disabled={!this.state.canSubmit}>Signup</button>
          </div></div>
          
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
          <div className="col-sm-6 col-sm-offset-3">
            <input className="form-control" placeholder={this.props.label} type="text" onChange={this.changeValue} value={this.getValue()}/>
            <p className='help-block'>{errorMessage}</p>
          </div>
          
          
        </div>
      );
    }
  });

export default MyAppForm;