import React from 'react';
import {CircularProgressCard} from 'fabric-ui';

function getCircularProgressCardFooterDef() {
  return [
    { key: 1, value: 21, text: 'Allocated', status: 'success' },
    { key: 1, value: 21, text: 'Used', status: 'danger' },
    { key: 1, value: 21, text: 'Pending', status: 'warning' }
  ]
}

const CircularProgressCardDemo = () => {
    return (
        <section>
            <h2 className='font-light'>Circular Progress Cards <small>Comes in many colors</small></h2>
            <div className='row'>

                <div className='col-md-6'>
                    <CircularProgressCard title='Error State' error subtitle='' cardOptions={{ footerDef: getCircularProgressCardFooterDef() }}/>
                </div>

                <div className='col-md-6'>
                    <CircularProgressCard title='Country Progress' subtitle=''/>
                </div>
            </div>
        </section>
    );
}

export default CircularProgressCardDemo;