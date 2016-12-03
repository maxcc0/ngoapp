import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '../shared/overlays/SimpleDialog'
import Form from './SignupForm';
 import webApi  from '../../actions/api'
function trigger() {
    return <button type="submit" className="btn btn-block btn-outline btn-white btn-default btn-lg">Signup</button>
}

function renderBrand() {
    return <img src={require("../../assets/images/logo_ngo.png") } style={{ marginLeft: '10px' }} className="brand-logo" />
}

function getTitle() {
    return (
        <h4 className='font-thin no-margins text-center'>{renderBrand() } <div style={{ display: 'inline-block' }} className=' text-center'>Signup!! Become a volunteer</div></h4>
    )
}

var Modals = React.createClass({
        getInitialState() {
      return {
        signupError: null
      }
    },
    handleConfirm(model) {
        const self = this;
        console.log(this)
        webApi.signup(model, function (err, data) {
            if (err) {
                return self.setState({ signupError: err })
            }
           self.refs.signup.handleClose();
            self.props.handleLogin();

        })
    },

    handleCancel() {
        alert('cancel button pressed')
    },

    render: function () {
        return (
            <Dialog trigger={trigger} ref='signup'
                handleConfirm={this.handleConfirm}
                handleCancel={this.handleCancel}
                hideActions={true}
                autoScrollBodyContent={true}
                title={getTitle() }>
                <Form handleConfirm={this.handleConfirm}/>
                <p className="card-text text-center text-red-variant1">{this.state.signupError || null}</p>
                <p className="card-text text-center text-muted"><small>Become a part of the intiative and contribute.</small></p>
            </Dialog>
        );
    }

});

export default Modals;