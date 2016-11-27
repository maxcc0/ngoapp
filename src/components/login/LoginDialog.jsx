import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '../shared/overlays/SimpleDialog'
import Form from './LoginForm';
import $ from 'jQuery';
import { browserHistory, Router } from 'react-router'
import webApi from '../../actions/api';
var transitionTo = Router.transitionTo;



function trigger() {
    return <button type="submit" block className="btn btn-block btn-outline btn-white btn-default btn-lg">Login</button>
}

function renderBrand() {
    return <img src={require("../../assets/images/logo_ngo.png") } style={{ marginLeft: '10px' }} className="brand-logo" />
}

function getTitle() {
    return (
        <h4 className='font-thin no-margins text-center'>{renderBrand() } <div style={{ display: 'inline-block' }} className=' text-center'>Login</div></h4>
    )
}
function _login(model, cb) {
    webApi.login(model, cb);
}

var Modals = React.createClass({
    getInitialState() {
        return {
            loginError: ''
        }
    },

    handleLogin(model) {
        _login(model, this.handleResponse)
    },

    handleResponse(err, data) {
        if(err || data === 404) {
           return this.setState({loginError: 'Failed to login. ' + err})
        }
        console.log('logged in');
        console.log(data)

$('#checkSession').text(data); 

        
        this.refs.login.handleClose();
        this.props.handleLogin();  
    },

    render: function () {
        return (
            <Dialog trigger={trigger} ref='login'
                handleConfirm={this.handleConfirm}
                handleCancel={this.handleCancel}
                autoScrollBodyContent={true}
                hideActions={true}
                title={getTitle() }>
                <Form handleLogin={this.handleLogin}/>
                <p className="card-text text-center text-red-variant1">{this.state.loginError || null}</p>
                <p className="card-text text-center text-muted"><small>Become a part of the intiative and contribute.</small></p>
            </Dialog>
        );
    }

});

export default Modals;