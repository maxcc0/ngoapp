import React from 'react';
import Formsy from 'formsy-react';
import _ from 'lodash';

const DL = React.createClass({
  getInitialState() {
    return {
      canSubmit: false
    }
  },
  enableButton() {
    this.setState({
      canSubmit: true
    });
  },
  disableButton() {
    this.setState({
      canSubmit: false
    });
  },

  submit(model) {
    this.props.fetchPickups(_.find(this.props.options, {address: model.dropOffLocation}));
  },

    render() {
        return (
            <Formsy.Form onValidSubmit= { this.submit } onValid= { this.enableButton } onInvalid= { this.disableButton } >
                <Select required name='dropOffLocation' options={this.props.options} value={this.props.options && this.props.options[0] && this.props.options[0].address} title='Select Drop Off Location'/>
                <p className="card-text text-center text-red-variant1">{this.props.error || null}</p>
                <div className="form-group row">
                    <div className="col-xs-12">
                        <button type="submit" className=" col-sm-6 col-sm-offset-3 btn btn-block btn-lg btn-primary-dm pull-right" disabled={!this.state.canSubmit}>Search</button>
                    </div></div>
            </Formsy.Form >

        )
    }

});

const Select = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue(event) {
        this.setValue(event.currentTarget.value);
    },
    // componentWillReceiveProps(np) {
    //     const v = np.options && np.options[0].address;
    //     this.setValue(v)
    // },
    render() {
        const className = 'form-group' + (this.props.className || ' ') +
            (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
        const errorMessage = this.getErrorMessage();
        const helpMessage = this.props.helpMessage || null;

        const options = this.props.options.map((option, i) => (
            <option key={option.id + option.address} value={option.address}>
                {option.address}
            </option>
        ));

        return (
            <div className={className}>
                <label htmlFor={this.props.name} className='form-label'>{this.props.title}</label>
                <select className='form-control' name={this.props.name} onChange={this.changeValue} value={this.getValue() }>
                    {options}
                </select>
                <span className='help-block text-muted'>{helpMessage}</span>
                <span className='validation-error'>{errorMessage}</span>
            </div>
        );
    }

});

export default DL;