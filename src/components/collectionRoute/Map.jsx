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
    origin: new google.maps.LatLng(18.5789564 , 73.683705),
    destination: new google.maps.LatLng(28.5789564, 73.683705),
    directions: null,
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService({ draggable: true });

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  render() {
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
    );
  }
}