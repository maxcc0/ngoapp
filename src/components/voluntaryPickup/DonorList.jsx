import React, {PropTypes} from 'react';
import NavigationIcon from 'material-ui/svg-icons/maps/navigation';
import PickupActions from './PickupActions';

import _ from 'lodash';
                // <p><a href="geo:50,10">Location 50/10</a></p>
                // <p><a href="geo:Vienna">Location Vienna</a></p>
                // <p><a href="geo:?z=5&q=New+York">Zoom 5, Search for New York</a></p>
                // <p><a href="geo:?q=San+Francisco&z=15">Zoom 15, Search for San Francisco</a></p>
                // <p><a href="google.navigation:q=San+Francisco">Navigation to San Francisco</a></p>
                //<p><a href="http://maps.google.com/maps?saddr=New+York&daddr=San+Francisco">Route New York--> San Francisco</a></p>
function encode(str) {
    return str.split(' ').join('+'); 
}
function _makeUrl (dropOffLocation) {
    if(!_.isString(dropOffLocation)) {
        return null
    }
    const baseUrl = 'http://maps.google.com/maps?saddr=My+Location&daddr='
    const enncoded = encode(dropOffLocation);
    return baseUrl + enncoded
}

export default class DropLocationList extends React.Component {
    getMapNavigationUrl() {
        let baseUrl = _makeUrl(this.props.dropOffLocation)
        _.forEach(this.props.data, function (item) {
            console.log(item)
            baseUrl = baseUrl + '+to:' + encode(item.donor_address)
        })
        return baseUrl;
    }

    render() {
        let props = this.props;
        const navigationUrl = this.getMapNavigationUrl.call(this);

        const donors = [];
        _.forEach(props.data, function (item) {
            donors.push(<DonorItem donor={item} updateDonationStatus={props.updateDonationStatus}/>)
        });

        return (
            <div className=''>
               {navigationUrl && <div className='text-center'>
                    <a href={navigationUrl}
                        >Start Navigation<NavigationIcon style={{ verticalAlign: 'bottom' }} color={'#ff7e82'}/></a>
                </div>}
                
                <h4 className='font-thin card-title'>Donor Addresses ({donors.length})</h4>
                {donors}
                
            </div>
        )
    }
}

import CallIcon from 'material-ui/svg-icons/communication/call';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
class DonorItem extends React.Component {

    render() {
        let props = this.props;
        const donor = props.donor;
        return (
            <div style={{borderBottom: '1px solid #666', borderBottomStyle: 'dashed'}} className='card-title' >
                <PlaceIcon color={'#ff7e82'}/>
                <div> {donor.donor_name} </div>
                <div> <small className='text-muted'>{donor.donor_address} </small></div>
                <div><CallIcon style={{ verticalAlign: 'bottom' }}
                    color={'#008489'}/><small>{donor.donor_contact}  { donor.donor_alternate_contact} </small></div>
                 
                <PickupActions {...props}/>

            </div>
        )
    }
}