import React from 'react';
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ErrorView from '../Error';


export default class CircularProgressCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.renderContent = this.renderContent.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }
    
    renderContent() {
        if(this.props.error) {
            return <ErrorView/>
        }
        return <Circle value={90} success title="Country Progress"/>
    }

    render() {
        let props = this.props;
        console.log(props)
        return (
            <Card className='mdg-card-margin-bottom'>
                <CardTitle titleColor={'#666'}
                    className='font-thin text-base' title={props.title} subtitle={props.subtitle || ''}  />
                <CardText>
                    {this.renderContent()}
                </CardText>
                <CardText className='text-center card-footer'>
                    <div className='text-group'>
                        <div className='text-group-item'>
                            <div><h3 className='m-t-0  font-thin text-green-variant1'>21</h3> </div>
                            <div className='text-muted'>Allocated</div>
                        </div>
                        <div className='text-group-item'>
                            <div><h3 className='m-t-0  font-thin text-red-variant1'>21</h3> </div>
                            <div className='text-muted'>Used</div>
                        </div>
                        <div className='text-group-item '>
                            <div><h3 className='m-t-0 font-thin text-yellow-variant1'>10</h3> </div>
                            <div className='text-muted'>Pending</div>
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}

import CircularProgress from 'material-ui/CircularProgress';

class Circle extends React.Component {
    render() {
        let props = this.props;

        let color = null;
        props.success && (color = '#36a372');
        props.danger && (color = '#dd4343');
        props.warning && (color = '#fd9c35');

        return (
            <div className='text-center'>
                <CircularProgress color={color} mode="determinate" value={props.value} size={2} >
                </CircularProgress>
                <div className=' text-muted text-center'>{props.title}
                    <span style={{ color: color }}> {props.value}%</span>
                </div>
            </div>
        )
    }
}

class CardFooter extends React.Component {
    render() {
        let props = this.props;
    }
}