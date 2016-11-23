webpackJsonp([1],{

/***/ 987:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(286);

	var _PledgeCard = __webpack_require__(988);

	var _PledgeCard2 = _interopRequireDefault(_PledgeCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	          { className: 'col-md-4' },
	          _react2.default.createElement('img', { src: __webpack_require__(991), width: '100%' }),
	          _react2.default.createElement('img', { src: __webpack_require__(992), width: '100%' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2.default.createElement(_PledgeCard2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-2 ' },
	          _react2.default.createElement(
	            'div',
	            { style: { marginTop: '.75rem' } },
	            _react2.default.createElement('img', { src: __webpack_require__(948), width: '200px' })
	          )
	        )
	      )
	    );
	  }

	});

	exports.default = Settings;

/***/ },

/***/ 988:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _PledgeForm = __webpack_require__(989);

	var _PledgeForm2 = _interopRequireDefault(_PledgeForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PledgeCard = _react2.default.createClass({
	  displayName: 'PledgeCard',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'card ', style: { marginTop: '.75rem' } },
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
	        { className: 'card-block text-center' },
	        _react2.default.createElement(
	          'h2',
	          { className: 'card-title no-margins font-thin' },
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

/***/ 989:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(965);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _jQuery = __webpack_require__(767);

	var _jQuery2 = _interopRequireDefault(_jQuery);

	var _place = __webpack_require__(959);

	var _place2 = _interopRequireDefault(_place);

	var _Location = __webpack_require__(990);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// var geocoder;

	// function initialize() {
	//   geocoder = new google.maps.Geocoder();
	// }

	// function codeLatLng(lat, lng, cb) {
	//   var latlng = new google.maps.LatLng(lat, lng);
	//   geocoder.geocode({
	//     'latLng': latlng
	//   }, function (results, status) {
	//     if (status === google.maps.GeocoderStatus.OK) {
	//       if (results[1]) {
	//         console.log(results[1]);
	//         cb(null, results[1].formatted_address)
	//       } else {
	//         cb(null, '')
	//       }
	//     } else {
	//       cb('Geocoder failed due to: ' + status, '')
	//     }
	//   });
	// }
	// // initialize();
	// function _getMyGeoLocation(cb) {
	//   if (navigator.geolocation) {
	//     navigator.geolocation.getCurrentPosition(function (location) {
	//       cb(null, location);
	//     });
	//   } else {
	//     cb('not supported');
	//     alert('Geolocation is not supported in your browser');
	//   }

	// }

	var MyAppForm = _react2.default.createClass({
	  displayName: 'MyAppForm',
	  getInitialState: function getInitialState() {

	    return {
	      canSubmit: false,
	      geoLocation: null,
	      address: null
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
	  submit: function submit(model) {
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
	            { type: 'button', onClick: this.getMyGeoLocation, className: 'btn  btn-primary-dm pull-right' },
	            _react2.default.createElement(_place2.default, { color: '#fff' }),
	            'Use My Location'
	          )
	        )
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
	        'span',
	        null,
	        errorMessage
	      )
	    );
	  }
	});

	exports.default = MyAppForm;

/***/ },

/***/ 990:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchAddress = fetchAddress;
	exports.getGeoLocation = getGeoLocation;
	function fetchAddress(lat, lng, cb) {
	    var geocoder;
	    geocoder = new google.maps.Geocoder();
	    var latlng = new google.maps.LatLng(lat, lng);
	    geocoder.geocode({
	        'latLng': latlng
	    }, function (results, status) {
	        if (status === google.maps.GeocoderStatus.OK) {
	            if (results[1]) {
	                console.log(results[1]);
	                cb(null, results[1].formatted_address);
	            } else {
	                cb(null, '');
	            }
	        } else {
	            cb('Geocoder failed due to: ' + status, '');
	        }
	    });
	}

	function getGeoLocation(cb) {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function (location) {
	            cb(null, location);
	        });
	    } else {
	        cb('not supported');
	        alert('Geolocation is not supported in your browser');
	    }
	}

/***/ },

/***/ 991:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "00d96eaeb1314ed3e291fe40dea6dfa7.jpg";

/***/ },

/***/ 992:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "506a01626c2319957ee0848d0242c89f.jpg";

/***/ }

});