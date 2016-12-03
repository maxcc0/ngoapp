import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import DoneIcon from 'material-ui/svg-icons/action/check-circle';
import ProblemIcon from 'material-ui/svg-icons/content/report';
import Assignment from 'material-ui/svg-icons/action/assignment-ind';
import Open from 'material-ui/svg-icons/av/fiber-new';
const favoritesIcon = <FontIcon className="material-icons" >assignment_ind</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const actionsMap = {
  'assigned': 0,
  'picked': 1,
  'problem': 2

}
/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {

  constructor(props) {
    super(props);
    const index = actionsMap[props.donor.donation_status];
    this.state = {selectedIndex: index};
  }
          // <BottomNavigationItem
          //   label="Problem" disabled
          //   icon={<ProblemIcon style={{margin: 'auto'}}/>}
          //   onTouchTap={() => this.select(3)}
          // />
  //select = (index) => this.setState({selectedIndex: index});
  select(index) {
    const status = _.findKey(actionsMap, function(item){
      return item === index;
    });
    this.props.updateDonationStatus(this.props.donor, status  );
    this.setState({selectedIndex: index});
  }
  componentWillReceiveProps(np){
    const index = actionsMap[np.donor.donation_status];
    this.setState({selectedIndex: index})
  }
  render() {
    console.log(this.state.selectedIndex)
    this.select = this.select.bind(this);
    const pledge = this.props.donor;
        //           <BottomNavigationItem
        //     label="Open" disabled
        //     icon={<Open style={{margin: 'auto'}}/>}
        //     onTouchTap={() => this.select(0)}
        //   />
        //  <BottomNavigationItem
        //     label="Assigned" disabled
        //     icon={<Assignment style={{margin: 'auto'}}/>}
        //     onTouchTap={() => this.select(1)}
        //   />
    return (
      <div className='text-center'>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem disabled
             label="Assigned"
             icon={<Assignment style={{margin: 'auto'}}/>}
             onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Picked"
            icon={<DoneIcon style={{margin: 'auto'}}/>}
            onTouchTap={() => this.select(1)}
          />

        </BottomNavigation>
      </div>
    );
  }
}

export default BottomNavigationExampleSimple;