/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(4);
	
	var _routes = __webpack_require__(5);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _componentsCommonContextWrapper = __webpack_require__(15);
	
	var _componentsCommonContextWrapper2 = _interopRequireDefault(_componentsCommonContextWrapper);
	
	process.APP_STATE = window.APP_STATE || {};
	console.log(window.APP_STATE);
	
	_reactDom2['default'].render(_react2['default'].createElement(
		_componentsCommonContextWrapper2['default'],
		{ data: window.APP_STATE || {} },
		_react2['default'].createElement(
			_reactRouter.Router,
			{ history: _reactRouter.browserHistory },
			_routes2['default']
		)
	), document.getElementById('twitter-ninja-app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout.call(null, timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout.call(null, drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _componentsAppTwitterNinjaApp = __webpack_require__(6);
	
	var _componentsAppTwitterNinjaApp2 = _interopRequireDefault(_componentsAppTwitterNinjaApp);
	
	var _componentsHomeHome = __webpack_require__(11);
	
	var _componentsHomeHome2 = _interopRequireDefault(_componentsHomeHome);
	
	exports['default'] = _react2['default'].createElement(
		_reactRouter.Route,
		{ path: '/', component: _componentsAppTwitterNinjaApp2['default'] },
		_react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsHomeHome2['default'] })
	);
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Footer = __webpack_require__(7);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Header = __webpack_require__(10);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var App = (function (_React$Component) {
		_inherits(App, _React$Component);
	
		function App() {
			_classCallCheck(this, App);
	
			_get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(_Header2['default'], null),
					_react2['default'].createElement(
						'main',
						null,
						this.props.children
					),
					_react2['default'].createElement(_Footer2['default'], null)
				);
			}
		}]);
	
		return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TabsMenu = __webpack_require__(8);
	
	var _TabsMenu2 = _interopRequireDefault(_TabsMenu);
	
	var Footer = (function (_React$Component) {
		_inherits(Footer, _React$Component);
	
		function Footer() {
			_classCallCheck(this, Footer);
	
			_get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(Footer, [{
			key: 'render',
			value: function render() {
	
				var tabList = [{ name: "Home", url: "/Home" }, { name: "Offline", url: "/Offline" }, { name: "Me", url: "/me" }, { name: "Rank", url: "/rank" }];
				return _react2['default'].createElement(
					'div',
					{ id: 'footer' },
					_react2['default'].createElement(_TabsMenu2['default'], { tabList: tabList })
				);
			}
		}]);
	
		return Footer;
	})(_react2['default'].Component);
	
	exports['default'] = Footer;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tab = __webpack_require__(9);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var TabsMenu = (function (_React$Component) {
		_inherits(TabsMenu, _React$Component);
	
		function TabsMenu() {
			_classCallCheck(this, TabsMenu);
	
			_get(Object.getPrototypeOf(TabsMenu.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(TabsMenu, [{
			key: 'render',
			value: function render() {
	
				return _react2['default'].createElement(
					'ul',
					{ className: 'nav navbar-nav' },
					this.props.tabList.map(function (tab) {
						return _react2['default'].createElement(_Tab2['default'], {
							url: tab.url,
							name: tab.name
						});
					})
				);
			}
		}]);
	
		return TabsMenu;
	})(_react2['default'].Component);
	
	exports['default'] = TabsMenu;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Tab = (function (_React$Component) {
		_inherits(Tab, _React$Component);
	
		function Tab() {
			_classCallCheck(this, Tab);
	
			_get(Object.getPrototypeOf(Tab.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Tab, [{
			key: "render",
			value: function render() {
	
				return _react2["default"].createElement(
					"li",
					{ className: "col-md-3 col-sm-3 pull-left" },
					_react2["default"].createElement(
						"a",
						{ href: this.props.url },
						this.props.name
					)
				);
			}
		}]);
	
		return Tab;
	})(_react2["default"].Component);
	
	exports["default"] = Tab;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Header = (function (_React$Component) {
		_inherits(Header, _React$Component);
	
		function Header() {
			_classCallCheck(this, Header);
	
			_get(Object.getPrototypeOf(Header.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Header, [{
			key: "render",
			value: function render() {
	
				return _react2["default"].createElement(
					"nav",
					{ className: "navbar navbar-default", role: "navigation" },
					_react2["default"].createElement(
						"div",
						{ className: "container-fluid" },
						_react2["default"].createElement(
							"ul",
							{ className: "nav navbar-nav pull-left" },
							_react2["default"].createElement(
								"li",
								null,
								_react2["default"].createElement(
									"a",
									{ href: "#" },
									_react2["default"].createElement("img", { src: "/open-iconic/svg/menu.svg", alt: "Menu" })
								)
							)
						),
						_react2["default"].createElement(
							"a",
							{ className: "navbar-brand", href: "#" },
							" TwitterNinja"
						),
						_react2["default"].createElement(
							"ul",
							{ className: "nav navbar-nav pull-right" },
							_react2["default"].createElement(
								"li",
								null,
								_react2["default"].createElement(
									"a",
									{ href: "#" },
									_react2["default"].createElement("img", { src: "/open-iconic/svg/magnifying-glass.svg", alt: "search" })
								)
							)
						)
					)
				);
			}
		}]);
	
		return Header;
	})(_react2["default"].Component);
	
	exports["default"] = Header;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Timeline = __webpack_require__(12);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var Home = (function (_React$Component) {
		_inherits(Home, _React$Component);
	
		_createClass(Home, null, [{
			key: 'contextTypes',
			get: function get() {
				return {
					data: _react2['default'].PropTypes.object
				};
			}
		}]);
	
		function Home(props, context) {
			_classCallCheck(this, Home);
	
			_get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props, context);
			this.state = context.data || { tweets: [] };
		}
	
		_createClass(Home, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(_Timeline2['default'], { tweets: this.state.tweets });
			}
		}]);
	
		return Home;
	})(_react2['default'].Component);
	
	exports['default'] = Home;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tweet = __webpack_require__(13);
	
	var _Tweet2 = _interopRequireDefault(_Tweet);
	
	var _commonUserModel = __webpack_require__(14);
	
	var _commonUserModel2 = _interopRequireDefault(_commonUserModel);
	
	var Timeline = (function (_React$Component) {
		_inherits(Timeline, _React$Component);
	
		function Timeline() {
			_classCallCheck(this, Timeline);
	
			_get(Object.getPrototypeOf(Timeline.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(Timeline, [{
			key: 'render',
			value: function render() {
	
				return _react2['default'].createElement(
					'ul',
					{ className: 'tweet-list' },
					this.props.tweets.map(function (tweet) {
	
						var userModel = new _commonUserModel2['default'](tweet.user);
						return _react2['default'].createElement(_Tweet2['default'], { user: userModel, text: tweet.text });
					})
				);
			}
		}]);
	
		return Timeline;
	})(_react2['default'].Component);
	
	exports['default'] = Timeline;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Tweet = (function (_React$Component) {
		_inherits(Tweet, _React$Component);
	
		function Tweet() {
			_classCallCheck(this, Tweet);
	
			_get(Object.getPrototypeOf(Tweet.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Tweet, [{
			key: "render",
			value: function render() {
	
				return _react2["default"].createElement(
					"li",
					{ className: "tweet-list-item" },
					_react2["default"].createElement(
						"a",
						{ href: "", className: "tweet-list-item-user" },
						_react2["default"].createElement("img", { src: this.props.user.profileImg, alt: "Profile Pic", className: "tweet-list-item-user-pic" }),
						_react2["default"].createElement(
							"strong",
							{ className: "tweet-list-item-user-name" },
							this.props.user.name
						),
						_react2["default"].createElement(
							"span",
							{ className: "tweet-list-item-user-id" },
							this.props.user.userId
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "tweet-list-item-text" },
						this.props.text
					)
				);
			}
		}]);
	
		return Tweet;
	})(_react2["default"].Component);
	
	exports["default"] = Tweet;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var User = function User(user) {
		_classCallCheck(this, User);
	
		this.userId = user.name, this.name = user.screen_name, this.profileImg = user.profile_image_url;
	};
	
	exports["default"] = User;
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ContextWrapper = (function (_React$Component) {
		_inherits(ContextWrapper, _React$Component);
	
		function ContextWrapper() {
			_classCallCheck(this, ContextWrapper);
	
			_get(Object.getPrototypeOf(ContextWrapper.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(ContextWrapper, [{
			key: 'getChildContext',
			value: function getChildContext() {
				return {
					data: this.props.data
				};
			}
		}, {
			key: 'render',
			value: function render() {
	
				return this.props.children;
			}
		}], [{
			key: 'childContextTypes',
			get: function get() {
				return {
					data: _react2['default'].PropTypes.object
				};
			}
		}]);
	
		return ContextWrapper;
	})(_react2['default'].Component);
	
	exports['default'] = ContextWrapper;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjY3NTlmZDFlZjU2N2IzNTEyZTQiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RSb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAvVHdpdHRlck5pbmphQXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC9UYWJzTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC9UYWIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9UaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvVHdlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vVXNlck1vZGVsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0NvbnRleHRXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztrQ0N0Q2tCLENBQU87Ozs7cUNBQ0osQ0FBVzs7Ozt3Q0FDSSxDQUFjOzttQ0FFL0IsQ0FBVTs7OzsyREFDRixFQUFvQzs7OztBQUUvRCxRQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0FBQzNDLFFBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUU5Qix1QkFBUyxNQUFNLENBQ2Q7O0lBQWdCLElBQUksRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUc7RUFDNUM7O0tBQVEsT0FBTyw2QkFBaUI7O0dBRXZCO0VBQ08sRUFJZixRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQzs7Ozs7OztBQ25CaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDdEh0Qyx3Qjs7Ozs7O0FDQUEsMkI7Ozs7OztBQ0FBLDhCOzs7Ozs7Ozs7Ozs7OztrQ0NBa0IsQ0FBTzs7Ozt3Q0FDZ0IsQ0FBYzs7eURBRTNCLENBQWtDOzs7OytDQUU3QyxFQUF3Qjs7OztzQkFNdEM7O0lBQU8sSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLDJDQUFrQjtFQUMxQyw0REFBWSxTQUFTLGlDQUFPLEdBQUU7RUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2JPLENBQU87Ozs7bUNBQ04sQ0FBVTs7OzttQ0FDVixFQUFVOzs7O0tBSVIsR0FBRztZQUFILEdBQUc7O1dBQUgsR0FBRzt5QkFBSCxHQUFHOzs4QkFBSCxHQUFHOzs7ZUFBSCxHQUFHOztVQUdqQixrQkFBRTtBQUNQLFdBQ0M7OztLQUVFLDJEQUFpQjtLQUNqQjs7O01BQ1UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO01BQ2pCO0tBQ1AsMkRBQWlCO0tBQ1osQ0FFWDtJQUNGOzs7U0FmbUIsR0FBRztJQUFTLG1CQUFNLFNBQVM7O3NCQUEzQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NOTixDQUFPOzs7O3FDQUNKLENBQVk7Ozs7S0FFWixNQUFNO1lBQU4sTUFBTTs7V0FBTixNQUFNO3lCQUFOLE1BQU07OzhCQUFOLE1BQU07OztlQUFOLE1BQU07O1VBSXBCLGtCQUFFOztBQUVQLFFBQUksT0FBTyxHQUFDLENBQ1gsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsRUFDekIsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLEdBQUcsRUFBQyxVQUFVLEVBQUMsRUFDL0IsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsRUFDckIsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsQ0FDekI7QUFDRCxXQUVDOztPQUFLLEVBQUUsRUFBQyxRQUFRO0tBQ2YsMERBQVUsT0FBTyxFQUFFLE9BQVEsR0FBWTtLQUNsQyxDQUdOO0lBQ0Q7OztTQXBCbUIsTUFBTTtJQUFTLG1CQUFNLFNBQVM7O3NCQUE5QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NIVCxDQUFPOzs7O2dDQUNULENBQU87Ozs7S0FFRCxRQUFRO1lBQVIsUUFBUTs7V0FBUixRQUFRO3lCQUFSLFFBQVE7OzhCQUFSLFFBQVE7OztlQUFSLFFBQVE7O1VBS3ZCLGtCQUFHOztBQUVSLFdBRUU7O09BQUksU0FBUyxFQUFDLGdCQUFnQjtLQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUM7QUFDcEMsYUFFQztBQUNDLFVBQUcsRUFBRSxHQUFHLENBQUMsR0FBSTtBQUNiLFdBQUksRUFBRSxHQUFHLENBQUMsSUFBSztRQUdWLENBQ0w7TUFFRixDQUFDO0tBR0UsQ0FJTjtJQUVEOzs7U0E5Qm9CLFFBQVE7SUFBUyxtQkFBTSxTQUFTOztzQkFBaEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDSFosQ0FBTzs7OztLQUVKLEdBQUc7WUFBSCxHQUFHOztXQUFILEdBQUc7eUJBQUgsR0FBRzs7OEJBQUgsR0FBRzs7O2VBQUgsR0FBRzs7VUFFakIsa0JBQUU7O0FBRVAsV0FFQzs7T0FBSSxTQUFTLEVBQUMsNkJBQTZCO0tBQzFDOztRQUFHLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUk7TUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7TUFBSztLQUMxQyxDQUNMO0lBRUQ7OztTQVhtQixHQUFHO0lBQVMsbUJBQU0sU0FBUzs7c0JBQTNCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0ZOLENBQU87Ozs7S0FHSixNQUFNO1lBQU4sTUFBTTs7V0FBTixNQUFNO3lCQUFOLE1BQU07OzhCQUFOLE1BQU07OztlQUFOLE1BQU07O1VBRXBCLGtCQUFHOztBQUVSLFdBRUM7O09BQUssU0FBUyxFQUFDLHVCQUF1QixFQUFDLElBQUksRUFBQyxZQUFZO0tBQ3ZEOztRQUFLLFNBQVMsRUFBQyxpQkFBaUI7TUFDL0I7O1NBQUksU0FBUyxFQUFDLDBCQUEwQjtPQUN2Qzs7O1FBQ0M7O1dBQUksSUFBSSxFQUFDLEdBQUc7U0FDWCwwQ0FBSyxHQUFHLEVBQUMsMkJBQTJCLEVBQUMsR0FBRyxFQUFDLE1BQU0sR0FBRTtTQUM5QztRQUNBO09BQ0Q7TUFHTDs7U0FBRyxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxHQUFHOztPQUFrQjtNQUV0RDs7U0FBSSxTQUFTLEVBQUMsMkJBQTJCO09BQ3hDOzs7UUFDQzs7V0FBSSxJQUFJLEVBQUMsR0FBRztTQUNYLDBDQUFLLEdBQUcsRUFBQyx1Q0FBdUMsRUFBQyxHQUFHLEVBQUMsUUFBUSxHQUFFO1NBQzVEO1FBQ0E7T0FFRDtNQUNBO0tBQ0QsQ0FDTDtJQUVGOzs7U0EvQm1CLE1BQU07SUFBUyxtQkFBTSxTQUFTOztzQkFBOUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDSFQsQ0FBTzs7OztxQ0FDSixFQUFZOzs7O0tBSVosSUFBSTtZQUFKLElBQUk7O2VBQUosSUFBSTs7UUFHRCxlQUFFO0FBQ3hCLFdBQU87QUFDRyxTQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07S0FDL0IsQ0FBQztJQUNSOzs7QUFFVSxXQVRTLElBQUksQ0FTWixLQUFLLEVBQUMsT0FBTyxFQUFFO3lCQVRQLElBQUk7O0FBVWpCLDhCQVZhLElBQUksNkNBVVgsS0FBSyxFQUFDLE9BQU8sRUFBRTtBQUNyQixPQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUM7R0FDN0M7O2VBWmdCLElBQUk7O1VBZWxCLGtCQUFFO0FBQ1AsV0FFRSwwREFBVSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFPLEdBQVksQ0FJaEQ7SUFDRjs7O1NBdkJtQixJQUFJO0lBQVMsbUJBQU0sU0FBUzs7c0JBQTVCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0xQLENBQU87Ozs7a0NBQ1AsRUFBUzs7Ozs0Q0FDTCxFQUFxQjs7OztLQUt0QixRQUFRO1lBQVIsUUFBUTs7V0FBUixRQUFRO3lCQUFSLFFBQVE7OzhCQUFSLFFBQVE7OztlQUFSLFFBQVE7O1VBSXRCLGtCQUFFOztBQUVQLFdBR0M7O09BQUksU0FBUyxFQUFDLFlBQVk7S0FDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVMsS0FBSyxFQUFFOztBQUV0QyxVQUFJLFNBQVMsR0FBRyxpQ0FBYyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsYUFBTyx1REFBTyxJQUFJLEVBQUUsU0FBVSxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSyxHQUFTO01BRXpELENBQUM7S0FDRSxDQUdKO0lBQ0Y7OztTQXBCbUIsUUFBUTtJQUFTLG1CQUFNLFNBQVM7O3NCQUFoQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NQWCxDQUFPOzs7O0tBRUosS0FBSztZQUFMLEtBQUs7O1dBQUwsS0FBSzt5QkFBTCxLQUFLOzs4QkFBTCxLQUFLOzs7ZUFBTCxLQUFLOztVQUVuQixrQkFBRTs7QUFFUCxXQUVDOztPQUFJLFNBQVMsRUFBQyxpQkFBaUI7S0FFOUI7O1FBQUcsSUFBSSxFQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUMsc0JBQXNCO01BQ3pDLDBDQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFXLEVBQUMsR0FBRyxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsMEJBQTBCLEdBQU87TUFDbkc7O1NBQVEsU0FBUyxFQUFDLDJCQUEyQjtPQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7T0FBVTtNQUM3RTs7U0FBTSxTQUFTLEVBQUMseUJBQXlCO09BQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtPQUFRO01BQ3ZFO0tBRUo7O1FBQUssU0FBUyxFQUFDLHNCQUFzQjtNQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtNQUFPO0tBRXpELENBQ0w7SUFDRDs7O1NBbEJtQixLQUFLO0lBQVMsbUJBQU0sU0FBUzs7c0JBQTdCLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztLQ0ZMLElBQUksR0FHYixTQUhTLElBQUksQ0FHWixJQUFJLEVBQUM7d0JBSEcsSUFBSTs7QUFLdkIsTUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsSUFBSSxFQUNyQixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxXQUFXLEVBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLGlCQUFpQjtFQUN0Qzs7c0JBUm1CLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0FQLENBQU87Ozs7S0FFSixjQUFjO1lBQWQsY0FBYzs7V0FBZCxjQUFjO3lCQUFkLGNBQWM7OzhCQUFkLGNBQWM7OztlQUFkLGNBQWM7O1VBUW5CLDJCQUFHO0FBQ1gsV0FBTztBQUNILFNBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7S0FDeEIsQ0FBQztJQUNMOzs7VUFFRSxrQkFBRTs7QUFFUCxXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQzNCOzs7UUFmMkIsZUFBRTtBQUM3QixXQUFPO0FBQ04sU0FBSSxFQUFDLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0tBQzNCO0lBQ0Q7OztTQU5tQixjQUFjO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXRDLGNBQWMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNjY3NTlmZDFlZjU2N2IzNTEyZTRcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnIDtcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtSb3V0ZXIsYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcicgO1xuXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJyA7XG5pbXBvcnQgQ29udGV4dFdyYXBwZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9Db250ZXh0V3JhcHBlcicgO1xuXG5wcm9jZXNzLkFQUF9TVEFURSA9IHdpbmRvdy5BUFBfU1RBVEUgfHwge307XG5jb25zb2xlLmxvZyh3aW5kb3cuQVBQX1NUQVRFKTtcblxuUmVhY3RET00ucmVuZGVyKChcblx0PENvbnRleHRXcmFwcGVyIGRhdGE9e3dpbmRvdy5BUFBfU1RBVEUgfHwge319Plx0XG5cdFx0PFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XG5cdFx0XHR7cm91dGVzfVxuXHRcdDwvUm91dGVyPlxuXHQ8L0NvbnRleHRXcmFwcGVyPlxuXHRcdFxuXHRcdFx0XG5cdCksXG4gIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R3aXR0ZXItbmluamEtYXBwJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudC5qc1xuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG4gIHRyeSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbn0gKCkpXG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJvdXRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RSb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCcgO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSxJbmRleFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJyBcblxuaW1wb3J0IFR3aXR0ZXJOaW5qYUFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwL1R3aXR0ZXJOaW5qYUFwcCcgXG5cbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lL0hvbWUnIFxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCAoXG5cdFx0XHQ8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e1R3aXR0ZXJOaW5qYUFwcH0+XG5cdFx0XHRcdDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZX0vPlxuXHRcdFx0PC9Sb3V0ZT5cbilcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3JvdXRlcy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCcgO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcicgO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0XG5cdFx0XHRcdCA8SGVhZGVyPjwvSGVhZGVyPlxuXHRcdFx0XHQgPG1haW4+XG5cdCAgICAgICAgICBcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0ICAgICAgICBcdDwvbWFpbj5cblx0ICAgICAgICBcdDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICAgIFx0PC9kaXY+XG5cblx0XHQpO1xuXHR9XG5cblxufSBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvQXBwL1R3aXR0ZXJOaW5qYUFwcC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUYWJzTWVudSBmcm9tICcuL1RhYnNNZW51J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0XG5cblx0cmVuZGVyKCl7XG5cblx0XHRsZXQgdGFiTGlzdD1bIFxuXHRcdFx0e25hbWU6XCJIb21lXCIsdXJsOlwiL0hvbWVcIn0sXG5cdFx0XHR7bmFtZTpcIk9mZmxpbmVcIix1cmw6XCIvT2ZmbGluZVwifSxcblx0XHRcdHtuYW1lOlwiTWVcIix1cmw6XCIvbWVcIn0sXG5cdFx0XHR7bmFtZTpcIlJhbmtcIix1cmw6XCIvcmFua1wifSBcblx0XHRdXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdiBpZD1cImZvb3RlclwiPlxuXHRcdFx0XHQ8VGFic01lbnUgdGFiTGlzdD17dGFiTGlzdH0+PC9UYWJzTWVudT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHRcblx0XHQpXG5cdH1cblxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL0FwcC9Gb290ZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGFiIGZyb20gJy4vVGFiJ1xuXG5leHBvcnQgZGVmYXVsdCAgY2xhc3MgVGFic01lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cblxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHRcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMudGFiTGlzdC5tYXAoZnVuY3Rpb24odGFiKXtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cblx0XHRcdFx0XHRcdFx0PFRhYlxuXHRcdFx0XHRcdFx0XHRcdHVybD17dGFiLnVybH1cblx0XHRcdFx0XHRcdFx0XHRuYW1lPXt0YWIubmFtZX1cblx0XHRcdFx0XHRcdFx0Plx0XG5cblx0XHRcdFx0XHRcdFx0PC9UYWI+XG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0fSl9XG5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC91bD5cblxuXHRcdFx0XG5cblx0XHQpXG5cblx0fVxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9BcHAvVGFic01lbnUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxsaSBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtc20tMyBwdWxsLWxlZnRcIj5cblx0XHRcdFx0PGEgaHJlZj17dGhpcy5wcm9wcy51cmx9Pnt0aGlzLnByb3BzLm5hbWV9PC9hPlxuXHRcdFx0PC9saT5cblx0XHQpXG5cblx0fVxuXG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvQXBwL1RhYi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCcgXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IHB1bGwtbGVmdFwiPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8YSAgaHJlZj1cIiNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9vcGVuLWljb25pYy9zdmcvbWVudS5zdmdcIiBhbHQ9XCJNZW51XCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlx0XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj0nIyc+IFR3aXR0ZXJOaW5qYTwvYT5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgcHVsbC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0PGxpPlx0XG5cdFx0XHRcdFx0XHRcdDxhICBocmVmPVwiI1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL29wZW4taWNvbmljL3N2Zy9tYWduaWZ5aW5nLWdsYXNzLnN2Z1wiIGFsdD1cInNlYXJjaFwiLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cdFx0XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cdFx0KTtcblxuXHR9XG5cblxufSBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvQXBwL0hlYWRlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCcgO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vVGltZWxpbmUnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuXHRzdGF0aWMgZ2V0IGNvbnRleHRUeXBlcygpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLGNvbnRleHQpO1xuICAgICAgICB0aGlzLnN0YXRlID0gY29udGV4dC5kYXRhIHx8IHt0d2VldHM6IFtdfTtcbiAgICB9XG5cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XG5cdFx0XHRcdDxUaW1lbGluZSB0d2VldHM9e3RoaXMuc3RhdGUudHdlZXRzfT48L1RpbWVsaW5lPlxuXG5cblxuXHRcdCk7XG5cdH1cblxuXG59IFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9Ib21lL0hvbWUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnIDtcbmltcG9ydCBUd2VldCBmcm9tICcuL1R3ZWV0JyA7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL2NvbW1vbi9Vc2VyTW9kZWwnXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdDx1bCBjbGFzc05hbWU9XCJ0d2VldC1saXN0XCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLnR3ZWV0cy5tYXAoZnVuY3Rpb24odHdlZXQpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsZXQgdXNlck1vZGVsID0gbmV3IFVzZXJNb2RlbCh0d2VldC51c2VyKTtcblx0XHRcdFx0XHRyZXR1cm4gPFR3ZWV0IHVzZXI9e3VzZXJNb2RlbH0gdGV4dD17dHdlZXQudGV4dH0+PC9Ud2VldD5cblx0XHRcdFx0XHRcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3VsPlxuXG5cblx0XHQpO1xuXHR9XG5cblxufSBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvSG9tZS9UaW1lbGluZS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcblx0XHRcblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPVwidHdlZXQtbGlzdC1pdGVtXCI+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwidHdlZXQtbGlzdC1pdGVtLXVzZXJcIj5cblx0XHRcdCBcdFx0PGltZyBzcmM9e3RoaXMucHJvcHMudXNlci5wcm9maWxlSW1nfSBhbHQ9XCJQcm9maWxlIFBpY1wiIGNsYXNzTmFtZT1cInR3ZWV0LWxpc3QtaXRlbS11c2VyLXBpY1wiPjwvaW1nPlxuXHRcdFx0IFx0XHQ8c3Ryb25nIGNsYXNzTmFtZT1cInR3ZWV0LWxpc3QtaXRlbS11c2VyLW5hbWVcIj57dGhpcy5wcm9wcy51c2VyLm5hbWV9PC9zdHJvbmc+XG5cdFx0XHQgXHRcdDxzcGFuIGNsYXNzTmFtZT1cInR3ZWV0LWxpc3QtaXRlbS11c2VyLWlkXCI+e3RoaXMucHJvcHMudXNlci51c2VySWR9PC9zcGFuPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0d2VldC1saXN0LWl0ZW0tdGV4dFwiPnt0aGlzLnByb3BzLnRleHR9PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0PC9saT5cblx0XHQpXG5cdH1cblxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL0hvbWUvVHdlZXQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vye1xuXG5cblx0Y29uc3RydWN0b3IodXNlcil7XG5cdFx0XG5cdFx0dGhpcy51c2VySWQ9dXNlci5uYW1lLFxuXHRcdHRoaXMubmFtZT11c2VyLnNjcmVlbl9uYW1lLFxuXHRcdHRoaXMucHJvZmlsZUltZz11c2VyLnByb2ZpbGVfaW1hZ2VfdXJsXG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9jb21tb24vVXNlck1vZGVsLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0V3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRzdGF0aWMgZ2V0IGNoaWxkQ29udGV4dFR5cGVzKCl7XG5cdFx0cmV0dXJuXHR7XG5cdFx0XHRkYXRhOlJlYWN0LlByb3BUeXBlcy5vYmplY3Rcblx0XHR9XG5cdH1cblxuXHRnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGFcbiAgICAgICAgfTtcbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblx0fVxuXG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvY29tbW9uL0NvbnRleHRXcmFwcGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==