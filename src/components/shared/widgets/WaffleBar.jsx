import React from 'react';
import Paper from 'material-ui/Paper';
import classnames from 'classnames';

export default class WaffleBar extends React.Component {

    render() {
        let props = this.props;
        let waffleBarStyle = classnames({
            'waffle-bar' : true,
            info: props.info,
            success: props.success,
            error: props.error,
            warning: props.warning,
            primary: props.primary
        });

        return (
            <Paper className={waffleBarStyle} zDepth={1} rounded={false}>
                <div className='arrow'/>
                <span className='data-label text-muted font-light'> {props.label || ''} </span>
                <span className='data-value pull-right'>{props.value || ''}</span>
            </Paper>
        )
    }
}