import React from 'react';
import {LinearProgressCard} from 'fabric-ui';
const singleProgress = {
    title: 'Translation Report',
    footerDefs: [
        {
            title: 'Total Keys',
            value: 432,
            color: 'success'
        },
        {
            title: 'Overall Translation',
            value: '90%',
            color: 'success'
        }],
    bodyDefs: [
        {
            title: 'en',
            value: 90,
            color: 'success'
        }
    ],
    helpText: 'Some additional information about the data shown in the widget.'

}

const multiProgress = {
    title: 'Reports',
    footerDefs:[
    ],
    bodyDefs:[
        {
            title: 'Country Progress',
            value: 90,
            color: 'success'
        },
        {
            title: 'Store Progress',
            value: 20,
            color: 'error'
        },
        {
            title: 'Translation Progress',
            value: 50,
            color: 'warning'
        }
    ],
    helpText: 'Click here to view more details.'
}


const LinearProgressCardDemo = () => {
    return (
        <section>
            <h2 className='font-light'>Linear Progress Cards <small>Single & multi line progress</small></h2>
            <div className='row'>
                <div className='col-md-4'>
                    <LinearProgressCard cardOptions={multiProgress}/>
                </div>

                <div className='col-md-4'>
                    <LinearProgressCard cardOptions={singleProgress}/>
                </div>

                <div className='col-md-4'>
                    <LinearProgressCard cardOptions={singleProgress}/>
                </div>
            </div>
        </section>
    );
}

export default LinearProgressCardDemo;