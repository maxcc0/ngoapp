import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class LinearProgressCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        let props = this.props;
        return (
            <Card className='mdg-card-margin-bottom'>
                <CardHeader title={props.title} subtitle={props.subtitle || ''} />
                <CardText>
                    <Line value={80} success title="Country Progress"/>
                </CardText>
                <CardText>
                    <Line value={20} danger title="Store Progress"/>
                </CardText>
                <CardText>
                    <Line value={40} warning title="Transaltion Progress"/>
                </CardText>
                <CardText className='text-muted'>
                    Some additional information about the data shown in the widget.
                </CardText>
            </Card>
        )
    }
}

import LinearProgress from 'material-ui/LinearProgress';

class Line extends React.Component {
        render() {
        let props = this.props;
        
        let color = null;
        props.success && (color = '#36a372');
        props.danger && (color = '#dd4343');
        props.warning && (color = '#fd9c35');

        return (
            <div>
                <div className='margin-bottom-75 text-muted'>{props.title}
                    <span className='pull-right' style={{color: color}}>{props.value}%</span>
                </div>
                <LinearProgress color={color} style={{height: 8+'px', borderRadius: 4 + 'px'}} 
                    mode="determinate" value={props.value} />
            </div>
        )
    }
}
