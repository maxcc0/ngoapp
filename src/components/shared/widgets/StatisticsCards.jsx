import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

function getCardStyle() {
    let style = 'text-center m-b-75 text-muted';
    this.props.primary && (style = 'text-center card-primary-brand m-b-75');
    this.props.info && (style = 'text-center card-info-brand m-b-75');
    this.props.white && (style = 'text-center card-white-brand m-b-75');
    this.props.success && (style = 'text-center card-success-brand m-b-75');
    this.props.successSpecial && (style = 'text-center card-success-special-brand m-b-75');
    this.props.danger && (style = 'text-center card-danger-brand m-b-75');
    this.props.warning && (style = 'text-center card-warning-brand m-b-75');
    return style;
}

export class StatisticsCardV1 extends React.Component {

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
        let style= getCardStyle.apply(this);
        return (
            <Card className={style}>
                <CardText>
                   <div className='title'><h1 className='m-t-0 font-light'> {props.title}</h1> </div>
                   <div className='card-text'>{props.subtitle}</div>
                </CardText>
            </Card>
        )
    }
}

export class StatisticsCardV2 extends React.Component {

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
        let style= getCardStyle.apply(this);
        
        return (
            <Card className={style}>
                <CardText>
                    <div className="row">
                        <div className="col-xs-4">
                            {props.icon|| null}
                        </div>
                        <div className="col-xs-8 pull-right">
                            <span className='title'> {props.subtitle} </span>
                            <h2 className="font-thin card-text">{props.title}</h2>
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}

export class StatisticsCardV3 extends React.Component {

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
        let style = 'm-b-75 text-muted';
        this.props.primary && (style = ' card-primary-brand m-b-75');
        this.props.info && (style = 'card-info-brand m-b-75');
        this.props.white && (style = 'card-white-brand m-b-75');
        this.props.success && (style = 'card-success-brand m-b-75' );
        this.props.successSpecial && (style = 'card-success-special-brand m-b-75' );
        this.props.danger && (style = 'card-danger-brand m-b-75');
        this.props.warning && (style = 'card-warning-brand m-b-75');
        this.props.warningSpecial  && (style = 'card-warning-special-brand m-b-75');
        
        
        return (
            <Card className={style}>
                <CardText>
                    {props.content()}
                </CardText>
            </Card>
        )
    }
}
