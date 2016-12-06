import React, { PropTypes, Component } from 'react';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Alert from 'material-ui/svg-icons/alert/warning';
import Done from 'material-ui/svg-icons/action/done';
import Error from 'material-ui/svg-icons/alert/error';
import Grid from '../shared/data-grid';
import DashboardSummary from './DashboardSummary'
import webapi from '../../actions/api';

function _fetchAllPledges(cb) {
    webapi.fetchAllPledges(cb);
}

function _fetchUsers(cb) {
    webapi.fetchUsers(cb)
}

export default class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.handlePledgeData = this.handlePledgeData.bind(this);
        this.handleUsers = this.handleUsers.bind(this);

        this.state = {
            users: [],
            gridOptions: {
                height: 400,
                loading: true,
                columnDefs: [
                    {
                        name: 'Pledge',
                        key: 'donation_type',
                        // sortable: true,
                        width: 100
                    },
                    {
                        name: 'Donor Name',
                        key: 'donor_name',
                        width: 200,
                        cellClass: 'text-center'
                    },
                    {
                        name: 'Donor Address',
                        key: 'donor_address',
                        width: 200,
                        cellClass: 'text-center'
                    },
                    {
                        name: 'Donor Primary Contact',
                        key: 'donor_contact',
                        width: 200,
                        cellClass: 'text-center'
                    },
                    {
                        name: 'Pledge Status',
                        key: 'status',
                        formatter: StatusFormatter,
                        width: 200,
                        cellClass: 'text-center'
                    },
                    {
                        name: 'Pledged On',
                        key: 'created_on_date',
                        width: 200,
                        cellClass: 'text-center'
                    },
                     {
                        name: 'Assignee',
                        key: 'assigned_to',
                        width: 180,
                        cellClass: 'text-center'
                    },
                    {
                        name: 'Assigned On',
                        key: 'assigned_on_date',
                        width: 180,
                        cellClass: 'text-center'
                    }
                ],
                data: {}
            }
        };
    }
   
    handlePledgeData(err, data) {
        if(err) {
            return
        }
        const gridOptions = this.state.gridOptions;
        gridOptions.data = JSON.parse(data);
        this.setState({gridOptions: gridOptions});
    }
    
    handleUsers(err, data) {
       if(err) return
       this.setState({users: JSON.parse(data)})
    }
    
    componentDidMount() {
        _fetchAllPledges(this.handlePledgeData)
        _fetchUsers(this.handleUsers);
    }

    render() {
        return (
            <div>
            <DashboardSummary donations={this.state.gridOptions.data} users={this.state.users}/>
            <Grid gridOptions={this.state.gridOptions} name={'abc'}/>
            </div>
            
        )
    }

}
import DoneIcon from 'material-ui/svg-icons/action/check-circle';
import ProblemIcon from 'material-ui/svg-icons/content/report';
import Assignment from 'material-ui/svg-icons/action/assignment-ind';
import Open from 'material-ui/svg-icons/av/fiber-new';

//Custom Formatter component
 const StatusFormatter = React.createClass({
   render:function(){
     let jsx = 'NA';
     const value = this.props.value;
     value === 'created' && (jsx =<span>New</span>);
     value === 'assigned' && (jsx =<span><Assignment style={{verticalAlign: 'bottom'}} color={"#f9a635"}/>Assigned</span>);
     value === 'closed' && (jsx = <span><Done style={{verticalAlign: 'bottom'}} color={"#74ba00"}/>Received</span>);
     value === 'picked' && (jsx =<span><DoneIcon style={{verticalAlign: 'bottom'}} color={"#5793f3"}/>Picked</span>);
     return jsx;
   }
 });