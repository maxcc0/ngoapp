import React, { PropTypes, Component } from 'react';
import Dialog from '../shared/overlays/SimpleDialog'

function trigger() {
    return <button type="button"  className="btn btn-block yellow-bg-v2 btn-lg">Accept</button>
}

function renderBrand() {
    return <img src={require("../../assets/images/logo_ngo.png")} style={{marginLeft: '10px'}} className="brand-logo" /> 
}

function getTitle() {
    return (
        <h4 className='font-thin no-margins text-center'>{renderBrand()} <div style={{display: 'inline-block'}} className=' text-center'>Volunteer Drop Route COnfirmation</div></h4>
    )
}

var Modals = React.createClass({
    handleConfirm() {
        this.props.assignRoute();
    },

    handleCancel() {
    },

    render: function () {
        const message = <h4 className='text-muted font-thin no-borders'>The addresses shown will be assigned to you for pickup.</h4>
        return (
            <Dialog trigger={trigger} ref='routeConfirmDialog'
                autoScrollBodyContent={true}
                handleConfirm={this.handleConfirm}
                handleCancel={this.handleCancel}
                title={getTitle()}
                message={message}/>
            
        );
    }

});

export default Modals;