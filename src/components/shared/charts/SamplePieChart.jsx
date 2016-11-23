import React from 'react';
import Highcharts from 'highcharts';
import $ from "jQuery";
import Theme from '../../../constants/Theme';
console.log(Theme);
const colorPallete = Theme.pallete;

function getChartConfig() {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Market Shares'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [
                {
                    name: 'Microsoft Internet Explorer',
                    y: 56.33,
                    color: colorPallete.accent10
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    color: colorPallete.accent2,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Firefox',
                    color: colorPallete.accent3,
                    y: 10.38
                }, {
                    name: 'Safari',
                    y: 4.77,
                    color: colorPallete.accent4
                }
            ]
        }]
    }
}

export default class SamplePieChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        Highcharts.chart('container', getChartConfig());
    }

    render() {
        return (
            <div id="container"></div>
        );
    }
}