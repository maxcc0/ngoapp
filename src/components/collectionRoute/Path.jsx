    import React, {PropTypes} from 'react';
    import PlaceIcon from 'material-ui/svg-icons/maps/place';

    export default class DropLocationList extends React.Component {

        render() {
            let props = this.props;

            return (
                <div className=''card-block>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <div>
                                <PlaceIcon color={'#ff7e82'}/>
                            </div>
                            <div>
                                Start Location
                            </div>
                        </div>
                        <div className='col-xs-6 '>
                            <div className='pull-right text-right' >
                                <div>
                                    <PlaceIcon color={'#ff7e82'}/>
                                </div>
                                <div>
                                    End Location
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            )
        }
    }