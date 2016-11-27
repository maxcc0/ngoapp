import React, {PropTypes, Component} from 'react';
import _ from 'lodash';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));


export default class DirectionsExample extends Component {

  state = {
    // origin: new google.maps.LatLng(18.5789564 , 73.683705),
    // destination: new google.maps.LatLng(28.5789564, 73.683705),
    origin: null,
    destination: null,
    waypoints: [],
    directions: null
  }
  componentWillReceiveProps(np) {
    const DirectionsService = new google.maps.DirectionsService({ draggable: true });
    if (np.origin && np.dest) {
    DirectionsService.route({
      origin: np.origin,
      destination: np.dest,
      waypoints: np.waypoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
        console.log(result)
        var route = result;
      } else {
        console.error(`error fetching directions ${result}`);
        console.log(result);
    }

    });  }
  }
  componentDidMount() {
    // const DirectionsService = new google.maps.DirectionsService({ draggable: true });
    // // if (this.props.origin && this.props.dest) {
    // //   DirectionsService.route({
    // //     origin: this.props.origin,
    // //     destination: this.props.dest,
    // //     //waypoints: this.props.waypoints,
    // //     travelMode: google.maps.TravelMode.DRIVING,
    // //   }, (result, status) => {
    // //     if (status === google.maps.DirectionsStatus.OK) {
    // //       this.setState({
    // //         directions: result,
    // //       });
    // //     } else {
    // //       console.error(`error fetching directions ${result}`);
    // //     }
    // //   });
    // // }

  }

  render() {
    if(google) {
    return (
      <DirectionsExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        center={this.state.origin}
        directions={this.state.directions}
      />
    )
    }

  }
}