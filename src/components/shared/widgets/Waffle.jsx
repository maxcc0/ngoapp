import React from 'react';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import WaffleBar from './WaffleBar';
import _ from 'lodash';

const genHeader= () =>('abc')

function genBody(data) {
  let body = [];
 _.forEach(data, function(item) {
     let color = item.color;
     body.push(
         <WaffleBar 
         info={item.color==='info'}
         success={item.color==='success'}
         primary={item.color==='primary'}
         warning={item.color==='warning'}
         error={item.color==='error'}
         label={item.label} value={item.value}/>
         )
 });
 return body;
}

export default class Waffle extends React.Component {

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
        return (
            <Card className={style}>
                <CardTitle titleColor={'#666'}
                    className='font-thin text-base' title={props.title} subtitle={props.subtitle || ''}  />
                <CardText>
                {genBody(props.data.bodyDef)}
                </CardText>
            </Card>
        )
    }
}