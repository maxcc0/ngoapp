import React from 'react';
import {Waffle} from 'fabric-ui';

const data = {
error: {
    message: null
},

bodyDef: [
    {
    label: 'Countries Onboarded',
    value: 5,
    color: 'info'
    },
    {
    label: 'Countries Activated',
    value: 10,
    color: 'success'
    },
    {
    label: 'Countries Planned Activation',
    value: 5,
    color: 'warning'
    },
    {
    label: 'Countries Failed Activation',
    value: 5,
    color: 'error'
    },
    {
    label: 'Countries Upcoming',
    value: 10,
    color: 'primary'
    }
]
};

const ShowWaffle = () => {
  return (
    <div className='row'>
      <div className='col-md-4'>
        <Waffle data={data} title='ADAM at a glance'/>
      </div>
      <div className='col-md-8'>
      </div>
    </div>
  );
}

export default ShowWaffle;