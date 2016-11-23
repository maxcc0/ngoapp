import React from 'react';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import PieChart from '../shared/charts/SamplePieChart';
import ColumnChart from '../shared/charts/SampleColumnChart';
import DonutChart from '../shared/charts/SampleDonutChart';

var Charts = React.createClass({
  render: function() {
    return (
      <div>
        <div> 
          <h2>Charts <small>Using Highcharts</small></h2>
          <div className='row'>

            <div className='col-md-6'>
                <Card className='m-b-75'>
                <CardTitle titleColor={'#666'}
                 className='font-thin text-base' title='Market Shares'  />
                    <CardText>
                        <PieChart/>
                    </CardText>
                </Card>
            </div>

            <div className='col-md-6'>
                <Card className='m-b-75'>
                <CardTitle titleColor={'#666'}
                 className='font-thin text-base' title='Monthly Average Rainfall'  />
                    <CardText>
                        <ColumnChart/>
                    </CardText>
                </Card>
            </div>

            <div className='col-md-6'>
                <Card className='m-b-75'>
                <CardTitle titleColor={'#666'}
                 className='font-thin text-base' title='Donuts'  />
                    <CardText>
                        <DonutChart/>
                    </CardText>
                </Card>
            </div>

          </div>
          
        </div>
      </div>  
    );
  }

});

export default Charts;