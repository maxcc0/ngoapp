import React, { PropTypes, Component } from 'react';
import Charts from './Charts';
import Buttons from './Buttons';
import Forms from './Forms';
import Modals from './Modals';
import Widets from './Widets';
import Notifications from './Notifications';
import {AvatarList, AgileList} from './Lists';
import DataGrid from './data-grid';
import Alerts from './Alerts';
import Cracker from './Cracker';
import CircularProgressCard from './CircularProgressCard';
import LinearProgressCard from './LinearProgressCard';
import Waffle from './Waffle';
import Wafer from './Wafer';
import Tile from './Tile';

var DevkitLayout = React.createClass({
  render: function() {
    return (
      <div key="devkit">
          <h2 className='font-thin m-t-0'>Developer Kit <small className='font-thin'>A collection of resuable components to make an amazing app!</small></h2>  
          <Tile/>
          <Wafer/>
          <Cracker/>
          <CircularProgressCard/>
          <LinearProgressCard/>
          <Widets/>
          <Alerts/>
          <Waffle/>
          <Charts/>
          
          <Buttons/>
          <Forms/>
          <Modals/>
          
          <Notifications/>
          <DataGrid/>
          
          <div>
            <h2 className='font-thin'>List <small>Sample list with Avatar</small></h2>
          <AvatarList/>
            <h2 className='font-thin'>Agile List <small>Sample list with Avatar</small></h2>
          <AgileList/>
          </div>
      </div>  
    );
  }

});


export default DevkitLayout;