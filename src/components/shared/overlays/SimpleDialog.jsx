import React from 'react'
import Dialog from 'material-ui/Dialog'

class ModalDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.renderTrigger = this.renderTrigger.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.renderActions = this.renderActions.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };
    
    handleConfirm() {
        const props = this.props;
        props.handleConfirm && props.handleConfirm();
        this.handleClose();
    }
    
    handleCancel() {
        const props = this.props;
        props.handleCancel && props.handleCancel();
        this.handleClose();
    }
    
    renderContent() {
        const props = this.props;
        if (props.children) {
            return props.children
        }
        return  props.message || 'Are you sure you want to do this?';
    }

    renderTrigger() {
        const props = this.props;
        if(props.trigger){
            return (
                <span onTouchTap={this.handleOpen.bind(this) }>
                 {props.trigger()}
                </span>
            )
        }
    }
    
    renderActions() {
        const props = this.props;
        if(props.hideActions) {
            return null;
        }
        return null
 
    }
    
    render() {
        const props = this.props;

        return (
            <div>
                {this.renderTrigger()}
                <Dialog
                    title={props.title || 'Confirmation'}
                    actions={this.renderActions()}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this) }
                    >
                    {this.renderContent()}
                </Dialog>
            </div>
        );
    }
}


export default ModalDialog;