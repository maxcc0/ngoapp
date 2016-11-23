
import React from 'react';
import ReactDataGrid from 'react-data-grid';
import _ from 'lodash';

  /**
   * Renders a grid based on the input grid specs and data
   * propType in the component describes the props needed by the component
   *
   * @example
   * Require the component:
   * const DataGrid = require('../common/data-grid');
   *
   * Provide gridOptions
   * <InterfaceSummaryGrid gridOptions={this.state.gridOptions}/>
   */

  export default class DataGrid extends React.Component{
    constructor(props) {
    super(props);
    console.log(props)
    this.state = {
        gridOptions: props.gridOptions
    }
    }


    componentWillReceiveProps(newProps) {
      let gridOptions = _.clone(newProps.gridOptions);
      this.setState({gridOptions});
    }

    _handleGridSort(sortColumn, sortDirection){
      const self = this;
      let gridOptions = this.state.gridOptions;

      if (sortDirection === 'NONE') {
        gridOptions.data = self.props.gridOptions.data;
      } else {
        sortDirection = sortDirection.toLowerCase();
        gridOptions.data = _.orderBy(gridOptions.data, [sortColumn], [sortDirection]);
      }

      this.setState({gridOptions});
    }

    render() {
        
      const self = this;

      let columns = this.state.gridOptions.columnDefs;
      let _rows = this.state.gridOptions.data;

      if (!_rows.length > 0) return null
      //this.state.gridOptions.height is a standard height based on the viewport
      //howver if the rows are less, a fixed height will leave white space
      //so let's calculate height based on the the rows and add height of header
      const minHeight = Math.min(this.state.gridOptions.height, _rows.length*40+40);

      //A rowGetter function is required by the grid to retrieve a row for a given index
      var rowGetter = function(i){
        return _rows[i];
      };
     
      return (
        <div>
        <ReactDataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={_rows.length}
        minHeight={minHeight}
        rowHeight={40}
        onGridSort={this._handleGridSort}
        emptyRowsView={NoDataView}/>
        </div>
      );
    }

  };

  const NoDataView = React.createClass({
    render: function() {
      return (<div  className='text-center'><span>No Data</span></div>)
    }
  });