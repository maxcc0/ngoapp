import React from 'react';
import { Link } from "react-router";
import Map from './Map'

var PickupPageLayout = React.createClass({
  getInitialState() {
    return {
      origin: null,
      dest: null,
      drops: null,
    }
  },
  componentDidMount() {
    const pathname = this.props.location.pathname;
    const params = pathname.split('/')
    const from = params[1];
    const to = params[2];
    this.setState({
      origin: params[1],
      dest: params[2]
    })
    console.log('mounting collection')
  },
  render: function () {
    return (
      <div key="collection" className="reports-page">

        <div className='row pledge-logo-section'>
          <div className='col-md-4 bg-white-base'>
            <img src={require("../../assets/images/logo_ngo.png") } width='200px'/>
          </div>

          <div className='col-md-8' style={{ height: 400 }}>
            <Map/>
          </div>
        </div>
      </div>
    );
  }

});

export default PickupPageLayout;