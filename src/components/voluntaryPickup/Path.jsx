import React, {PropTypes} from 'react';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';
import GeoSuggestAddress from '../shared/form-fields/GeoSuggest';
import Formsy from 'formsy-react';




export default class DropLocationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editAddress: false };
        this.setGeoLocation = this.setGeoLocation.bind(this);
    }
    componentWillReceiveProps() {
        this.setState({ editAddress: false });
    }
    setGeoLocation(location) {
        //location.coords = {};
        const geoLocation = {
            coords: {
                latitude: location.location.lat,
                longitude: location.location.lng
            },
            formatted_address: location.label
        }
        // location.coords.latitude = location.location.lat;
        // location.coords.longitude =location.location.lng;
        this.props.setGeoLocation(geoLocation);
        this.setState({ editAddress: false });
    }

    renderContent() {
        if (this.state.editAddress) {
            return (
                <Formsy.Form >
                    <GeoSuggestAddress required name="address"
                        setGeoLocation={this.setGeoLocation}
                        getMyGeoLocation={this.getMyGeoLocation}
                        placeholder='Start typing the address'
                        /></Formsy.Form >
            )
        }
        return <span className='text-muted'>{this.props.startAddress || null}</span>
    }
    render() {
        let props = this.props;

        return (
            <div className=''card-block>
                <div className='row'>
                    <div className='col-xs-10'>
                        <div>
                            <IconButton style={{ height: '34px', padding: '0' }} tooltipPosition="top-center" tooltip="Fetch My Location" onClick={this.props.getMyGeoLocation}>
                                <PlaceIcon style={{ verticalAlign: 'bottom' }} color={'#ff7e82'}/>
                            </IconButton>

                        </div>
                        <div>
                            Your Location
                        </div>
                    </div>
                    <div className='col-xs-2'>
                        <div>
                            <IconButton tooltip="Change your address" onClick={() => this.setState({ editAddress: true }) }>
                                <EditIcon color={'#666'}/>></IconButton>
                        </div>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-xs-12'>
                        {this.renderContent.call(this) }
                    </div>
                </div>
            </div>
        )
    }
}