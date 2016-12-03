import React, {PropTypes, Component} from 'react';
import _ from 'lodash';
import { withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from "react-google-maps";

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.center}
    >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

const SimpleMapGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.defaultCenter}
  >
  <Marker
      defaultPosition={props.defaultCenter}
      title="Volunteer"
      label='V'
    />
    </GoogleMap>
));

export default class Directions extends Component {

  state = {
    origin: null,
    directions: null,
    message: null,
    defaultCenter: null //will be users location
  }

  init() {
    this.setState({
    origin: null,
    directions: null,
    message: null,
    defaultCenter: null //will be users location
  })
  }
  componentWillReceiveProps(np) {
    this.init.call(this);

    if (np.origin) {
      this.setState({
        defaultCenter:{ lat: np.origin.lat(), lng: np.origin.lng() }
      })
    }

    let message = null;
    const DirectionsService = new google.maps.DirectionsService({ draggable: true });
    if (np.origin && np.dest && np.waypoints) {
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
            origin: np.origin
          });
          var route = result;
        } else {
          if (status == 'ZERO_RESULTS') {
            message = 'No route could be found between the origin and destination.';
          } else if (status == 'UNKNOWN_ERROR') {
            message = 'A directions request could not be processed due to a server error. The request may succeed if you try again.';
          } else if (status == 'REQUEST_DENIED') {
            message = 'This webpage is not allowed to use the directions service.';
          } else if (status == 'OVER_QUERY_LIMIT') {
            message = 'The webpage has gone over the requests limit in too short a period of time.';
          } else if (status == 'NOT_FOUND') {
            message = 'At least one of the origin, destination, or waypoints could not be geocoded.';
          } else if (status == 'INVALID_REQUEST') {
            message = 'The DirectionsRequest provided was invalid.';
          } else {
            message = "There was an unknown error in your request. Requeststatus: nn" + status;
          }
          this.setState({
            message: message
          })
        }

      });
    } else {
      this.setState({
            directions: null
          })
    }
  }
  componentDidMount() {

  }

  render() {
    if(this.state.message){
      return <div className='card-block'>
      <h4 className='font-thin text-center text-white-base'>{this.state.message}</h4></div>
    }

    //todo if direction is null, maybe show an empty map
    if(!this.state.directions && this.state.defaultCenter){
      return ( 
        <SimpleMapGoogleMap
          containerElement={
          <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          defaultCenter={this.state.defaultCenter}
      />)
    }

    if (google) {
      return (
        <DirectionsExampleGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          message = {this.state.message}
          directions={this.state.directions}
          />
      )
    }

  }
}