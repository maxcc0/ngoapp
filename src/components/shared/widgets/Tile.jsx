import React, {PropTypes} from 'react';
import {Card, CardText} from 'material-ui/Card';
import classnames from 'classnames';
const State = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  SUCCESS_SPECIAL: 'successSpecial',
  WARNING: 'warning',
  WARNING_SPECIAL: 'warningSpecial',
  DANGER: 'danger',
  INFO: 'info',
  DEFAULT: 'default'
};

function getCardStyle(state) {
    return classnames({
        'm-b-75 text-muted text-center': true,
        'card-primary-brand': state === State.PRIMARY,
        'card-info-brand': state === State.INFO,
        'card-white-brand': state === State.DEFAULT,
        'card-success-brand': state === State.SUCCESS,
        'card-success-special-brand':state === State.SUCCESS_SPECIAL,
        'card-danger-brand':state === State.DANGER,
        'card-warning-brand':state === State.WARNING,
        'card-warning-special-brand': state ==State.WARNING_SPECIAL
    });
}

export default class Tile extends React.Component {

    render() {
        let props = this.props;
        let style= getCardStyle(props.fuiStyle);

        return (
            <Card className={style}>
                <CardText>
                    {props.icon && props.icon}
                   <div className='title'><h1 className='m-t-0 font-light'> {props.value}</h1> </div>
                   <div className='card-text'>{props.subtitle}</div>
                </CardText>
            </Card>
        )
    }
}