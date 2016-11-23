import React from 'react';
import { Link } from "react-router";
import Map from './Map'
import $ from 'jQuery';
function _fetchPickups(cb) {
    $.ajax({

      type: 'post',
      data: {  },
      url: 'https://www.socialpixe.com/socialpixe/react/fetchPickups.php',
      success: function (response) {
        cb(null, response)
      }
    })


}
var PickupPageLayout = React.createClass({
  getInitialState() {
    return {
      origin: null,
      dest: null,
      drops: null,
    }
  },
  handlePickups(err, data) {
    if(err) {
      return
    }
    console.log(data);
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
    _fetchPickups(this.handlePickups)
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