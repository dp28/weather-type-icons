(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["d3"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("d3")) : factory(root["d3"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.draw = draw;

	var _d = __webpack_require__(1);

	var _d2 = _interopRequireDefault(_d);

	var _colours = __webpack_require__(2);

	var _dimensions = __webpack_require__(3);

	var dimensions = _interopRequireWildcard(_dimensions);

	var _precipitationDimensions = __webpack_require__(4);

	var precipitation = _interopRequireWildcard(_precipitationDimensions);

	var _raindrop = __webpack_require__(6);

	var _hail = __webpack_require__(8);

	var _snowflake = __webpack_require__(9);

	var _sunDimensions = __webpack_require__(10);

	var suns = _interopRequireWildcard(_sunDimensions);

	var _sun = __webpack_require__(11);

	var _cloud = __webpack_require__(12);

	var _lightning = __webpack_require__(13);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function draw(selector) {
	  drawOn(buildRootElement(selector));
	}

	function drawOn(svg) {
	  [(0, _sun.drawSun)(suns.small), (0, _cloud.drawCloud)(_colours.colours.darkGrey), (0, _raindrop.drawRaindrop)(precipitation.firstPoint), (0, _hail.drawHail)(precipitation.secondPoint), (0, _lightning.drawLightning)()].forEach(function (drawComponent) {
	    return drawComponent(svg);
	  });
	}

	var rootElementAttributes = {
	  viewBox: dimensions.left + ' ' + dimensions.top + ' ' + dimensions.width + ' ' + dimensions.height,
	  preserveAspectRatio: 'xMidYMid meet'
	};

	function buildRootElement(selector) {
	  return _d2.default.select(selector).append('svg').attr(rootElementAttributes).append('g');
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var colours = exports.colours = {
	  darkGrey: 'grey',
	  blue: 'dodgerblue',
	  lightGrey: 'lightgrey',
	  white: 'white',
	  yellow: 'gold'
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var top = exports.top = 0;
	var left = exports.left = 0;
	var width = exports.width = 100;
	var height = exports.height = 100;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.secondPoint = exports.firstPoint = exports.raindropRadius = undefined;

	var _cloudDimensions = __webpack_require__(5);

	var raindropRadius = exports.raindropRadius = 7;

	var firstPoint = exports.firstPoint = {
	  x: _cloudDimensions.centre.bottomLeft.x + _cloudDimensions.centre.width * 0.75,
	  y: _cloudDimensions.centre.bottomLeft.y
	};

	var secondPoint = exports.secondPoint = {
	  x: _cloudDimensions.centre.bottomLeft.x + _cloudDimensions.centre.width * 0.25,
	  y: _cloudDimensions.centre.bottomLeft.y + raindropRadius
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var centre = exports.centre = {
	  bottomLeft: { x: 20, y: 70 },
	  width: 55
	};

	var leftRadius = 18;
	var rightRadius = 23;

	var rect = exports.rect = {
	  x: centre.bottomLeft.x,
	  y: centre.bottomLeft.y - leftRadius * 2,
	  width: centre.width,
	  height: leftRadius * 2
	};

	var circles = exports.circles = [{
	  centre: {
	    x: centre.bottomLeft.x,
	    y: centre.bottomLeft.y - leftRadius
	  },
	  radius: leftRadius
	}, {
	  centre: {
	    x: centre.bottomLeft.x + centre.width,
	    y: centre.bottomLeft.y - rightRadius
	  },
	  radius: rightRadius
	}, {
	  centre: {
	    x: centre.bottomLeft.x + centre.width / 2,
	    y: centre.bottomLeft.y - 1.65 * rightRadius
	  },
	  radius: 1.1 * rightRadius
	}];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drawRaindrop = drawRaindrop;

	var _colours = __webpack_require__(2);

	var _precipitationDimensions = __webpack_require__(4);

	var _svgUtils = __webpack_require__(7);

	function drawRaindrop(centre) {
	  return function (svg) {
	    return drawRaindropUncurried(centre, svg);
	  };
	}

	function drawRaindropUncurried(centre, svg) {
	  var parts = [(0, _svgUtils.drawCircle)(centre, _precipitationDimensions.raindropRadius)(svg), drawTail(centre, svg)];
	  return parts.map(function (part) {
	    return part.attr('fill', _colours.colours.blue);
	  });
	}

	function drawTail(raindropCentre, svg) {
	  var params = {
	    width: _precipitationDimensions.raindropRadius * 1.9,
	    height: -_precipitationDimensions.raindropRadius * 2,
	    bottomLeft: {
	      x: raindropCentre.x - _precipitationDimensions.raindropRadius * 0.95,
	      y: raindropCentre.y - _precipitationDimensions.raindropRadius * 0.325
	    }
	  };
	  return drawIsoscelesTriangle(params, svg).attr('transform', 'rotate(15, ' + raindropCentre.x + ', ' + raindropCentre.y + ')');
	}

	function drawIsoscelesTriangle(_ref, svg) {
	  var width = _ref.width;
	  var height = _ref.height;
	  var bottomLeft = _ref.bottomLeft;

	  return svg.append('polyline').attr('points', [bottomLeft.x + ' ' + bottomLeft.y, bottomLeft.x + width / 2 + ' ' + (bottomLeft.y + height), bottomLeft.x + width + ' ' + bottomLeft.y]);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drawCircle = drawCircle;
	function drawCircle(_ref, radius) {
	  var x = _ref.x;
	  var y = _ref.y;

	  return function (svg) {
	    return svg.append('circle').attr('cx', x).attr('cy', y).attr('r', radius);
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drawHail = drawHail;

	var _colours = __webpack_require__(2);

	var _precipitationDimensions = __webpack_require__(4);

	var _svgUtils = __webpack_require__(7);

	function drawHail(centre) {
	  return function (svg) {
	    return (0, _svgUtils.drawCircle)(centre, _precipitationDimensions.raindropRadius)(svg).attr('fill', _colours.colours.white);
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drawSnowflake = drawSnowflake;

	var _colours = __webpack_require__(2);

	var _precipitationDimensions = __webpack_require__(4);

	var _svgUtils = __webpack_require__(7);

	function drawSnowflake(centre) {
	  return function (svg) {
	    return drawSnowflakeUncurried(centre, svg);
	  };
	}

	var radius = _precipitationDimensions.raindropRadius * 1.2;
	var innerRadius = radius / 2;
	var numSnowflakeParts = 6;

	function drawSnowflakeUncurried(centre, svg) {
	  return Array(numSnowflakeParts).fill().map(function (_, i) {
	    return buildSnowflakePart(centre, innerRadius, innerRadius, svg).attr('transform', 'rotate(' + i * 360 / numSnowflakeParts + ', ' + centre.x + ', ' + centre.y + ')').attr('fill', _colours.colours.white);
	  });
	};

	function buildSnowflakePart(centre, radius, height, svg) {
	  var halfWidth = height / 3;

	  return svg.append('rect').attr({
	    x: centre.x - halfWidth,
	    y: centre.y,
	    width: halfWidth * 2,
	    height: height * 2
	  });
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.small = undefined;

	var _dimensions = __webpack_require__(3);

	var centre = { x: _dimensions.width / 2, y: _dimensions.height / 2 };

	var small = exports.small = {
	  radius: 15,
	  centre: { x: centre.x + 22, y: centre.y - 25 },
	  sunburstRadius: 22
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drawSun = drawSun;

	var _svgUtils = __webpack_require__(7);

	var _colours = __webpack_require__(2);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function drawSun(sun) {
	  return function (svg) {
	    return drawSunUncurried(sun, svg);
	  };
	}

	var sunburstNumber = 12;

	function drawSunUncurried(sun, svg) {
	  var circle = (0, _svgUtils.drawCircle)(sun.centre, sun.radius)(svg).attr('fill', _colours.colours.yellow);
	  var bursts = buildSunbursts(sun, svg);
	  return [circle].concat(_toConsumableArray(bursts));
	}

	function buildSunbursts(sun, svg) {
	  return Array(sunburstNumber).fill().map(function (_, i) {
	    return buildSunburst(sun, svg).attr('transform', 'rotate(' + i * 360 / sunburstNumber + ', ' + sun.centre.x + ', ' + sun.centre.y + ')');
	  });
	}

	function buildSunburst(_ref, svg) {
	  var centre = _ref.centre;
	  var radius = _ref.radius;
	  var sunburstRadius = _ref.sunburstRadius;

	  var sunburstPoint = {
	    x: centre.x + sunburstRadius * Math.sin(0),
	    y: centre.y - sunburstRadius * Math.cos(0)
	  };

	  var halfSunburstWidth = sunburstRadius / 22;

	  return svg.append('rect').attr({
	    x: sunburstPoint.x - halfSunburstWidth,
	    y: sunburstPoint.y - halfSunburstWidth,
	    width: halfSunburstWidth * 2,
	    height: sunburstRadius - radius,
	    fill: _colours.colours.yellow
	  });
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drawCloud = drawCloud;

	var _cloudDimensions = __webpack_require__(5);

	var _svgUtils = __webpack_require__(7);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function drawCloud(colour) {
	  return function (svg) {
	    return drawCloudUncurried(colour, svg);
	  };
	}

	function drawCloudUncurried(colour, svg) {
	  var cloudCircles = _cloudDimensions.circles.map(function (circle) {
	    return (0, _svgUtils.drawCircle)(circle.centre, circle.radius)(svg).attr('fill', colour);
	  });

	  var cloudRect = svg.append('rect').attr(_cloudDimensions.rect).attr('fill', colour);
	  return [cloudRect].concat(_toConsumableArray(cloudCircles));
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drawLightning = drawLightning;

	var _colours = __webpack_require__(2);

	var _cloudDimensions = __webpack_require__(5);

	function drawLightning() {
	  return function (svg) {
	    return drawLightningOn(svg);
	  };
	}

	var width = _cloudDimensions.centre.width / 2;
	var height = width;
	var fifthWidth = width / 5;

	var left = {
	  x: _cloudDimensions.centre.bottomLeft.x + width / 2,
	  y: _cloudDimensions.centre.bottomLeft.y + width / 8
	};

	var points = [left.x + ' ' + left.y, left.x + fifthWidth + ' ' + (left.y - height), left.x + 3 * fifthWidth + ' ' + (left.y - height), left.x + width / 2 + ' ' + (left.y - height / 2), left.x + width + ' ' + (left.y - height / 2), left.x + fifthWidth + ' ' + (left.y + height), left.x + 2 * fifthWidth + ' ' + left.y];

	var attributes = {
	  points: points,
	  fill: _colours.colours.yellow
	};

	function drawLightningOn(svg) {
	  return svg.append('polyline').attr(attributes);
	}

/***/ }
/******/ ])
});
;