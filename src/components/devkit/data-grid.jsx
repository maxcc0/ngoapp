import React, { PropTypes, Component } from 'react';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Alert from 'material-ui/svg-icons/alert/warning';
import Done from 'material-ui/svg-icons/action/done';
import Error from 'material-ui/svg-icons/alert/error';
import {DataGrid as Grid} from 'fabric-ui';

export default class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridOptions: {
                height: 400,
                loading: true,
                columnDefs: [
                    {
                        name: 'Article Name',
                        key: 'articleName',
                        sortable: true,
                        width: 340
                        //resizable: true
                    },
                    {
                        name: 'Article Dispatch Status',
                        key: 'articleDispatchStatus',
                        formatter: ArticleDispatchStatusFormatter,
                        width: 200,
                        cellClass: 'text-center'
                    },
                    {
                        name: 'Article Delivery Progress',
                        key: 'articleDeliveryProgress',
                        formatter: DeliveryProgressFormatter,
                        width: 180,
                        cellClass: 'text-center'
                    },
                    {
                        name: 'Order Date',
                        key: 'orderDate',
                        width: 180,
                        cellClass: 'text-center'
                    },
                    {
                        name: 'Delivery Accepted Date',
                        key: 'deliveryAcceptedDate',
                        width: 180,
                        cellClass: 'text-center'
                    }
                ],
                data: [
                    { articleName: 'Article 1', articleDispatchStatus: 'Pending', articleDeliveryProgress: 20, orderDate: '10.10.2016', deliveryAcceptedDate: 'NA'  },
                    { articleName: 'Article 2', articleDispatchStatus: 'Cancelled', articleDeliveryProgress: 0, orderDate: '10.10.2016',deliveryAcceptedDate: 'NA'   },
                    { articleName: 'Article 3', articleDispatchStatus: 'Dispatched', articleDeliveryProgress: 80, orderDate: '10.10.2016', deliveryAcceptedDate: 'NA'   },
                    { articleName: 'Article 4', articleDispatchStatus: 'Cancelled', articleDeliveryProgress: 60, orderDate: '10.10.2016', deliveryAcceptedDate: 'NA'   },
                    { articleName: 'Article 5', articleDispatchStatus: 'Dispatched', articleDeliveryProgress: 50, orderDate: '10.10.2016', deliveryAcceptedDate: 'NA'   },
                    { articleName: 'Article 6', articleDispatchStatus: 'Cancelled', articleDeliveryProgress: 60, orderDate: '10.10.2016', deliveryAcceptedDate: 'NA'   },
                    { articleName: 'Article 7', articleDispatchStatus: 'Dispatched', articleDeliveryProgress: 90, orderDate: '10.10.2016', deliveryAcceptedDate: 'NA'   },
                    { articleName: 'Article 8', articleDispatchStatus: 'Dispatched', articleDeliveryProgress: 60, orderDate: '10.10.2016', deliveryAcceptedDate: 'NA'   }     
                    ]
            }
        };
    }


    render() {
        return (
            <div>
            <h2 className='font-thin'>Data Grid <small></small></h2>
            <Grid gridOptions={this.state.gridOptions} name={'abc'}/>
            </div>
            
        )
    }

}

//Custom Formatter component
 const ArticleDispatchStatusFormatter = React.createClass({
   render:function(){
     let jsx = <Alert color={'#fd9c35'}/>;
     const value = this.props.value;
     value === 'Dispatched' && (jsx =<Done color={"#74ba00"}/>);
     value === 'Cancelled' && (jsx =<Error color={"#dd4343"}/>);
     return jsx;
   }
 });

import LinearProgress from 'material-ui/LinearProgress';
 //Custom Formatter component
 const DeliveryProgressFormatter = React.createClass({
   render:function(){  
     return <LinearProgress mode="determinate" value={this.props.value} />;
   }
 });