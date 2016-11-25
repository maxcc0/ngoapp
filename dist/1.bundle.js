webpackJsonp([1],{

/***/ 991:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(258);

	var _PledgeCard = __webpack_require__(992);

	var _PledgeCard2 = _interopRequireDefault(_PledgeCard);

	var _PledgeOverview = __webpack_require__(995);

	var _PledgeOverview2 = _interopRequireDefault(_PledgeOverview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <div className='col-md-4'>
	// <img src={require("../../assets/images/pledge_kids.jpg") } width='100%'/>
	// <img src={require("../../assets/images/donate.jpg") } width='100%'/>
	// </div>
	var Settings = _react2.default.createClass({
	  displayName: 'Settings',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { key: 'pledge', className: 'reports-page' },
	      _react2.default.createElement(
	        'div',
	        { className: 'row pledge-logo-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-3 text-center' },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('img', { src: __webpack_require__(947), width: '200px' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2.default.createElement(_PledgeCard2.default, null)
	        )
	      ),
	      _react2.default.createElement(_PledgeOverview2.default, null)
	    );
	  }

	});

	exports.default = Settings;

/***/ },

/***/ 992:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _PledgeForm = __webpack_require__(993);

	var _PledgeForm2 = _interopRequireDefault(_PledgeForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PledgeCard = _react2.default.createClass({
	  displayName: 'PledgeCard',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'card ' },
	      _react2.default.createElement(
	        'div',
	        { className: 'card-header text-center' },
	        _react2.default.createElement(
	          'h4',
	          { className: ' font-thin' },
	          'Donation Pledge Confirmation'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'card-block ' },
	        _react2.default.createElement(
	          'h2',
	          { className: 'card-title text-center no-margins font-thin' },
	          'Thank you for your help!'
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(_PledgeForm2.default, null),
	        _react2.default.createElement(
	          'p',
	          { className: 'card-text' },
	          'We thank you for your contribution.A volunteer will get in touch with you soon.'
	        )
	      )
	    );
	  }

	});

	exports.default = PledgeCard;

/***/ },

/***/ 993:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(964);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _jQuery = __webpack_require__(766);

	var _jQuery2 = _interopRequireDefault(_jQuery);

	var _place = __webpack_require__(958);

	var _place2 = _interopRequireDefault(_place);

	var _Location = __webpack_require__(979);

	var _navigation = __webpack_require__(994);

	var _navigation2 = _interopRequireDefault(_navigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _savePledge() {}

	var MyAppForm = _react2.default.createClass({
	  displayName: 'MyAppForm',
	  getInitialState: function getInitialState() {

	    return {
	      canSubmit: false,
	      geoLocation: null,
	      address: null,
	      geoLocationError: null
	    };
	  },
	  enableButton: function enableButton() {
	    this.setState({
	      canSubmit: true
	    });
	  },
	  disableButton: function disableButton() {
	    this.setState({
	      canSubmit: false
	    });
	  },
	  handleFetchCoords: function handleFetchCoords(err, data) {
	    console.log(data);
	  },
	  submit: function submit(model) {
	    // if(!this.state.geoLocation) {
	    //   fetchCoords(model.address, this.handleFetchCoords)
	    // }
	    model.geoLocation = this.state.geoLocation;
	    _jQuery2.default.ajax({

	      type: 'post',
	      data: { DATAasdasd: model },
	      url: 'https://www.socialpixe.com/socialpixe/react/myphp.php',
	      success: function success(response) {
	        alert(response);
	      }
	    });
	  },
	  handleAddress: function handleAddress(err, address) {
	    if (err) {
	      this.setState({ geoLocationError: 'Could not fetch your location from geo services. Please add your address.' });
	      return;
	    }
	    this.setState({ address: address });
	  },
	  handleGeoLocation: function handleGeoLocation(err, data) {
	    if (err) {
	      return;
	    }
	    this.setState({ geoLocation: data });
	    (0, _Location.fetchAddress)(data.coords.latitude, data.coords.longitude, this.handleAddress);
	  },
	  getMyGeoLocation: function getMyGeoLocation() {
	    (0, _Location.getGeoLocation)(this.handleGeoLocation);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      _formsyReact2.default.Form,
	      { onValidSubmit: this.submit, onValid: this.enableButton, onInvalid: this.disableButton },
	      _react2.default.createElement(MyOwnInput, { name: 'name', label: 'Name', required: true }),
	      _react2.default.createElement(MyOwnInput, { name: 'address', value: this.state.address, label: 'Address', required: true }),
	      _react2.default.createElement(MyOwnInput, { name: 'email', label: 'Email', validations: 'isEmail', validationError: 'This is not a valid email' }),
	      _react2.default.createElement(MyOwnInput, { name: 'contact', label: 'Contact#', required: true }),
	      _react2.default.createElement(MyOwnInput, { name: 'contact_alternate', label: 'Alternate Contact#' }),
	      _react2.default.createElement(MyOwnInput, { name: 'donation_type', label: 'Donate', required: true }),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group row text-left' },
	        _react2.default.createElement('div', { className: 'col-sm-2' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-4' },
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', className: 'btn btn-lg yellow-bg-v2', disabled: !this.state.canSubmit },
	            'Confirm'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-6' },
	          _react2.default.createElement(
	            'button',
	            { type: 'button', onClick: this.getMyGeoLocation, className: 'btn  btn-lg btn-primary-dm pull-right' },
	            _react2.default.createElement(_place2.default, { style: { verticalAlign: 'bottom' }, color: '#fff' }),
	            'Use My Location'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: 'card-text text-center text-red-variant1' },
	        this.state.geoLocationError || null
	      )
	    );
	  }
	});

	var MyOwnInput = _react2.default.createClass({
	  displayName: 'MyOwnInput',


	  // Add the Formsy Mixin
	  mixins: [_formsyReact2.default.Mixin],

	  // setValue() will set the value of the component, which in
	  // turn will validate it and the rest of the form
	  changeValue: function changeValue(event) {
	    this.setValue(event.currentTarget.value);
	  },
	  render: function render() {
	    // Set a specific className based on the validation
	    // state of this component. showRequired() is true
	    // when the value is empty and the required prop is
	    // passed to the input. showError() is true when the
	    // value typed is invalid
	    var className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

	    // An error message is returned ONLY if the component is invalid
	    // or the server has returned an error message
	    var errorMessage = this.getErrorMessage();

	    return _react2.default.createElement(
	      'div',
	      { className: 'form-group row' },
	      _react2.default.createElement(
	        'label',
	        { 'for': 'inputEmail3', className: 'col-sm-2 col-form-label' },
	        this.props.label
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-sm-10' },
	        _react2.default.createElement('input', { className: 'col-sm-2 form-control', type: 'text', onChange: this.changeValue, value: this.getValue() })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-sm-12 col-sm-offset-2' },
	        _react2.default.createElement(
	          'p',
	          { className: 'text-red-variant1' },
	          errorMessage
	        )
	      )
	    );
	  }
	});

	exports.default = MyAppForm;

/***/ },

