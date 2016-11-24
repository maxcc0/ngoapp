import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import DoneIcon from 'material-ui/svg-icons/action/check-circle';
import ProblemIcon from 'material-ui/svg-icons/content/report';
import Assignment from 'material-ui/svg-icons/action/assignment-ind';

const favoritesIcon = <FontIcon className="material-icons" >assignment_ind</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div className='text-center'>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
         <BottomNavigationItem
            label="Assigned"
            icon={<Assignment style={{margin: 'auto'}}/>}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Picked"
            icon={<DoneIcon style={{margin: 'auto'}}/>}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Problem"
            icon={<ProblemIcon style={{margin: 'auto'}}/>}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default BottomNavigationExampleSimple;