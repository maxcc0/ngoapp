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
    0: 'created',
    1: 'assigned',
    2: 'collected',
    4: 'problem'

}
/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  //select = (index) => this.setState({selectedIndex: index});
  select(index) {
    this.props.updateDonationStatus(this.props.donor, actionsMap[index])  
    this.setState({selectedIndex: index});
  }
  componentWillReceiveProps(np){
    this.setState({selectedIndex: _.findKey(np.donor, np.donor.donation_status) || null})
  }
  render() {
    this.select = this.select.bind(this);
    return (
      <div className='text-center'>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
            label="Open" disabled
            icon={<Open style={{margin: 'auto'}}/>}
            onTouchTap={() => this.select(0)}
          />
         <BottomNavigationItem
            label="Assigned" disabled
            icon={<Assignment style={{margin: 'auto'}}/>}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Picked" disabled
            icon={<DoneIcon style={{margin: 'auto'}}/>}
            onTouchTap={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Problem" disabled
            icon={<ProblemIcon style={{margin: 'auto'}}/>}
            onTouchTap={() => this.select(3)}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default BottomNavigationExampleSimple;