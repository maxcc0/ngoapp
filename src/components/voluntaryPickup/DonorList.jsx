import React, {PropTypes} from 'react';
import NavigationIcon from 'material-ui/svg-icons/maps/navigation';
import PickupActions from './PickupActions';
import _ from 'lodash';

function encode(str) {
    return str.split(' ').join('+'); 
}

function _getBaseUrl(dropOffLocation) {
    return 'http://maps.google.com/maps?f=d&source=s_d&saddr=My+Location&daddr=' 
}
// function _makeUrl (dropOffLocation) {
//     if(!_.isString(dropOffLocation)) {
//         return null
//     }
//     const baseUrl = 'http://maps.google.com/maps?saddr=My+Location&daddr='
//     const enncoded = encode(dropOffLocation);
//     return baseUrl + enncoded
// }

export default class DropLocationList extends React.Component {
    getMapNavigationUrl() {
        let baseUrl = _getBaseUrl(this.props.dropOffLocation)
        //direction will me done only for assigned items
    //     const assignedItems = _.filter(this.props.data, function(item){
    //   return item.donation_status==='assigned' || item.donation_status==='picked'
    // })

        _.forEach(this.props.data, function (item) {
           // console.log(item)
            baseUrl = baseUrl + encode(item.donor_address) + '+to:'
        })
        return baseUrl + encode(this.props.dropOffLocation)
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
               <div className='text-muted text-left text-center'>{props.message}</div>
              
                  <a href={navigationUrl} target="_blank"
                        >Start Navigation<NavigationIcon style={{ verticalAlign: 'bottom' }} color={'#ff7e82'}/></a>  
                </div>}
                
                <h4 className='font-thin card-title'>Donor Addresses ({donors.length})</h4>
                {donors}
                {props.hasAssigned && <AssignmentSummary {...props}/>}
            </div>
        )
    }
}
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
import CallIcon from 'material-ui/svg-icons/communication/call';
import PlaceIcon from 'material-ui/svg-icons/maps/person-pin-circle';
class DonorItem extends React.Component {

    render() {
        let props = this.props;
        const donor = props.donor;
        let donation_type = donor.donation_type;
        if(isJson(donor.donation_type)) {
            donation_type = _.join(JSON.parse(donation_type), ' | ');
        }
        
        return (
            <div style={{borderBottom: '1px solid #666', borderBottomStyle: 'dashed'}} className='card-title' >
                <PlaceIcon color={'#ff7e82'}/>
                <div> {donor.donor_name} </div>
                <div> <span className='text-muted'>Pledge: {donation_type} </span></div>
                <div> <small>{donor.donor_address} </small></div>
                <div><CallIcon style={{ verticalAlign: 'bottom' }}
                    color={'#008489'}/><small>{donor.donor_contact}  { donor.donor_alternate_contact} </small></div>
                 <br/>
                {(donor.donation_status === 'assigned' || donor.donation_status === 'picked') && <PickupActions {...props}/>}

            </div>
        )
    }
}

//   <div className='text-group-item'>
//                         <div><h3 className='text-yellow-variant1'>{assignedCount-pickedCount}</h3> </div>
//                         <div className='text-muted'>Not Picked</div>
//                     </div>
class AssignmentSummary extends React.Component {

    render() {
        let props = this.props;
 
        const assignedCount = _.filter(props.data, {donation_status: 'assigned'}).length;
        const pickedCount = _.filter(props.data, {donation_status: 'picked'}).length;
        return (
            <div>
                <div className='card-block bg-blue-variant3 text-white-base' >
                        Your Assignment Summary
                </div>
                <div className='text-group text-center'>
                    <div className='text-group-item'>
                        <div><h3 className='text-blue-variant3'>{assignedCount}</h3> </div>
                        <div className='text-muted'>Assigned</div>
                    </div>
                    <div className='text-group-item'>
                        <div><h3 className='text-green-variant1'>{pickedCount}</h3> </div>
                        <div className='text-muted'>Picked</div>
                    </div>
                  
                </div>
                <small className='text-muted help-block'>The unpicked items will be set to open status.</small>
                <button type="button" onClick={this.props.submitAssignment} className="btn btn-block yellow-bg-v2 btn-lg">Submit</button>
            </div>
        )
    }
}

// class PledgeTabs extends React.Component {

//     render() {
//         const props = this.props;
//         return (
//             <Tabs>
//                 <Tab label={<Badge
//                     badgeContent={props.openPledgesJsx.length}
//                     primary={true}
//                     badgeStyle={{top: 8, right: 2}}
//                     >
//                     New
                    
//                 </Badge>}>
//                 <br/>
//                 <Accept/>
//                     {props.openPledgesJsx}
//                 </Tab>
//                 <Tab label={<Badge
//                     badgeStyle={{top: 8, right: 2}}
//                     badgeContent={props.assignedPledgesJsx.length}
//                     >
//                     Assigned
//                 </Badge>}>
//                 <br/>
//                     {props.assignedPledgesJsx}
//                 </Tab>
//             </Tabs>
//         )

//     }
// }