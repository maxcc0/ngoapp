import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '../shared/overlays/SimpleDialog'
import Form from './LoginForm';
import $ from 'jQuery';
import { browserHistory } from 'react-router'

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
        $.ajax({
            type: 'post',
            data: { data: model },
            url: 'https://www.socialpixe.com/socialpixe/react/login.php',
            success: function (response) {
                alert(response);
            }, error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                cb(msg)
            }
        })
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
        browserHistory.push('/pickup')
        if(err) {
           return this.setState({loginError: 'Failed to login. ' + err})
        }
        this.context.router.pushState(null, '/#/pickup');  
    },

    render: function () {
        return (
            <Dialog trigger={trigger}
                handleConfirm={this.handleConfirm}
                handleCancel={this.handleCancel}
                title={getTitle() }>
                <Form handleLogin={this.handleLogin}/>
                <p className="card-text text-center text-red-variant1">{this.state.loginError || null}</p>
                <p className="card-text text-center text-muted"><small>Become a part of the intiative and contribute.</small></p>
            </Dialog>
        );
    }

});

export default Modals;