import React from 'react';
import {Tile} from 'fabric-ui';


const TileDemo = () => {
    return (
        <section>
            <h2 className='font-light'>Tiles <small>Comes in many colors</small></h2>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='row '>
                        <div className='col-xs-6'>
                            <Tile title={23} white subtitle='Comments'/>
                        </div>
                        <div className='col-xs-6'>
                            <Tile title={10} info subtitle='New Items'/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-xs-6'>
                            <Tile title={23} danger subtitle='Issues'/>
                        </div>
                        <div className='col-xs-6'>
                            <Tile title={10} success subtitle='New Items'/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TileDemo;