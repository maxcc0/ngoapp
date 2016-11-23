import React, {PropTypes} from 'react';
import VerifiedUserIcon from 'material-ui/svg-icons/action/verified-user';
import {StatisticsCardV3} from './StatisticsCards';

function alertContent(msgText, msgSubtext) {
    return (
        <div className="row text-white-base">
            <div className="col-xs-1">
                <VerifiedUserIcon className='text-white-base pull-left' style={{ height: '40px', width: '40px' }}/>
            </div>
            <div className="col-xs-11">
                    <h4 className="font-thin  no-margins">
                        {msgText || ''}
                    </h4>
                    <span>{msgSubtext || ''}</span>
            </div>
        </div>
    )
}

const propTypes = {
   color: PropTypes.string,
   msgText: PropTypes.string,
   msgSubtext: PropTypes.string,
   warning: PropTypes.boolean,
   success: PropTypes.success,
   getContent: PropTypes.func
};

const defaultProps = {
  color: 'success',
  msgText: '',
  msgSubtext: '',
  getContent: null
};

export default class Alert extends React.Component {
    
    _getAlertContent() {
        if (this.props.getContent) {
            return this.props.getContent();
        }
        return alertContent(this.props.msgText, this.props.msgSubtext);
    }

    render() {
        let props = this.props;
        return (
            <StatisticsCardV3 
            warningSpecial={props.warning}
            successSpecial={props.success}
            content={this._getAlertContent.bind(this)} />
        )

    }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;