/***/ 994:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(883);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(892);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MapsNavigation = function MapsNavigation(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z' })
	  );
	};
	MapsNavigation = (0, _pure2.default)(MapsNavigation);
	MapsNavigation.displayName = 'MapsNavigation';
	MapsNavigation.muiName = 'SvgIcon';

	exports.default = MapsNavigation;

/***/ },

/***/ 995:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(768);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(794);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(795);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(799);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(846);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Overview = function (_React$Component) {
	    (0, _inherits3.default)(Overview, _React$Component);

	    function Overview() {
	        (0, _classCallCheck3.default)(this, Overview);
	        return (0, _possibleConstructorReturn3.default)(this, (Overview.__proto__ || (0, _getPrototypeOf2.default)(Overview)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Overview, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'section',
	                { className: '.feature-section' },
	                _react2.default.createElement(JoyOfGiving, null)
	            );
	        }
	    }]);
	    return Overview;
	}(_react2.default.Component);

	exports.default = Overview;

	var Benefits = function (_React$Component2) {
	    (0, _inherits3.default)(Benefits, _React$Component2);

	    function Benefits() {
	        (0, _classCallCheck3.default)(this, Benefits);
	        return (0, _possibleConstructorReturn3.default)(this, (Benefits.__proto__ || (0, _getPrototypeOf2.default)(Benefits)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Benefits, [{
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'section',
	                { className: 'text-center' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row feature-section' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-block' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'title' },
	                                'Clothes'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'text-muted feature-desc' },
	                                'We are willing to take any clothes that you may not wish to use again. However, keep in mind that the clothes you donate are clean and can be used again by someone.'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-block' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'title' },
	                                'Books & Stationery'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'text-muted feature-desc' },
	                                'You may donate any books that you or your children will not use in the future.  The books should be in a usable condition, i.e., they should not be torn or be missing pages. You may also donate old colors, pencils, pens etc. However, make sure that the pens you donate do have ink left in them.'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row feature-section' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-block' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'title' },
	                                'Toys'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'text-muted feature-desc' },
	                                'Toys are another item that you can donate. You may donate any toy, there is no age group limit to that, however, please ensure that any toy you donate is not broken or missing any ',
	                                _react2.default.createElement('parts', { className: '' })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-block' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'title' },
	                                'Food Items'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'text-muted feature-desc' },
	                                'You may also donate any excess food items. However, please try and ensure that the food you donate is not too old and can still be consumed.'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row feature-section' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'card-block' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'title' },
	                                'Unexpired Medicines'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'text-muted feature-desc' },
	                                'You may also donate unexpired medicines. The medicines should be those that can be obtained without any prescription.'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-6' },
	                        _react2.default.createElement('div', { className: 'card-block' })
	                    )
	                )
	            );
	        }
	    }]);
	    return Benefits;
	}(_react2.default.Component);

	var JoyOfGiving = function (_React$Component3) {
	    (0, _inherits3.default)(JoyOfGiving, _React$Component3);

	    function JoyOfGiving() {
	        (0, _classCallCheck3.default)(this, JoyOfGiving);
	        return (0, _possibleConstructorReturn3.default)(this, (JoyOfGiving.__proto__ || (0, _getPrototypeOf2.default)(JoyOfGiving)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(JoyOfGiving, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'row peachu text-muted' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row text-center' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            'h2',
	                            { className: 'font-light' },
	                            ' What can you donate?'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement('small', null),
	                        _react2.default.createElement('br', null)
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(Benefits, null)
	                    )
	                ),
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('br', null)
	            );
	        }
	    }]);
	    return JoyOfGiving;
	}(_react2.default.Component);

/***/ }

});