import React from 'react';
import {Cracker} from 'fabric-ui';


const CrackerDemo = () => {
    return (
        <section>
            <h2 className='font-thin'>Crackers <small>Comes in many colors</small></h2>
            <div className='row'>
                <div className='col-md-3'>
                    <Cracker info/>
                </div>
                <div className='col-md-3'>
                    <Cracker successSpecial/>
                </div>
            </div>
        </section>
    );
}

export default CrackerDemo;