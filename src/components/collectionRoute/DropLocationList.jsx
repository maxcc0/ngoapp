    import React, {PropTypes} from 'react';
    import PlaceIcon from 'material-ui/svg-icons/maps/place';


    export default class DropLocationList extends React.Component {

        render() {
            let props = this.props;

            return (
                <div className=''>
                    <a type="type"  href="http://maps.google.com/maps?saddr=New+York&daddr=San+Francisco" 
                    className="btn btn-primary-dm btn-block btn-default">Start Navigation</a>
                    
                    <h4 className='font-thin card-title '>Donor Addresses</h4>
                    <p><a href="geo:50,10">Location 50/10</a></p>
                    <p><a href="geo:Vienna">Location Vienna</a></p>
                    <p><a href="geo:?z=5&q=New+York">Zoom 5, Search for New York</a></p>
                    <p><a href="geo:?q=San+Francisco&z=15">Zoom 15, Search for San Francisco</a></p>
                    <p><a href="google.navigation:q=San+Francisco">Navigation to San Francisco</a></p>
                    <p><a href="google.navigation:q=50,10">Navigation to 50/10</a></p>
                    <p><a href="http://maps.google.com/maps?saddr=New+York&daddr=San+Francisco">Route New York--> San Francisco</a></p>
                    <p><a href="http://maps.google.com/maps?saddr=50,10&daddr=50,20">Route 50/10 --> 50/20</a></p>
                </div>
            )
        }
    }