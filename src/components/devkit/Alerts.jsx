import React from 'react';
import AlertIcon from 'material-ui/svg-icons/alert/warning';
import VerifiedUser from 'material-ui/svg-icons/action/verified-user';
import {Alert} from 'fabric-ui';


function sampleCardContent1() {
    return (
        <div className="row text-white-base">
            <div className="col-xs-1">
                <VerifiedUser className='text-white-base pull-left' style={{ height: '40px', width: '40px' }}/>
            </div>
            <div className="col-xs-11">
                    <h4 className="font-thin  no-margins">
                        Store 11100 | Dusseldorf
                    </h4>
                    <span>Store has been activated. No more changes are possible now.</span>
            </div>
        </div>
    )
}

function sampleCardContent2() {
    return (
        <div className="row">
            <div className="col-xs-1">
                <AlertIcon className='text-white-base' style={{ height: '40px', width: '40px' }}/>
            </div>
            <div className="col-xs-11">
                <div className='pull-left text-white-base'>
                    <h4 className="font-thin  no-margins">
                        3 new errors reported in last 2 days.
                    </h4>
                    <span>The cause of error seems to be server overload.</span>
                </div>
            </div>
        </div>
    )
}

export default class Alerts extends React.Component {

    render() {
        return (
            <div>
                <h2 className='font-thin'>Alerts <small></small></h2>
                <div className='row'>
                    <div className='col-xs-12'>
                         <Alert success={true} getContent={sampleCardContent1}/>
                    </div>
                    <div className='col-xs-12'>
                        <Alert warning getContent={sampleCardContent2}/>
                    </div>
                    
                </div>
                <br/>
            </div>
        )

    }
}