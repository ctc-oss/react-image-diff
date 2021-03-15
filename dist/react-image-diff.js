(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ImageDiff"] = factory(require("react"));
	else
		root["ImageDiff"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bgImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEX5+fn///8pDrwNAAAAFElEQVQI12NgsP/AQAz+f4CBGAwAJIIdTTn0+w0AAAAASUVORK5CYII=";

	var dimension = function dimension(x) {
	  return isNaN(x) || !x ? null : x;
	};

	var Difference = function Difference(_ref) {
	  var before = _ref.before,
	      after = _ref.after,
	      height = _ref.height,
	      width = _ref.width,
	      alt = _ref.alt,
	      handleImgLoad = _ref.handleImgLoad;

	  var style = {
	    position: "relative"
	  };
	  var beforeStyle = {
	    position: "absolute",
	    top: 0,
	    left: 0
	  };
	  var afterStyle = _extends({}, beforeStyle);

	  return _react2.default.createElement(
	    "div",
	    { className: "ImageDiff_inner--difference", style: style },
	    _react2.default.createElement(
	      "div",
	      { className: "ImageDiff__before", style: beforeStyle },
	      _react2.default.createElement("img", {
	        src: before,
	        alt: alt,
	        height: height,
	        width: width,
	        onLoad: handleImgLoad
	      })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "ImageDiff__after", style: afterStyle },
	      _react2.default.createElement("img", {
	        src: after,
	        alt: alt,
	        height: height,
	        width: width,
	        style: { mixBlendMode: "difference" },
	        onLoad: handleImgLoad
	      })
	    )
	  );
	};

	var Fade = function Fade(_ref2) {
	  var before = _ref2.before,
	      after = _ref2.after,
	      height = _ref2.height,
	      width = _ref2.width,
	      alt = _ref2.alt,
	      handleImgLoad = _ref2.handleImgLoad,
	      value = _ref2.value;

	  var style = {
	    backgroundImage: "url(" + bgImage + ")",
	    height: height,
	    width: width,
	    margin: 0,
	    position: "absolute"
	  };

	  var beforeStyle = _extends({}, style);

	  var afterStyle = _extends({
	    opacity: 1 - value
	  }, style);

	  return _react2.default.createElement(
	    "div",
	    { className: "ImageDiff__inner--fade", style: style },
	    _react2.default.createElement(
	      "div",
	      { className: "ImageDiff__before", style: beforeStyle },
	      _react2.default.createElement("img", {
	        src: before,
	        alt: "",
	        height: height,
	        width: width,
	        onLoad: handleImgLoad
	      })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "ImageDiff__after", style: afterStyle },
	      _react2.default.createElement("img", {
	        src: after,
	        alt: alt,
	        height: height,
	        width: width,
	        onLoad: handleImgLoad
	      })
	    )
	  );
	};

	var Swipe = function Swipe(_ref3) {
	  var before = _ref3.before,
	      after = _ref3.after,
	      _ref3$height = _ref3.height,
	      height = _ref3$height === undefined ? 0 : _ref3$height,
	      _ref3$width = _ref3.width,
	      width = _ref3$width === undefined ? 0 : _ref3$width,
	      _ref3$alt = _ref3.alt,
	      alt = _ref3$alt === undefined ? "" : _ref3$alt,
	      handleImgLoad = _ref3.handleImgLoad,
	      value = _ref3.value;

	  var style = {
	    backgroundImage: "url(" + bgImage + ")",
	    width: width,
	    height: height,
	    margin: 0,
	    position: "absolute"
	  };

	  var beforeStyle = _extends({}, style);

	  var afterStyle = _extends({
	    right: 0
	  }, style);

	  var swipePadding = 2;
	  var swiperStyle = {
	    borderLeft: "1px solid #999",
	    height: height + swipePadding,
	    margin: 0,
	    overflow: "hidden",
	    position: "absolute",
	    right: -swipePadding,
	    width: width * (1 - value)
	  };

	  return _react2.default.createElement(
	    "div",
	    { className: "ImageDiff__inner--swipe", style: style },
	    _react2.default.createElement(
	      "div",
	      { className: "ImageDiff__before", style: beforeStyle },
	      _react2.default.createElement("img", {
	        src: before,
	        alt: alt,
	        height: dimension(height),
	        width: dimension(width),
	        onLoad: handleImgLoad
	      })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "ImageDiff--swiper", style: swiperStyle },
	      _react2.default.createElement(
	        "div",
	        { className: "ImageDiff__after", style: afterStyle },
	        _react2.default.createElement("img", {
	          src: after,
	          alt: "",
	          height: dimension(height),
	          width: dimension(width),
	          onLoad: handleImgLoad
	        })
	      )
	    )
	  );
	};

	var animationConfig = function animationConfig(animation) {
	  if (!animation) return null;
	  if (typeof animation === "boolean") {
	    return {};
	  } else if ((typeof animation === "undefined" ? "undefined" : _typeof(animation)) === "object") {
	    return animation;
	  }

	  throw Error("[animation] prop must be boolean or an actual animation config object");
	};

	var ImageDiff = function ImageDiff(props) {
	  var type = props.type,
	      height = props.height,
	      width = props.width,
	      _props$value = props.value,
	      value = _props$value === undefined ? 0 : _props$value,
	      style = props.style,
	      slider = props.slider,
	      animation = props.animation;

	  var _useState = (0, _react.useState)(_extends({}, style, { height: height, width: width })),
	      _useState2 = _slicedToArray(_useState, 2),
	      imageStyle = _useState2[0],
	      setImageStyle = _useState2[1];

	  var _useState3 = (0, _react.useState)(value),
	      _useState4 = _slicedToArray(_useState3, 2),
	      diffValue = _useState4[0],
	      setDiffValue = _useState4[1];

	  _react2.default.useEffect(function () {
	    var _animation = animationConfig(animation);
	    if (_animation) {
	      var _animation$start = _animation.start,
	          start = _animation$start === undefined ? diffValue : _animation$start,
	          _animation$end = _animation.end,
	          end = _animation$end === undefined ? 1 : _animation$end,
	          _animation$step = _animation.step,
	          step = _animation$step === undefined ? 0.02 : _animation$step,
	          _animation$delay = _animation.delay,
	          delay = _animation$delay === undefined ? 50 : _animation$delay;


	      if (value > end && start + step <= end || value < end && start + step >= end) {
	        setDiffValue(end);
	      } else setTimeout(function () {
	        return setDiffValue(start + step);
	      }, delay);
	    }
	  }, [value, diffValue, animation]);

	  var handleImgLoad = function handleImgLoad(e) {
	    if (!height && !width) {
	      var _e$target = e.target,
	          _height = _e$target.height,
	          _width = _e$target.width;

	      setImageStyle(_extends({}, style, { height: _height, width: _width }));
	    }
	  };

	  var viewProps = _extends({}, props, imageStyle, {
	    value: diffValue,
	    handleImgLoad: handleImgLoad
	  });

	  var views = {
	    difference: _react2.default.createElement(Difference, viewProps),
	    fade: _react2.default.createElement(Fade, viewProps),
	    swipe: _react2.default.createElement(Swipe, viewProps)
	  };

	  return _react2.default.createElement(
	    "div",
	    {
	      style: {
	        display: "flex",
	        flexDirection: "column",
	        width: imageStyle.width
	      }
	    },
	    _react2.default.createElement(
	      "div",
	      {
	        className: "ImageDiff",
	        style: _extends({ display: "inline-block" }, imageStyle)
	      },
	      views[type] || views["difference"]
	    ),
	    slider ? _react2.default.createElement("input", {
	      type: "range",
	      min: "0",
	      max: "1",
	      step: "0.01",
	      value: diffValue,
	      onInput: function onInput(e) {
	        return setDiffValue(e.target.value);
	      }
	    }) : null
	  );
	};

	exports.default = ImageDiff;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ])
});
;