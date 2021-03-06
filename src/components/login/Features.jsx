
import React from 'react';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import LoopIcon from 'material-ui/svg-icons/av/loop';
import LaptopIcon from 'material-ui/svg-icons/device/devices';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import AppsIcon from 'material-ui/svg-icons/navigation/apps';

import RoomIcon from 'material-ui/svg-icons/maps/directions-walk';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import Signup from './SignupDialog';
import Login from './LoginDialog';//<BecomeAVolunteer/>
export default class Features extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                <Pitch {...props}/>
                <JoyOfGiving {...props}/>
                <Benefits/>
            </div>
        )
    }
}
    

class Benefits extends React.Component {


    render() {

        return (
            <section className='bg-white-base text-center'>
                <div className='row feature-section'>
                <h2 className='font-light'> What can you donate?</h2>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Clothes</div>
                            <span className='text-muted feature-desc'>
                                We are willing to take any clothes that you may not wish to use again. However, keep in mind that the clothes you donate are clean and can be used again by someone.
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Books & Stationery</div>
                            <span className='text-muted feature-desc'>
                                You may donate any books that you or your children will not use in the future.  The books should be in a usable condition, i.e., they should not be torn or be missing pages. You may also donate old colors, pencils, pens etc. However, make sure that the pens you donate do have ink left in them.
                            </span>
                        </div>
                    </div>
                </div>
                <div className='row feature-section'>

                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Toys</div>
                            <span className='text-muted feature-desc'>
                                Toys are another item that you can donate. You may donate any toy, there is no age group limit to that, however, please ensure that any toy you donate is not broken or missing any <parts className=""></parts>
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Food Items</div>
                            <span className='text-muted feature-desc'>
                                You may also donate any excess food items. However, please try and ensure that the food you donate is not too old and can still be consumed.</span>
                        </div>
                    </div>

                </div>
                <div className='row feature-section'>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Unexpired Medicines</div>
                            <span className='text-muted feature-desc'>
                                You may also donate unexpired medicines. The medicines should be those that can be obtained without any prescription.</span>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
class Pitch extends React.Component {

    render() {

        return (

            <div className='row feature-section main text-center'>
                <div ><span className='section-header'> <small><small></small></small></span></div>
                <div className='col-md-4'>
                    <div className='card card-block text-center card-primary-dm  card-inverse'>
                        <h2 className='title no-margins'> Welcome Volunteers </h2>
                        <br/><br/><br/><br/>
                        <div className='row text-left'>
                            <div className='col-xs-6'>
                            <Signup {...this.props}/>
                                
                            </div>
                            <div className='col-xs-6 '>
                            <Login {...this.props}/>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                
                <div className='col-md-4 '>
                        <img src={require("../../assets/images/logo_ngo.png") } width='200px'/>
                </div>
                <div className='col-md-4'>
                    <div className='card card-block text-center card-brown-dm  card-inverse'>
                        <h2 className='title no-margins'> Welcome Donors </h2>
                        
                        <br/><br/><br/><br/>
                        <button type="submit" onClick={this.props.handlePledge} className="btn m-75rem btn-lg btn-white btn-outline">
                          Pledge</button>
                    </div>
                </div>
                <form role="form" className='hidden' onSubmit={this.props.handleLogin}>
                    <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Explore Now</button>
                </form>
            </div>
        )
    }
}

class BecomeAVolunteer extends React.Component {
    render() {
        return (
            <div className='row container_1n45xpj'>
                <div className="row text-center">
                    <div className="col-md-8">
                        <br/>
                        <h2 className='font-light'> Want to volunteer?</h2>
                            <br/>
                       <small></small>
                        <br/><br/><br/>
                    </div>
                    <div className='col-md-4'>
                    <br/><br/>
                        <form role="form" onSubmit={this.props.handleLogin}>
                            <button type="button" className="btn btn-white btn-outline btn-lg btn-rounded">Become A Volunteer</button>
                        </form>
                    </div>
                </div>
            </div>

        )

    }
}

class JoyOfGiving extends React.Component {
    render() {
        return (
            <div className='peachu text-muted'>
                <div className="row text-center">
                    <div className="col-md-12">
                        <br/>
                        <h2 className='font-light'> How can you contribute?</h2>
                            <br/>
                       <h4 className='no-margins font-thin'>The art of giving is fathomless. We accept any non-monetary donation that you're willing to let go of to see a smile on someone else's face. Our donations range from wearable clothes you've outgrown to stationery you no longer use. The possibilities are endless. All you need is the will to donate.</h4>
                        <br/><br/><br/>
                    </div>
                </div>
                <br/><br/>
            </div>

        )

    }

}