import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '../shared/overlays/SimpleDialog'
import Form from './SignupForm';

function trigger() {
    return <button type="submit"  className="btn btn-block btn-primary-dm btn-default btn-lg">Select Drop Location</button>
}

function renderBrand() {
    return <img src={require("../../assets/images/logo_ngo.png")} style={{marginLeft: '10px'}} className="brand-logo" /> 
}

function getTitle() {
    return (
        <h4 className='font-thin no-margins text-center'>{renderBrand()} <div style={{display: 'inline-block'}} className=' text-center'>Voluneer Drop Route Confirmation</div></h4>
    )
}

var Modals = React.createClass({
    handleConfirm() {
        alert('confirm button pressed')
    },

    handleCancel() {
        alert('cancel button pressed')
    },
    handleSubmit() {
        this.refs.routeConfirmDialog.handleClose();
    },
    render: function () {
        return (
            <Dialog trigger={trigger} ref='routeConfirmDialog'
                autoScrollBodyContent={true}
                handleConfirm={this.handleConfirm}
                handleCancel={this.handleCancel}
                title={getTitle()}>
                <h2 className="card-title text-center no-margins font-thin">Thank you for your help!</h2>
                <h4 className='font-thin card-title no-margins'>Choose a drop off location</h4>
                <br/>
            <Form {...this.props} handleSubmit={this.handleSubmit}/>
            <p className="card-text">Hey Volunteer!! We thank you for your time and support.</p>
            </Dialog>
        );
    }

});

export default Modals;