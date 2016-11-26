import React from 'react';
import Highcharts from 'highcharts';

export default class SampleDonutChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount() {
     Highcharts.chart('container2',{
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares<br>2015',
            align: 'center',
            verticalAlign: 'middle'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },

        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '70%',
            data: [
                ['Firefox',   10.38],
                ['IE',       56.33],
                ['Chrome', 24.03],
                ['Safari',    4.77],
                ['Opera',     0.91],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
  }

  render() {
    return (
      <div id="container2"></div>
    );
  }
}