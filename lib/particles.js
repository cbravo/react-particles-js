(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Particles"] = factory(require("react"));
	else
		root["Particles"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Particles.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__("react");

var react_1 = __webpack_require__("react");

var lib_1 = __webpack_require__("./src/lib/index.ts");

var Particles =
/*#__PURE__*/
function (_react_1$Component) {
  _inherits(Particles, _react_1$Component);

  function Particles(props) {
    var _this;

    _classCallCheck(this, Particles);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Particles).call(this, props));
    _this.state = {
      canvas: undefined,
      library: undefined
    };
    _this.loadCanvas = _this.loadCanvas.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Particles, [{
    key: "buildParticlesLibrary",
    value: function buildParticlesLibrary(params) {
      try {
        if (window === undefined) return null;
      } catch (_a) {
        return null;
      }

      return new lib_1.ParticlesLibrary(params);
    }
  }, {
    key: "refresh",
    value: function refresh(props) {
      var _this2 = this;

      if (this.state.canvas) {
        this.destroy();
        this.setState({
          library: this.buildParticlesLibrary(props.params)
        }, function () {
          _this2.loadCanvas(_this2.state.canvas);
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.state.library.destroy();
    }
  }, {
    key: "loadCanvas",
    value: function loadCanvas(canvas) {
      var _this3 = this;

      if (canvas) {
        this.setState({
          canvas: canvas
        }, function () {
          _this3.state.library.loadCanvas(_this3.state.canvas);

          _this3.state.library.start();
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps !== this.props;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.refresh(this.props);
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      this.refresh(this.props);

      _get(_getPrototypeOf(Particles.prototype), "forceUpdate", this).call(this);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        library: this.buildParticlesLibrary(this.props.params)
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
      this.setState({
        library: undefined
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          className = _this$props.className,
          canvasClassName = _this$props.canvasClassName;
      return React.createElement("div", {
        className: className
      }, React.createElement("canvas", {
        ref: this.loadCanvas,
        className: canvasClassName,
        style: Object.assign({}, this.props.style, {
          width: width,
          height: height
        })
      }));
    }
  }]);

  return Particles;
}(react_1.Component);

Particles.defaultProps = {
  width: "100%",
  height: "100%",
  params: {},
  style: {}
};
exports.default = Particles;

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Particles_1 = __webpack_require__("./src/Particles.tsx");

exports.Particles = Particles_1.default;
exports.default = Particles_1.default;

/***/ }),

/***/ "./src/lib/IParams.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ShapeType;

(function (ShapeType) {
  ShapeType["CIRCLE"] = "circle";
  ShapeType["EDGE"] = "edge";
  ShapeType["TRIANGLE"] = "triangle";
  ShapeType["POLYGON"] = "polygon";
  ShapeType["STAR"] = "star";
  ShapeType["IMAGE"] = "image";
  ShapeType["IMAGES"] = "images";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));

var MoveDirection;

(function (MoveDirection) {
  MoveDirection["TOP"] = "top";
  MoveDirection["TOP_RIGHT"] = "top-right";
  MoveDirection["RIGHT"] = "right";
  MoveDirection["BOTTOM_RIGHT"] = "bottom-right";
  MoveDirection["BOTTOM"] = "bottom";
  MoveDirection["BOTTOM_LEFT"] = "bottom-left";
  MoveDirection["LEFT"] = "left";
  MoveDirection["TOP_LEFT"] = "top-left";
  MoveDirection["NONE"] = "none";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));

var MoveOutMode;

(function (MoveOutMode) {
  MoveOutMode["BOUNCE"] = "bounce";
  MoveOutMode["OUT"] = "out";
})(MoveOutMode = exports.MoveOutMode || (exports.MoveOutMode = {}));

var InteractivityMode;

(function (InteractivityMode) {
  InteractivityMode["GRAB"] = "grab";
  InteractivityMode["PUSH"] = "push";
  InteractivityMode["REMOVE"] = "remove";
  InteractivityMode["BUBBLE"] = "bubble";
  InteractivityMode["REPULSE"] = "repulse";
})(InteractivityMode = exports.InteractivityMode || (exports.InteractivityMode = {}));

var PolygonType;

(function (PolygonType) {
  PolygonType["INLINE"] = "inline";
  PolygonType["INSIDE"] = "inside";
  PolygonType["OUTSIDE"] = "outside";
})(PolygonType = exports.PolygonType || (exports.PolygonType = {}));

var PolygonInlineArrangementType;

(function (PolygonInlineArrangementType) {
  PolygonInlineArrangementType["RANDOM_POINT"] = "random-point";
  PolygonInlineArrangementType["ONE_PER_POINT"] = "one-per-point";
  PolygonInlineArrangementType["RANDOM_LENGTH"] = "random-length";
  PolygonInlineArrangementType["EQUIDISTANT"] = "equidistant";
})(PolygonInlineArrangementType = exports.PolygonInlineArrangementType || (exports.PolygonInlineArrangementType = {}));

var PolygonMoveType;

(function (PolygonMoveType) {
  PolygonMoveType["PATH"] = "path";
  PolygonMoveType["RADIUS"] = "radius";
})(PolygonMoveType = exports.PolygonMoveType || (exports.PolygonMoveType = {}));

/***/ }),

/***/ "./src/lib/ImageManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var IParams_1 = __webpack_require__("./src/lib/IParams.ts");

var Utils_1 = __webpack_require__("./src/lib/Utils.ts");

var ImageMode;

(function (ImageMode) {
  ImageMode["SINGLE"] = "single";
  ImageMode["MULTIPLE"] = "multiple";
})(ImageMode = exports.ImageMode || (exports.ImageMode = {}));

var ImageManager =
/*#__PURE__*/
function () {
  function ImageManager() {
    _classCallCheck(this, ImageManager);

    this.singleImage = null;
    this.multipleImages = [];
    this.mode = ImageMode.SINGLE;
  }

  _createClass(ImageManager, [{
    key: "getImage",
    value: function getImage(index) {
      if (index !== undefined) {
        if (this.multipleImages.length === 0) throw new Error("No images loaded. You may need to define 'shape.type' = 'images'.");
        return this.multipleImages[index % this.multipleImages.length];
      } else {
        return this.singleImage;
      }
    }
  }, {
    key: "parseShape",
    value: function parseShape(shape) {
      var _this = this;

      if (Utils_1.isEqual(IParams_1.ShapeType.IMAGE, shape.type)) {
        this.mode = ImageMode.SINGLE;
        return this.parseSingleImage(shape.image).then(function (parsedImage) {
          _this.singleImage = parsedImage;
          return Object.assign({}, shape, {
            image: parsedImage
          });
        });
      } else if (Utils_1.isEqual(IParams_1.ShapeType.IMAGES, shape.type)) {
        this.mode = ImageMode.MULTIPLE;
        var promises = shape.images.map(function (imageShape) {
          return _this.parseSingleImage(imageShape);
        });
        return Promise.all(promises).then(function (parsedImages) {
          _this.multipleImages = parsedImages;
          return Object.assign({}, shape, {
            images: parsedImages
          });
        });
      } else {
        return Promise.resolve(shape);
      }
    }
  }, {
    key: "parseSingleImage",
    value: function parseSingleImage(image) {
      var returnImage = this.buildImageObject({
        height: image.height,
        width: image.width,
        src: image.src
      });
      var ratio = image.width / image.height;
      if (ratio === Infinity || ratio === 0) ratio = 1;
      returnImage.ratio = ratio;
      var match;

      if (match = /^data:image\/(\w{3})\+xml;(.*?)base64,(.*)$/.exec(image.src)) {
        returnImage.type = match[1];
        returnImage.svgData = atob(match[3]);
      } else if (match = /^.*(\w{3})$/.exec(image.src)) {
        returnImage.type = match[1];
      }

      return this.loadImage(returnImage);
    }
  }, {
    key: "loadImage",
    value: function loadImage(image) {
      image = Object.assign({}, image);

      if (image.src != "") {
        if (image.type == "svg") {
          if (image.svgData) {
            return Promise.resolve(image);
          } else {
            return this.downloadImage(image.src).then(function (data) {
              image.svgData = data.response;
              return image;
            });
          }
        } else {
          return new Promise(function (resolve) {
            var imageElement = new Image();
            imageElement.addEventListener("load", function () {
              image.elementData = imageElement;
              resolve(image);
            });
            imageElement.src = image.src;
          });
        }
      } else {
        return Promise.reject(new Error("Error react-particles-js - no image.src"));
      }
    }
  }, {
    key: "downloadImage",
    value: function downloadImage(url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onreadystatechange = function (data) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              resolve({
                response: data.currentTarget.response,
                xhr: xhr
              });
            } else {
              reject(new Error("Error react-particles-js - Status code ".concat(xhr.readyState)));
            }
          }
        };

        xhr.send();
      });
    }
  }, {
    key: "createSvgImage",
    value: function createSvgImage(imageData, particleParameters) {
      var rgbHex = /#([0-9A-F]{3,6})|rgb\([0-9,]+\)/gi;
      var coloredSvgXml = imageData.replace(rgbHex, function (m, r, g, b) {
        var color_value;

        if (particleParameters.color.rgb) {
          var _particleParameters$c = particleParameters.color.rgb,
              _r = _particleParameters$c.r,
              _g = _particleParameters$c.g,
              _b = _particleParameters$c.b;
          color_value = "rgba( ".concat(_r, ", ").concat(_g, ", ").concat(_b, ", ").concat(particleParameters.opacity, " )");
        } else {
          var _particleParameters$c2 = particleParameters.color.hsl,
              h = _particleParameters$c2.h,
              s = _particleParameters$c2.s,
              l = _particleParameters$c2.l;
          color_value = "rgba( ".concat(h, ", ").concat(s, ", ").concat(l, ", ").concat(particleParameters.opacity, " )");
        }

        return color_value;
      });
      var svg = new Blob([coloredSvgXml], {
        type: "image/svg+xml;charset=utf-8"
      });
      var DOMURL = window.URL || window;
      var url = DOMURL.createObjectURL(svg);
      return new Promise(function (resolve) {
        var img = new Image();
        img.addEventListener("load", function () {
          DOMURL.revokeObjectURL(url);
          resolve(img);
        });
        img.src = url;
      });
    }
  }, {
    key: "buildImageObject",
    value: function buildImageObject() {
      var imageData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.assign({
        svgData: null,
        height: 0,
        width: 0,
        ratio: 0,
        src: "",
        type: ""
      }, imageData);
    }
  }]);

  return ImageManager;
}();

exports.ImageManager = ImageManager;

/***/ }),

/***/ "./src/lib/Interactivity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var IParams_1 = __webpack_require__("./src/lib/IParams.ts");

var MouseInteractivityStatus;

(function (MouseInteractivityStatus) {
  MouseInteractivityStatus["MOUSEMOVE"] = "mousemove";
  MouseInteractivityStatus["MOUSELEAVE"] = "mouseleave";
})(MouseInteractivityStatus = exports.MouseInteractivityStatus || (exports.MouseInteractivityStatus = {}));

var Interact =
/*#__PURE__*/
function () {
  function Interact(library) {
    _classCallCheck(this, Interact);

    this.library = library;
    this.mouseMovePosition = {
      x: 0,
      y: 0
    };
    this.mouseClickPosition = {
      x: 0,
      y: 0
    };
    this.mouseClickTime = 0;
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
  }

  _createClass(Interact, [{
    key: "attachEventHandlers",
    value: function attachEventHandlers() {
      var interactivity = this.library.getParameter(function (p) {
        return p.interactivity;
      });

      if (interactivity.detect_on === "window") {
        this.interactionElement = window;
      } else {
        this.interactionElement = this.library.canvas.element;
      }

      if (interactivity.events.onhover.enable || interactivity.events.onclick.enable) {
        this.interactionElement.addEventListener("mousemove", this.onMouseMove);
        this.interactionElement.addEventListener("mouseleave", this.onMouseLeave);
      }

      if (interactivity.events.onclick.enable) {
        this.interactionElement.addEventListener("click", this.onMouseClick);
      }
    }
  }, {
    key: "detachEventHandlers",
    value: function detachEventHandlers() {
      var interactivity = this.library.getParameter(function (p) {
        return p.interactivity;
      });

      if (interactivity.events.onhover.enable || interactivity.events.onclick.enable) {
        this.interactionElement.removeEventListener("mousemove", this.onMouseMove);
        this.interactionElement.removeEventListener("mouseleave", this.onMouseLeave);
      }

      if (interactivity.events.onclick.enable) {
        this.interactionElement.removeEventListener("click", this.onMouseClick);
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var position = {
        x: 0,
        y: 0
      };

      if (this.interactionElement === window) {
        position.x = event.clientX;
        position.y = event.clientY;
      } else {
        position.x = event.offsetX || event.clientX;
        position.y = event.offsetY || event.clientY;
      }

      this.mouseMovePosition = position;

      if (this.library.retina) {
        this.mouseMovePosition.x *= this.library.canvas.pxratio;
        this.mouseMovePosition.y *= this.library.canvas.pxratio;
      }

      this.mouseStatus = MouseInteractivityStatus.MOUSEMOVE;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      this.mouseMovePosition.x = 0;
      this.mouseMovePosition.y = 0;
      this.mouseStatus = MouseInteractivityStatus.MOUSELEAVE;
    }
  }, {
    key: "onMouseClick",
    value: function onMouseClick() {
      var _this = this;

      var interactivity = this.library.getParameter(function (p) {
        return p.interactivity;
      });
      var particles = this.library.getParameter(function (p) {
        return p.particles;
      });
      var polygon = this.library.getParameter(function (p) {
        return p.polygon;
      });
      this.mouseClickPosition = Object.assign({}, this.mouseMovePosition);

      if (polygon.enable && [IParams_1.PolygonType.INSIDE, IParams_1.PolygonType.OUTSIDE].indexOf(polygon.type) > -1) {
        var isInside = this.library.polygonMask.isPointInsidePolygon(this.mouseClickPosition);
        if (polygon.type === IParams_1.PolygonType.INSIDE && !isInside) return;
        if (polygon.type === IParams_1.PolygonType.OUTSIDE && isInside) return;
      }

      this.mouseClickTime = new Date().getTime();

      if (interactivity.events.onclick.enable) {
        switch (interactivity.events.onclick.mode) {
          case IParams_1.InteractivityMode.PUSH:
            if (particles.move.enable) {
              this.library.modes.pushParticles(interactivity.modes.push.particles_nb, this.mouseClickPosition);
            } else {
              if (interactivity.modes.push.particles_nb == 1) {
                this.library.modes.pushParticles(interactivity.modes.push.particles_nb, this.mouseClickPosition);
              } else if (interactivity.modes.push.particles_nb > 1) {
                this.library.modes.pushParticles(interactivity.modes.push.particles_nb);
              }
            }

            break;

          case IParams_1.InteractivityMode.REMOVE:
            this.library.modes.removeParticles(interactivity.modes.remove.particles_nb);
            break;

          case IParams_1.InteractivityMode.BUBBLE:
            this.library.modes.bubble_clicking = true;
            break;

          case IParams_1.InteractivityMode.REPULSE:
            this.library.modes.repulse_clicking = true;
            this.library.modes.repulse_count = 0;
            this.library.modes.repulse_finish = false;
            setTimeout(function () {
              _this.library.modes.repulse_clicking = false;
            }, interactivity.modes.repulse.duration * 1000);
            break;
        }
      }
    }
  }, {
    key: "linkParticles",
    value: function linkParticles(p1, p2) {
      var distance = this.library.manager.getDistance(p1, p2);
      var canvas = this.library.canvas;
      var lineLinked = this.library.getParameter(function (p) {
        return p.particles.line_linked;
      });

      if (distance <= lineLinked.distance) {
        var lineOpacity = lineLinked.opacity - distance / (1 / lineLinked.opacity) / lineLinked.distance;

        if (lineOpacity > 0) {
          var lineColor = lineLinked.color_rgb_line;
          var r = lineColor.r,
              g = lineColor.g,
              b = lineColor.b;
          canvas.ctx.save();
          canvas.ctx.strokeStyle = "rgba( ".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(lineOpacity, " )");
          canvas.ctx.lineWidth = lineLinked.width;
          canvas.ctx.beginPath();

          if (lineLinked.shadow.enable) {
            canvas.ctx.shadowBlur = lineLinked.shadow.blur;
            canvas.ctx.shadowColor = lineLinked.shadow.color;
          }

          canvas.ctx.moveTo(p1.x, p1.y);
          canvas.ctx.lineTo(p2.x, p2.y);
          canvas.ctx.stroke();
          canvas.ctx.closePath();
          canvas.ctx.restore();
        }
      }
    }
  }, {
    key: "attractParticles",
    value: function attractParticles(p1, p2) {
      var _this$library$manager = this.library.manager.getDistances(p1, p2),
          distance = _this$library$manager.distance,
          distanceX = _this$library$manager.distanceX,
          distanceY = _this$library$manager.distanceY;

      var line_linked = this.library.getParameter(function (p) {
        return p.particles.line_linked;
      });
      var attract = this.library.getParameter(function (p) {
        return p.particles.move.attract;
      });

      if (distance <= line_linked.distance) {
        var accelerationX = distanceX / (attract.rotateX * 1000);
        var accelerationY = distanceY / (attract.rotateY * 1000);
        p1.vx -= accelerationX;
        p1.vy -= accelerationY;
        p2.vx += accelerationX;
        p2.vy += accelerationY;
      }
    }
  }, {
    key: "bounceParticles",
    value: function bounceParticles(p1, p2) {
      var distance = this.library.manager.getDistance(p1, p2);
      var minimumDistance = p1.radius + p2.radius;

      if (distance <= minimumDistance) {
        p1.vx = -p1.vx;
        p1.vy = -p1.vy;
        p2.vx = -p2.vx;
        p2.vy = -p2.vy;
      }
    }
  }]);

  return Interact;
}();

exports.default = Interact;

/***/ }),

/***/ "./src/lib/Modes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __webpack_require__("./src/lib/index.ts");

var IParams_1 = __webpack_require__("./src/lib/IParams.ts");

var Interactivity_1 = __webpack_require__("./src/lib/Interactivity.ts");

var Modes =
/*#__PURE__*/
function () {
  function Modes(library) {
    _classCallCheck(this, Modes);

    this.library = library;
    this.bubble_clicking = false;
    this.bubble_duration_end = false;
    this.pushing = false;
    this.repulse_clicking = false;
    this.repulse_count = 0;
    this.repulse_finish = false;
  }

  _createClass(Modes, [{
    key: "pushParticles",
    value: function pushParticles(amount, position) {
      var manager = this.library.manager;
      var particles = this.library.getParameter(function (p) {
        return p.particles;
      });
      this.pushing = true;

      for (var i = 0; i < amount; i++) {
        particles.array.push(new _1.Particle(this.library, {
          position: position
        }));

        if (i === amount - 1) {
          if (!particles.move.enable) {
            manager.particlesDraw();
          }

          this.pushing = false;
        }
      }
    }
  }, {
    key: "removeParticles",
    value: function removeParticles(amount) {
      var manager = this.library.manager;
      var particles = this.library.getParameter(function (p) {
        return p.particles;
      });
      particles.array.splice(0, amount);

      if (!particles.move.enable) {
        manager.particlesDraw();
      }
    }
  }, {
    key: "bubbleParticle",
    value: function bubbleParticle(particle) {
      var _this = this;

      var interactivity = this.library.getParameter(function (p) {
        return p.interactivity;
      });
      var particles = this.library.getParameter(function (p) {
        return p.particles;
      });

      if (interactivity.events.onhover.enable && _1.isInArray(IParams_1.InteractivityMode.BUBBLE, interactivity.events.onhover.mode)) {
        var mouseDistance = this.library.manager.getDistance(particle, this.library.interactivity.mouseMovePosition);
        var bubbleDistance = interactivity.modes.bubble.distance;
        var ratio = 1 - mouseDistance / bubbleDistance;

        if (mouseDistance <= bubbleDistance) {
          if (ratio >= 0 && this.library.interactivity.mouseStatus === Interactivity_1.MouseInteractivityStatus.MOUSEMOVE) {
            var bubbleSize = interactivity.modes.bubble.size;
            var particleSize = particles.size.value;

            if (bubbleSize != particleSize) {
              if (bubbleSize > particleSize) {
                var size = particle.radius + bubbleSize * ratio;

                if (size >= 0) {
                  particle.radius_bubble = size;
                }
              } else {
                var difference = particle.radius - bubbleSize;

                var _size = particle.radius - difference * ratio;

                if (_size > 0) {
                  particle.radius_bubble = _size;
                } else {
                  particle.radius_bubble = 0;
                }
              }
            }

            if (interactivity.modes.bubble.opacity !== particles.opacity.value) {
              if (interactivity.modes.bubble.opacity > particles.opacity.value) {
                var opacity = interactivity.modes.bubble.opacity * ratio;

                if (opacity > particle.opacityValue && opacity <= interactivity.modes.bubble.opacity) {
                  particle.bubbleOpacity = opacity;
                }
              } else {
                var _opacity = particle.opacityValue - (particles.opacity.value - interactivity.modes.bubble.opacity) * ratio;

                if (_opacity < particle.opacityValue && _opacity >= interactivity.modes.bubble.opacity) {
                  particle.bubbleOpacity = _opacity;
                }
              }
            }
          }
        } else {
          particle.bubbleOpacity = particle.opacityValue;
          particle.radius_bubble = particle.radius;
        }

        if (this.library.interactivity.mouseStatus === Interactivity_1.MouseInteractivityStatus.MOUSELEAVE) {
          particle.bubbleOpacity = particle.opacityValue;
          particle.radius_bubble = particle.radius;
        }
      } else if (interactivity.events.onclick.enable && _1.isInArray(IParams_1.InteractivityMode.BUBBLE, interactivity.events.onclick.mode)) {
        if (this.bubble_clicking) {
          var _mouseDistance = this.library.manager.getDistance(particle, this.library.interactivity.mouseClickPosition);

          var timeSpent = (new Date().getTime() - this.library.interactivity.mouseClickTime) / 1000;

          if (timeSpent > interactivity.modes.bubble.duration) {
            this.bubble_duration_end = true;
          }

          if (timeSpent > interactivity.modes.bubble.duration * 2) {
            this.bubble_clicking = false;
            this.bubble_duration_end = false;
          }

          var process = function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
            if (bubble_param != particles_param) {
              if (!_this.bubble_duration_end) {
                if (_mouseDistance <= interactivity.modes.bubble.distance) {
                  var obj;

                  if (p_obj_bubble != undefined) {
                    obj = p_obj_bubble;
                  } else {
                    obj = p_obj;
                  }

                  if (obj != bubble_param) {
                    var value = p_obj - timeSpent * (p_obj - bubble_param) / interactivity.modes.bubble.duration;
                    if (id == "size") particle.radius_bubble = value;
                    if (id == "opacity") particle.bubbleOpacity = value;
                  }
                } else {
                  if (id == "size") particle.radius_bubble = undefined;
                  if (id == "opacity") particle.bubbleOpacity = undefined;
                }
              } else {
                if (p_obj_bubble != undefined) {
                  var value_tmp = p_obj - timeSpent * (p_obj - bubble_param) / interactivity.modes.bubble.duration;
                  var dif = bubble_param - value_tmp;

                  var _value = bubble_param + dif;

                  if (id == "size") particle.radius_bubble = _value;
                  if (id == "opacity") particle.bubbleOpacity = _value;
                }
              }
            }
          };

          if (this.bubble_clicking) {
            process(interactivity.modes.bubble.size, particles.size.value, particle.radius_bubble, particle.radius, "size");
            process(interactivity.modes.bubble.opacity, particles.opacity.value, particle.bubbleOpacity, particle.opacityValue, "opacity");
          }
        }
      }
    }
  }, {
    key: "repulseParticle",
    value: function repulseParticle(particle) {
      var canvas = this.library.canvas;
      var interactivity = this.library.getParameter(function (p) {
        return p.interactivity;
      });
      var particles = this.library.getParameter(function (p) {
        return p.particles;
      });

      if (interactivity.events.onhover.enable && _1.isInArray(IParams_1.InteractivityMode.REPULSE, interactivity.events.onhover.mode) && this.library.interactivity.mouseStatus === Interactivity_1.MouseInteractivityStatus.MOUSEMOVE) {
        var _this$library$manager = this.library.manager.getDistances(particle, this.library.interactivity.mouseMovePosition),
            distance = _this$library$manager.distance,
            distanceX = _this$library$manager.distanceX,
            distanceY = _this$library$manager.distanceY;

        var normVec = {
          x: distanceX / distance,
          y: distanceY / distance
        };
        var repulseRadius = interactivity.modes.repulse.distance;
        var velocity = 100;

        var repulseFactor = _1.clamp(1 / repulseRadius * (-1 * Math.pow(distance / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);

        var pos = {
          x: particle.x + normVec.x * repulseFactor,
          y: particle.y + normVec.y * repulseFactor
        };

        if (particles.move.out_mode === IParams_1.MoveOutMode.BOUNCE) {
          if (pos.x - particle.radius > 0 && pos.x + particle.radius < canvas.width) particle.x = pos.x;
          if (pos.y - particle.radius > 0 && pos.y + particle.radius < canvas.height) particle.y = pos.y;
        } else {
          particle.x = pos.x;
          particle.y = pos.y;
        }
      } else if (interactivity.events.onclick.enable && _1.isInArray(IParams_1.InteractivityMode.REPULSE, interactivity.events.onclick.mode)) {
        if (!this.repulse_finish) {
          this.repulse_count++;
          if (this.repulse_count == particles.array.length) this.repulse_finish = true;
        }

        if (this.repulse_clicking) {
          var _repulseRadius = Math.pow(interactivity.modes.repulse.distance / 6, 3);

          var _this$library$manager2 = this.library.manager.getDistances(this.library.interactivity.mouseClickPosition, particle),
              _distance = _this$library$manager2.distance,
              _distanceX = _this$library$manager2.distanceX,
              _distanceY = _this$library$manager2.distanceY;

          var force = _repulseRadius / Math.pow(_distance, 2);

          var repulsion = force * -1;

          if (_distance <= _repulseRadius) {
            var f = Math.atan2(_distanceY, _distanceX);
            particle.vx = repulsion * Math.cos(f);
            particle.vy = repulsion * Math.sin(f);

            if (particles.move.out_mode === IParams_1.MoveOutMode.BOUNCE) {
              var _pos = {
                x: particle.x + particle.vx,
                y: particle.y + particle.vy
              };
              if (_pos.x + particle.radius > canvas.width) particle.vx = -particle.vx;else if (_pos.x - particle.radius < 0) particle.vx = -particle.vx;
              if (_pos.y + particle.radius > canvas.height) particle.vy = -particle.vy;else if (_pos.y - particle.radius < 0) particle.vy = -particle.vy;
            }
          }
        } else {
          if (this.repulse_clicking === false) {
            particle.vx = particle.vx_i;
            particle.vy = particle.vy_i;
          }
        }
      }
    }
  }, {
    key: "grabParticle",
    value: function grabParticle(particle) {
      var canvas = this.library.canvas;

      var _this$library$getPara = this.library.getParameter(function (p) {
        return p;
      }),
          interactivity = _this$library$getPara.interactivity,
          particles = _this$library$getPara.particles;

      if (interactivity.events.onhover.enable && this.library.interactivity.mouseStatus === Interactivity_1.MouseInteractivityStatus.MOUSEMOVE) {
        var distance = this.library.manager.getDistance(particle, this.library.interactivity.mouseMovePosition);

        if (distance <= interactivity.modes.grab.distance) {
          var grab = interactivity.modes.grab;
          var opacity_line = grab.line_linked.opacity - distance / (1 / grab.line_linked.opacity) / grab.distance;

          if (opacity_line > 0) {
            var color_line = particles.line_linked.color_rgb_line;
            var r = color_line.r,
                g = color_line.g,
                b = color_line.b;
            canvas.ctx.strokeStyle = "rgba( ".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity_line, " )");
            canvas.ctx.lineWidth = particles.line_linked.width;
            canvas.ctx.beginPath();
            canvas.ctx.moveTo(particle.x, particle.y);
            canvas.ctx.lineTo(this.library.interactivity.mouseMovePosition.x, this.library.interactivity.mouseMovePosition.y);
            canvas.ctx.stroke();
            canvas.ctx.closePath();
          }
        }
      }
    }
  }]);

  return Modes;
}();

exports.default = Modes;

/***/ }),

/***/ "./src/lib/Particle.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __webpack_require__("./src/lib/index.ts");

var IParams_1 = __webpack_require__("./src/lib/IParams.ts");

var Utils_1 = __webpack_require__("./src/lib/Utils.ts");

var Particle =
/*#__PURE__*/
function () {
  function Particle(library) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        color = _ref.color,
        move = _ref.move,
        opacity = _ref.opacity,
        polygon = _ref.polygon,
        position = _ref.position,
        shape = _ref.shape,
        size = _ref.size;

    _classCallCheck(this, Particle);

    this.library = library;
    this.setupSize(size);
    this.setupPosition(move, polygon, position);
    this.setupColor(color);
    this.setupOpacity(opacity);
    this.setupAnimation(move);
    this.setupShape(shape);
  }

  _createClass(Particle, [{
    key: "setupSize",
    value: function setupSize(size) {
      var defaultSize = this.library.getParameter(function (p) {
        return p.particles.size;
      });
      size = Utils_1.deepAssign({}, defaultSize, size);
      var random_min = size.random_min ? size.random_min : 0;
      this.radius = size.random ? Math.random() * (size.value - size.random_min) + size.random_min : size.value;

      if (size.anim.enable) {
        this.size_status = false;
        this.vs = size.anim.speed / 100;
        if (!size.anim.sync) this.vs = this.vs * Math.random();
      }
    }
  }, {
    key: "setupPosition",
    value: function setupPosition(move, polygon, position) {
      this.initialPosition = position;
      var defaultMove = this.library.getParameter(function (p) {
        return p.particles.move;
      });
      move = Utils_1.deepAssign({}, defaultMove, move);
      var defaultPolygon = this.library.getParameter(function (p) {
        return p.polygon;
      });
      polygon = Utils_1.deepAssign({}, defaultPolygon, polygon);
      var particlesArray = this.library.getParameter(function (p) {
        return p.particles.array;
      });
      var _this$library = this.library,
          canvas = _this$library.canvas,
          vendors = _this$library.vendors;

      if (position) {
        this.x = position.x;
        this.y = position.y;
      } else {
        if (polygon.enable) {
          var randomPosition;

          switch (polygon.type) {
            case IParams_1.PolygonType.INLINE:
              switch (polygon.inline.arrangement) {
                case IParams_1.PolygonInlineArrangementType.RANDOM_POINT:
                  randomPosition = this.library.polygonMask.getRandomPointOnPolygonPath();
                  break;

                case IParams_1.PolygonInlineArrangementType.RANDOM_LENGTH:
                  randomPosition = this.library.polygonMask.getRandomPointOnPolygonPathByLength();
                  break;

                case IParams_1.PolygonInlineArrangementType.EQUIDISTANT:
                  randomPosition = this.library.polygonMask.getEquidistantPoingOnPolygonPathByIndex(particlesArray.length);
                  break;

                case IParams_1.PolygonInlineArrangementType.ONE_PER_POINT:
                default:
                  randomPosition = this.library.polygonMask.getPoingOnPolygonPathByIndex(particlesArray.length);
              }

              break;

            case IParams_1.PolygonType.INSIDE:
              randomPosition = this.library.polygonMask.getRandomPointInsidePolygonPath();
              break;

            case IParams_1.PolygonType.OUTSIDE:
              randomPosition = this.library.polygonMask.getRandomPointOutsidePolygonPath();
              break;
          }

          if (randomPosition) {
            this.x = randomPosition.x;
            this.y = randomPosition.y;
            this.initialPosition = {
              x: this.x,
              y: this.y
            };
          }
        }
      }

      if (this.x === undefined || this.y === undefined) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }

      if (this.x > canvas.width - this.radius * 2) {
        this.x = this.x - this.radius;
      } else if (this.x < this.radius * 2) {
        this.x = this.x + this.radius;
      }

      if (this.y > canvas.height - this.radius * 2) {
        this.y = this.y - this.radius;
      } else if (this.y < this.radius * 2) {
        this.y = this.y + this.radius;
      }

      if (move.bounce) {
        vendors.checkOverlap(this, {
          x: this.x,
          y: this.y
        });
      }
    }
  }, {
    key: "setupColor",
    value: function setupColor(color) {
      var defaultColor = this.library.getParameter(function (p) {
        return p.particles.color;
      });
      color = Utils_1.deepAssign({}, color, defaultColor);
      this.color = _1.getColor(color.value);
    }
  }, {
    key: "setupOpacity",
    value: function setupOpacity(opacity) {
      var defaultOpacity = this.library.getParameter(function (p) {
        return p.particles.opacity;
      });
      opacity = Utils_1.deepAssign({}, defaultOpacity, opacity);
      this.opacityValue = (opacity.random ? Math.random() : 1) * opacity.value;

      if (opacity.anim.enable) {
        this.opacity_status = false;
        this.vo = opacity.anim.speed / 100;

        if (!opacity.anim.sync) {
          this.vo = this.vo * Math.random();
        }
      }
    }
  }, {
    key: "setupAnimation",
    value: function setupAnimation(move) {
      var defaultMove = this.library.getParameter(function (p) {
        return p.particles.move;
      });
      move = Utils_1.deepAssign({}, defaultMove, move);
      var baseVelocity;

      switch (move.direction) {
        case IParams_1.MoveDirection.TOP:
          baseVelocity = {
            x: 0,
            y: -1
          };
          break;

        case IParams_1.MoveDirection.TOP_RIGHT:
          baseVelocity = {
            x: 0.5,
            y: -0.5
          };
          break;

        case IParams_1.MoveDirection.RIGHT:
          baseVelocity = {
            x: 1,
            y: 0
          };
          break;

        case IParams_1.MoveDirection.BOTTOM_RIGHT:
          baseVelocity = {
            x: 0.5,
            y: 0.5
          };
          break;

        case IParams_1.MoveDirection.BOTTOM:
          baseVelocity = {
            x: 0,
            y: 1
          };
          break;

        case IParams_1.MoveDirection.BOTTOM_LEFT:
          baseVelocity = {
            x: -0.5,
            y: 1
          };
          break;

        case IParams_1.MoveDirection.LEFT:
          baseVelocity = {
            x: -1,
            y: 0
          };
          break;

        case IParams_1.MoveDirection.TOP_LEFT:
          baseVelocity = {
            x: -0.5,
            y: -0.5
          };
          break;

        default:
          baseVelocity = {
            x: 0,
            y: 0
          };
          break;
      }

      if (move.straight) {
        this.vx = baseVelocity.x;
        this.vy = baseVelocity.y;

        if (move.random) {
          this.vx = this.vx * Math.random();
          this.vy = this.vy * Math.random();
        }
      } else {
        this.vx = baseVelocity.x + Math.random() - 0.5;
        this.vy = baseVelocity.y + Math.random() - 0.5;
      }

      this.vx_i = this.vx;
      this.vy_i = this.vy;
    }
  }, {
    key: "setupShape",
    value: function setupShape(shape) {
      var _this = this;

      var defaultShape = this.library.getParameter(function (p) {
        return p.particles.shape;
      });
      shape = Utils_1.deepAssign({}, defaultShape, shape);
      var particlesArray = this.library.getParameter(function (p) {
        return p.particles.array;
      });

      if (Array.isArray(shape.type)) {
        var selectedShape = shape.type[Math.floor(Math.random() * shape.type.length)];
        shape = Utils_1.deepAssign({}, shape, {
          type: selectedShape
        });
      }

      this.shape = shape;

      if (shape.type === IParams_1.ShapeType.IMAGE || shape.type === IParams_1.ShapeType.IMAGES) {
        if (shape.type === IParams_1.ShapeType.IMAGES) {
          this.shapeImage = this.library.imageManager.getImage(particlesArray.length);
        } else {
          this.shapeImage = this.library.imageManager.getImage();
        }

        if (this.shapeImage.type === "svg" && this.shapeImage.svgData !== undefined) {
          this.library.imageManager.createSvgImage(this.shapeImage.svgData, {
            color: this.color,
            opacity: this.opacityValue
          }).then(function (image) {
            _this.shapeImage.elementData = image;
            _this.shapeImage.loaded = true;
          });
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this$library2 = this.library,
          canvas = _this$library2.canvas,
          vendors = _this$library2.vendors;
      var radius;

      if (this.radius_bubble !== undefined) {
        radius = this.radius_bubble;
      } else {
        radius = this.radius;
      }

      var opacityValue;

      if (this.bubbleOpacity !== undefined) {
        opacityValue = this.bubbleOpacity;
      } else {
        opacityValue = this.opacityValue;
      }

      var colorValue;

      if (this.color.rgb) {
        var _this$color$rgb = this.color.rgb,
            r = _this$color$rgb.r,
            g = _this$color$rgb.g,
            b = _this$color$rgb.b;
        colorValue = "rgba( ".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacityValue, " )");
      } else {
        var _this$color$hsl = this.color.hsl,
            h = _this$color$hsl.h,
            s = _this$color$hsl.s,
            l = _this$color$hsl.l;
        colorValue = "hsla( ".concat(h, ", ").concat(s, ", ").concat(l, ", ").concat(opacityValue, " )");
      }

      canvas.ctx.fillStyle = colorValue;
      canvas.ctx.beginPath();

      switch (this.shape.type) {
        case IParams_1.ShapeType.CIRCLE:
          canvas.ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
          break;

        case IParams_1.ShapeType.EDGE:
          canvas.ctx.rect(this.x - radius, this.y - radius, radius * 2, radius * 2);
          break;

        case IParams_1.ShapeType.TRIANGLE:
          vendors.drawShape(canvas.ctx, this.x - radius, this.y + radius / 1.66, radius * 2, 3, 2);
          break;

        case IParams_1.ShapeType.POLYGON:
          vendors.drawShape(canvas.ctx, this.x - radius / (this.shape.polygon.nb_sides / 3.5), this.y - radius / (2.66 / 3.5), radius * 2.66 / (this.shape.polygon.nb_sides / 3), this.shape.polygon.nb_sides, 1);
          break;

        case IParams_1.ShapeType.STAR:
          vendors.drawShape(canvas.ctx, this.x - radius * 2 / (this.shape.polygon.nb_sides / 4), this.y - radius / (2 * 2.66 / 3.5), radius * 2 * 2.66 / (this.shape.polygon.nb_sides / 3), this.shape.polygon.nb_sides, 2);
          break;

        case IParams_1.ShapeType.IMAGES:
        case IParams_1.ShapeType.IMAGE:
          if (this.shapeImage.elementData) {
            canvas.ctx.drawImage(this.shapeImage.elementData, this.x - radius, this.y - radius, radius * 2, radius * 2 / this.shapeImage.ratio);
          }

          break;
      }

      canvas.ctx.closePath();

      if (this.shape.stroke.width > 0) {
        canvas.ctx.strokeStyle = this.shape.stroke.color;
        canvas.ctx.lineWidth = this.shape.stroke.width;
        canvas.ctx.stroke();
      }

      canvas.ctx.fill();
    }
  }]);

  return Particle;
}();

exports.default = Particle;

/***/ }),

/***/ "./src/lib/ParticleManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __webpack_require__("./src/lib/index.ts");

var IParams_1 = __webpack_require__("./src/lib/IParams.ts");

var ParticleManager =
/*#__PURE__*/
function () {
  function ParticleManager(library) {
    _classCallCheck(this, ParticleManager);

    this.library = library;
    this.particlesCreate = this.particlesCreate.bind(this);
  }

  _createClass(ParticleManager, [{
    key: "particlesCreate",
    value: function particlesCreate() {
      var particles = this.library.getParameter(function (p) {
        return p.particles;
      });
      var polygon = this.library.getParameter(function (p) {
        return p.polygon;
      });
      var particlesNumber = particles.number.value;

      if (polygon.enable && polygon.type === IParams_1.PolygonType.INLINE && polygon.inline.arrangement === IParams_1.PolygonInlineArrangementType.ONE_PER_POINT) {
        particlesNumber = this.library.polygonMask.getVerticesNumber();
      }

      for (var i = 0; i < particlesNumber; i++) {
        particles.array.push(new _1.Particle(this.library));
      }
    }
  }, {
    key: "particlesUpdate",
    value: function particlesUpdate() {
      var _this = this;

      var _this$library = this.library,
          canvas = _this$library.canvas,
          modes = _this$library.modes;
      var interactivity = this.library.getParameter(function (p) {
        return p.interactivity;
      });
      var particles = this.library.getParameter(function (p) {
        return p.particles;
      });
      var polygon = this.library.getParameter(function (p) {
        return p.polygon;
      });
      particles.array.forEach(function (particle, i) {
        if (particles.move.enable) {
          var ms = particles.move.speed / 2;
          particle.x += particle.vx * ms;
          particle.y += particle.vy * ms;
        }

        if (particles.opacity.anim.enable) {
          if (particle.opacity_status == true) {
            if (particle.opacityValue >= particles.opacity.value) particle.opacity_status = false;
            particle.opacityValue += particle.vo;
          } else {
            if (particle.opacityValue <= particles.opacity.anim.opacity_min) particle.opacity_status = true;
            particle.opacityValue -= particle.vo;
          }

          if (particle.opacityValue < 0) particle.opacityValue = 0;
        }

        if (particles.size.anim.enable) {
          if (particle.size_status == true) {
            if (particle.radius >= particles.size.value) particle.size_status = false;
            particle.radius += particle.vs;
          } else {
            if (particle.radius <= particles.size.anim.size_min) particle.size_status = true;
            particle.radius -= particle.vs;
          }

          if (particle.radius < 0) particle.radius = 0;
        }

        var new_pos;

        if (particles.move.out_mode == "bounce") {
          new_pos = {
            x_left: particle.radius,
            x_right: canvas.width,
            y_top: particle.radius,
            y_bottom: canvas.height
          };
        } else {
          new_pos = {
            x_left: -particle.radius,
            x_right: canvas.width + particle.radius,
            y_top: -particle.radius,
            y_bottom: canvas.height + particle.radius
          };
        }

        if (particle.x - particle.radius > canvas.width) {
          particle.x = new_pos.x_left;
          particle.y = Math.random() * canvas.height;
        } else if (particle.x + particle.radius < 0) {
          particle.x = new_pos.x_right;
          particle.y = Math.random() * canvas.height;
        }

        if (particle.y - particle.radius > canvas.height) {
          particle.y = new_pos.y_top;
          particle.x = Math.random() * canvas.width;
        } else if (particle.y + particle.radius < 0) {
          particle.y = new_pos.y_bottom;
          particle.x = Math.random() * canvas.width;
        }

        switch (particles.move.out_mode) {
          case "bounce":
            {
              if (polygon.enable) {
                var moveRadius = polygon.move.radius;

                switch (polygon.type) {
                  case IParams_1.PolygonType.INLINE:
                    if (_this.getDistance(particle.initialPosition, particle) > moveRadius) {
                      particle.vx = -particle.vx + particle.vy / 2;
                      particle.vy = -particle.vy + particle.vx / 2;
                    }

                    break;

                  case IParams_1.PolygonType.INSIDE:
                  case IParams_1.PolygonType.OUTSIDE:
                    {
                      var mode = polygon.move.type;

                      if (mode === IParams_1.PolygonMoveType.RADIUS) {
                        if (_this.getDistance(particle.initialPosition, particle) > moveRadius) {
                          particle.vx = -particle.vx + particle.vy / 2;
                          particle.vy = -particle.vy + particle.vx / 2;
                        }
                      } else if (mode === IParams_1.PolygonMoveType.PATH) {
                        var shouldBeInside = polygon.type === IParams_1.PolygonType.INSIDE;

                        var isInside = _this.library.polygonMask.isPointInsidePolygon({
                          x: particle.x,
                          y: particle.y
                        });

                        if (shouldBeInside && !isInside || !shouldBeInside && isInside) {
                          particle.vx = -particle.vx + particle.vy / 2;
                          particle.vy = -particle.vy + particle.vx / 2;
                        }
                      }
                    }
                    break;
                }
              } else {
                if (particle.x + particle.radius > canvas.width) particle.vx = -particle.vx;else if (particle.x - particle.radius < 0) particle.vx = -particle.vx;
                if (particle.y + particle.radius > canvas.height) particle.vy = -particle.vy;else if (particle.y - particle.radius < 0) particle.vy = -particle.vy;
              }
            }
            break;
        }

        if (_1.isInArray("grab", interactivity.events.onhover.mode)) {
          modes.grabParticle(particle);
        }

        if (_1.isInArray("bubble", interactivity.events.onhover.mode) || _1.isInArray("bubble", interactivity.events.onclick.mode)) {
          modes.bubbleParticle(particle);
        }

        if (_1.isInArray("repulse", interactivity.events.onhover.mode) || _1.isInArray("repulse", interactivity.events.onclick.mode)) {
          modes.repulseParticle(particle);
        }

        if (particles.line_linked.enable || particles.move.attract.enable) {
          for (var j = i + 1; j < particles.array.length; j++) {
            var link = particles.array[j];
            if (particles.line_linked.enable) _this.library.interactivity.linkParticles(particle, link);
            if (particles.move.attract.enable) _this.library.interactivity.attractParticles(particle, link);
            if (particles.move.bounce) _this.library.interactivity.bounceParticles(particle, link);
          }
        }
      });
    }
  }, {
    key: "getDistances",
    value: function getDistances(p1, p2) {
      var distanceX = p1.x - p2.x;
      var distanceY = p1.y - p2.y;
      var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      return {
        distance: distance,
        distanceX: distanceX,
        distanceY: distanceY
      };
    }
  }, {
    key: "getDistance",
    value: function getDistance(p1, p2) {
      return this.getDistances(p1, p2).distance;
    }
  }, {
    key: "particlesDraw",
    value: function particlesDraw() {
      var _this$library2 = this.library,
          canvas = _this$library2.canvas,
          manager = _this$library2.manager;
      var particles = this.library.getParameter(function (p) {
        return p.particles;
      });
      var polygon = this.library.getParameter(function (p) {
        return p.polygon;
      });
      canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
      manager.particlesUpdate();
      particles.array.forEach(function (particle) {
        particle.draw();
      });
      if (polygon.enable && polygon.draw.enable) this.library.polygonMask.drawPolygon();
    }
  }, {
    key: "particlesEmpty",
    value: function particlesEmpty() {
      var particles = this.library.getParameter(function (p) {
        return p.particles;
      });
      particles.array = [];
    }
  }, {
    key: "particlesRefresh",
    value: function particlesRefresh() {
      cancelAnimationFrame(this.library.drawAnimFrame);
      this.particlesEmpty();
      this.library.canvasClear();
      this.library.start();
    }
  }]);

  return ParticleManager;
}();

exports.default = ParticleManager;

/***/ }),

/***/ "./src/lib/ParticlesLibrary.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __webpack_require__("./src/lib/index.ts");

var ImageManager_1 = __webpack_require__("./src/lib/ImageManager.ts");

var ParticlesLibrary =
/*#__PURE__*/
function () {
  function ParticlesLibrary(params) {
    _classCallCheck(this, ParticlesLibrary);

    this.imageManager = new ImageManager_1.ImageManager();
    this.retina = false;
    this.onWindowResize = this.onWindowResize.bind(this);
    this.loadParameters(params);
    this.interactivity = new _1.Interactivity(this);
    this.modes = new _1.Modes(this);
    this.vendors = new _1.Vendors(this.imageManager, this.params, this);
    this.manager = new _1.ParticleManager(this);
    this.polygonMask = new _1.PolygonMask(this);
  }

  _createClass(ParticlesLibrary, [{
    key: "getParameter",
    value: function getParameter(selector) {
      return selector(this.params);
    }
  }, {
    key: "setParameters",
    value: function setParameters(params) {
      this.params = _1.deepAssign(Object.assign({}, this.params), params);
    }
  }, {
    key: "loadParameters",
    value: function loadParameters(params) {
      var mergedParams = _1.deepAssign({}, _1.getDefaultParams(), params);

      this.params = mergedParams;
    }
  }, {
    key: "loadCanvas",
    value: function loadCanvas(canvasElement) {
      this.canvas = {
        element: canvasElement,
        width: canvasElement.offsetWidth,
        height: canvasElement.offsetHeight
      };
    }
  }, {
    key: "start",
    value: function start() {
      this.interactivity.attachEventHandlers();
      this.vendors.start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.detachListeners();
      this.interactivity.detachEventHandlers();
      cancelAnimationFrame(this.drawAnimFrame);
      this.canvasClear();
    }
  }, {
    key: "detachListeners",
    value: function detachListeners() {
      window.removeEventListener("resize", this.onWindowResize);
    }
  }, {
    key: "retinaInit",
    value: function retinaInit() {
      var pixelRatio = window.devicePixelRatio;

      if (this.params.retina_detect && pixelRatio > 1) {
        this.canvas.pxratio = pixelRatio;
        this.canvas.width = this.canvas.element.offsetWidth * this.canvas.pxratio;
        this.canvas.height = this.canvas.element.offsetHeight * this.canvas.pxratio;
        this.retina = true;
        var params = this.getParameter(function (p) {
          return p;
        });
        this.setParameters({
          interactivity: {
            modes: {
              bubble: {
                distance: params.interactivity.modes.bubble.distance * pixelRatio,
                size: params.interactivity.modes.bubble.size * pixelRatio
              },
              grab: {
                distance: params.interactivity.modes.grab.distance * pixelRatio
              },
              repulse: {
                distance: params.interactivity.modes.repulse.distance * pixelRatio
              }
            }
          },
          particles: {
            line_linked: {
              distance: params.particles.line_linked.distance * pixelRatio,
              width: params.particles.line_linked.width * pixelRatio
            },
            move: {
              speed: params.particles.move.speed * pixelRatio
            },
            size: {
              value: params.particles.size.value * pixelRatio,
              anim: {
                speed: params.particles.size.anim.speed * pixelRatio
              }
            }
          }
        });
      } else {
        this.canvas.pxratio = 1;
        this.retina = false;
      }
    }
  }, {
    key: "canvasInit",
    value: function canvasInit() {
      var canvas = this.canvas;
      canvas.ctx = canvas.element.getContext("2d");
    }
  }, {
    key: "canvasSize",
    value: function canvasSize() {
      var canvas = this.canvas;
      canvas.element.width = canvas.width;
      canvas.element.height = canvas.height;

      if (this.params && this.params.interactivity.events.resize) {
        window.addEventListener("resize", this.onWindowResize);
      }
    }
  }, {
    key: "canvasPaint",
    value: function canvasPaint() {
      var canvas = this.canvas;

      if (canvas && canvas.ctx) {
        try {
          canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
        } catch (e) {
          console.warn(e);
        }
      }
    }
  }, {
    key: "canvasClear",
    value: function canvasClear() {
      var canvas = this.canvas;

      if (canvas && canvas.ctx) {
        try {
          canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
        } catch (e) {
          console.warn(e);
        }
      }
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      var canvas = this.canvas,
          manager = this.manager,
          vendors = this.vendors;
      canvas.width = canvas.element.offsetWidth;
      canvas.height = canvas.element.offsetHeight;

      if (this.retina) {
        canvas.width *= canvas.pxratio;
        canvas.height *= canvas.pxratio;
      }

      canvas.element.width = canvas.width;
      canvas.element.height = canvas.height;

      if (!this.params.particles.move.enable || this.params.polygon.enable) {
        manager.particlesEmpty();
        this.polygonMask.initialize(this.getParameter(function (p) {
          return p.polygon;
        })).then(function () {
          manager.particlesCreate();
          manager.particlesDraw();
        });
      } else {
        vendors.densityAutoParticles();
      }
    }
  }]);

  return ParticlesLibrary;
}();

exports.default = ParticlesLibrary;

/***/ }),

/***/ "./src/lib/PolygonMask.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PolygonMask =
/*#__PURE__*/
function () {
  function PolygonMask(library) {
    _classCallCheck(this, PolygonMask);

    this.library = library;
    this.polygonPathLength = 0;
    this.initialized = false;
    this.path2DSupported = !!window["Path2D"];
    this.debounceTime = 250;
    this.parseSvgPathToPolygon = this.parseSvgPathToPolygon.bind(this);
  }

  _createClass(PolygonMask, [{
    key: "initialize",
    value: function initialize(polygon) {
      var _this = this;

      this.polygon = polygon;
      if (!polygon.enable) return Promise.resolve();

      if (!this.initialized) {
        return this.parseSvgPathToPolygon().then(function (_) {
          _this.initialized = true;
        });
      } else {
        return new Promise(function (resolve) {
          if (_this.debounceTimer) clearTimeout(_this.debounceTimer);
          _this.debounceTimer = setTimeout(function () {
            _this.parseSvgPathToPolygon().then(function (_) {
              resolve();
            });
          }, _this.debounceTime);
        });
      }
    }
  }, {
    key: "getVerticesNumber",
    value: function getVerticesNumber() {
      if (!this.initialized) return 0;
      return this.polygonRaw.length;
    }
  }, {
    key: "parseSvgPathToPolygon",
    value: function parseSvgPathToPolygon(svgUrl) {
      var _this2 = this;

      svgUrl = svgUrl || this.polygon.url;
      var canvasSizeDidNotChange = this.library.canvas.width === this.lastCanvasWidth && this.library.canvas.height === this.lastCanvasHeight;
      if (this.polygonRaw && this.polygonRaw.length && canvasSizeDidNotChange) return Promise.resolve(this.polygonRaw);
      return this.parseSvgPath(svgUrl).then(function (polygonData) {
        _this2.polygonData = polygonData;
        _this2.polygonWidth = parseInt(_this2.polygonData.svg.getAttribute("width")) * _this2.polygon.scale;
        _this2.polygonHeight = parseInt(_this2.polygonData.svg.getAttribute("height")) * _this2.polygon.scale;
        _this2.polygonOffsetX = _this2.library.canvas.width / 2 - _this2.polygonWidth / 2;
        _this2.polygonOffsetY = _this2.library.canvas.height / 2 - _this2.polygonHeight / 2;

        if (_this2.polygonData.paths.length) {
          _this2.polygonPathLength = _this2.polygonData.paths[0].getTotalLength();
        }

        _this2.polygonRaw = [];

        _this2.polygonData.paths.forEach(function (path) {
          var pathLength = path.pathSegList.numberOfItems;

          for (var a = 0; a < pathLength; a++) {
            var point = {
              x: 0,
              y: 0
            };
            var pathSeg = path.pathSegList.getItem(a);

            switch (pathSeg.pathSegType) {
              case SVGPathSeg.PATHSEG_ARC_ABS:
              case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
              case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
              case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
              case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
              case SVGPathSeg.PATHSEG_LINETO_ABS:
              case SVGPathSeg.PATHSEG_MOVETO_ABS:
                point.x = pathSeg.x;
                point.y = pathSeg.y;

              case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                point.x = pathSeg.x;
                break;

              case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                point.y = pathSeg.y;
                break;

              case SVGPathSeg.PATHSEG_ARC_REL:
              case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
              case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
              case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
              case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
              case SVGPathSeg.PATHSEG_LINETO_REL:
              case SVGPathSeg.PATHSEG_MOVETO_REL:
                point.x = pathSeg.x;
                point.y = pathSeg.y;

              case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                point.x = pathSeg.x;
                break;

              case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                point.y = pathSeg.y;
                break;

              case SVGPathSeg.PATHSEG_UNKNOWN:
              case SVGPathSeg.PATHSEG_CLOSEPATH:
              default:
                continue;
            }

            _this2.polygonRaw.push([point.x * _this2.polygon.scale + _this2.polygonOffsetX, point.y * _this2.polygon.scale + _this2.polygonOffsetY]);
          }
        });

        _this2.lastCanvasWidth = _this2.library.canvas.width;
        _this2.lastCanvasHeight = _this2.library.canvas.height;

        _this2.createPath2D();

        return _this2.polygonRaw;
      });
    }
  }, {
    key: "parseSvgPath",
    value: function parseSvgPath(svgUrl) {
      if (!this.polygonData || !this.polygonData.paths || !this.polygonData.paths.length || !this.polygonData.svg) {
        return this.library.imageManager.downloadImage(svgUrl).then(function (data) {
          return {
            paths: [data.xhr.responseXML.getElementsByTagName("path")[0]],
            svg: data.xhr.responseXML.getElementsByTagName("svg")[0]
          };
        });
      } else {
        return Promise.resolve(this.polygonData);
      }
    }
  }, {
    key: "getRandomPointOnPolygonPath",
    value: function getRandomPointOnPolygonPath() {
      if (!this.initialized) throw new Error("No polygon data loaded.");

      var _this$polygonRaw$Math = _slicedToArray(this.polygonRaw[Math.floor(Math.random() * this.polygonRaw.length)], 2),
          x = _this$polygonRaw$Math[0],
          y = _this$polygonRaw$Math[1];

      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getRandomPointOnPolygonPathByLength",
    value: function getRandomPointOnPolygonPathByLength() {
      if (!this.initialized) throw new Error("No polygon data loaded.");
      var point = this.polygonData.paths[0].getPointAtLength(Math.floor(Math.random() * this.polygonPathLength) + 1);
      return {
        x: point.x * this.polygon.scale + this.polygonOffsetX,
        y: point.y * this.polygon.scale + this.polygonOffsetY
      };
    }
  }, {
    key: "getRandomPointInsidePolygonPath",
    value: function getRandomPointInsidePolygonPath() {
      if (!this.initialized) throw new Error("No polygon data loaded.");
      var point = {
        x: Math.random() * this.library.canvas.width,
        y: Math.random() * this.library.canvas.height
      };
      return this.isPointInsidePolygon(point) ? point : this.getRandomPointInsidePolygonPath();
    }
  }, {
    key: "getRandomPointOutsidePolygonPath",
    value: function getRandomPointOutsidePolygonPath() {
      if (!this.initialized) throw new Error("No polygon data loaded.");
      var point = {
        x: Math.random() * this.library.canvas.width,
        y: Math.random() * this.library.canvas.height
      };
      return this.isPointInsidePolygon(point) ? this.getRandomPointOutsidePolygonPath() : point;
    }
  }, {
    key: "isPointInsidePolygon",
    value: function isPointInsidePolygon(point) {
      if (this.path2DSupported && this.polygonPath) {
        return this.library.canvas.ctx.isPointInPath(this.polygonPath, point.x, point.y);
      } else {
        var inside = false;

        for (var i = 0, j = this.polygonRaw.length - 1; i < this.polygonRaw.length; j = i++) {
          var xi = this.polygonRaw[i][0],
              yi = this.polygonRaw[i][1];
          var xj = this.polygonRaw[j][0],
              yj = this.polygonRaw[j][1];
          var intersect = yi > point.y != yj > point.y && point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi;
          if (intersect) inside = !inside;
        }

        return inside;
      }
    }
  }, {
    key: "getPoingOnPolygonPathByIndex",
    value: function getPoingOnPolygonPathByIndex(index) {
      if (!this.initialized) throw new Error("No polygon data loaded.");

      var _this$polygonRaw = _slicedToArray(this.polygonRaw[index % this.polygonRaw.length], 2),
          x = _this$polygonRaw[0],
          y = _this$polygonRaw[1];

      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getEquidistantPoingOnPolygonPathByIndex",
    value: function getEquidistantPoingOnPolygonPathByIndex(index) {
      if (!this.initialized) throw new Error("No polygon data loaded.");
      var point = this.polygonData.paths[0].getPointAtLength(this.polygonPathLength / this.library.getParameter(function (p) {
        return p.particles.number.value;
      }) * index);
      return {
        x: point.x * this.polygon.scale + this.polygonOffsetX,
        y: point.y * this.polygon.scale + this.polygonOffsetY
      };
    }
  }, {
    key: "drawPolygon",
    value: function drawPolygon() {
      var context = this.library.canvas.ctx;

      if (!this.path2DSupported) {
        if (!this.initialized) return;
        context.beginPath();
        context.moveTo(this.polygonRaw[0][0], this.polygonRaw[0][1]);
        this.polygonRaw.forEach(function (_ref, i) {
          var _ref2 = _slicedToArray(_ref, 2),
              x = _ref2[0],
              y = _ref2[1];

          if (i > 0) context.lineTo(x, y);
        });
        context.closePath();
      }

      context.strokeStyle = this.polygon.draw.stroke.color;
      context.lineWidth = this.polygon.draw.stroke.width;
      this.polygonPath ? context.stroke(this.polygonPath) : context.stroke();
    }
  }, {
    key: "createPath2D",
    value: function createPath2D() {
      var _this3 = this;

      if (!this.path2DSupported) return;
      this.polygonPath = new Path2D();
      this.polygonPath.moveTo(this.polygonRaw[0][0], this.polygonRaw[0][1]);
      this.polygonRaw.forEach(function (_ref3, i) {
        var _ref4 = _slicedToArray(_ref3, 2),
            x = _ref4[0],
            y = _ref4[1];

        if (i > 0) _this3.polygonPath.lineTo(x, y);
      });
      this.polygonPath.closePath();
    }
  }]);

  return PolygonMask;
}();

exports.PolygonMask = PolygonMask;

/***/ }),

/***/ "./src/lib/Utils.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.hexToRgb = function (hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

exports.clamp = function (number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

exports.isInArray = isInArray;

function isEqual(value, arrayOrObject) {
  if (Array.isArray(arrayOrObject)) return isInArray(value, arrayOrObject);
  return arrayOrObject === value;
}

exports.isEqual = isEqual;

exports.deepAssign = function (destination) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  for (var _i = 0; _i < sources.length; _i++) {
    var source = sources[_i];
    if (source === undefined || source === null) continue;

    var typeOfSource = _typeof(source);

    if (typeOfSource === "object") {
      var sourceIsArray = Array.isArray(source);

      if (sourceIsArray) {
        if (_typeof(destination) !== "object" || !destination || !Array.isArray(destination)) destination = [];
      } else {
        if (_typeof(destination) !== "object" || !destination || Array.isArray(destination)) destination = {};
      }

      var _loop = function _loop(key) {
        if (key === "__proto__") return "continue";
        var value = source[key];
        var isObject = _typeof(value) === "object";

        if (isObject && Array.isArray(value)) {
          destination[key] = value.map(function (v) {
            return exports.deepAssign(destination[key], v);
          });
        } else if (isObject) {
          destination[key] = exports.deepAssign(destination[key], value);
        } else {
          destination[key] = exports.deepAssign(destination[key], value);
        }
      };

      for (var key in source) {
        var _ret = _loop(key);

        if (_ret === "continue") continue;
      }
    } else {
      destination = source;
    }
  }

  return destination;
};

exports.getColor = function (colorObject) {
  var color = {};

  if (_typeof(colorObject) == "object") {
    if (colorObject instanceof Array) {
      var selectedColor = colorObject[Math.floor(Math.random() * colorObject.length)];
      color.rgb = exports.hexToRgb(selectedColor);
    } else {
      var r = colorObject.r,
          g = colorObject.g,
          b = colorObject.b;

      if (r !== undefined && g !== undefined && b !== undefined) {
        color.rgb = {
          r: r,
          g: g,
          b: b
        };
      } else {
        var h = colorObject.h,
            s = colorObject.s,
            l = colorObject.l;

        if (h !== undefined && g !== undefined && b !== undefined) {
          color.hsl = {
            h: h,
            s: s,
            l: l
          };
        }
      }
    }
  } else if (colorObject == "random") {
    color.rgb = {
      r: Math.floor(Math.random() * 255) + 1,
      g: Math.floor(Math.random() * 255) + 1,
      b: Math.floor(Math.random() * 255) + 1
    };
  } else if (typeof colorObject == "string") {
    color.rgb = exports.hexToRgb(colorObject);
  }

  return color;
};

/***/ }),

/***/ "./src/lib/Vendors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __webpack_require__("./src/lib/index.ts");

var IParams_1 = __webpack_require__("./src/lib/IParams.ts");

var Vendors =
/*#__PURE__*/
function () {
  function Vendors(imageManager, params, library) {
    _classCallCheck(this, Vendors);

    this.imageManager = imageManager;
    this.initialized = false;
    this.params = params;
    this.library = library;

    if (typeof performance !== "undefined") {
      this.lastDraw = performance.now();
    }

    this.draw = this.draw.bind(this);
  }

  _createClass(Vendors, [{
    key: "densityAutoParticles",
    value: function densityAutoParticles() {
      var _this$library = this.library,
          canvas = _this$library.canvas,
          modes = _this$library.modes;
      var particles = this.params.particles;
      var density = particles.number.density;
      var densityValueArea = density.value_area;

      if (density.enable) {
        var area = canvas.element.width * canvas.element.height / 1000;

        if (this.library.retina) {
          area = area / canvas.pxratio * 2;
        }

        var nb_particles = area * particles.number.value / densityValueArea;
        var missing_particles = particles.array.length - nb_particles;

        if (missing_particles < 0) {
          modes.pushParticles(Math.abs(missing_particles));
        } else {
          modes.removeParticles(missing_particles);
        }
      }
    }
  }, {
    key: "checkOverlap",
    value: function checkOverlap(p1, position) {
      var _this = this;

      var _this$library2 = this.library,
          canvas = _this$library2.canvas,
          vendors = _this$library2.vendors;
      if (!canvas.width || !canvas.height) return;
      var particles = this.params.particles;
      particles.array.forEach(function (particle) {
        var p2 = particle;
        var dx = p1.x - p2.x;
        var dy = p1.y - p2.y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= p1.radius + p2.radius) {
          if (!_this.library.params.polygon.enable) {
            p1.x = position ? position.x : Math.random() * canvas.width;
            p1.y = position ? position.y : Math.random() * canvas.height;
            vendors.checkOverlap(p1);
          } else {
            switch (_this.library.params.polygon.inline.arrangement) {
              case IParams_1.PolygonInlineArrangementType.RANDOM_LENGTH:
              case IParams_1.PolygonInlineArrangementType.RANDOM_POINT:
              default:
            }
          }
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      cancelAnimationFrame(this.library.drawAnimFrame);
      this.library.canvas.element.remove();
    }
  }, {
    key: "drawShape",
    value: function drawShape(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
      var sideCount = sideCountNumerator * sideCountDenominator;
      var decimalSides = sideCountNumerator / sideCountDenominator;
      var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
      var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
      c.save();
      c.beginPath();
      c.translate(startX, startY);
      c.moveTo(0, 0);

      for (var i = 0; i < sideCount; i++) {
        c.lineTo(sideLength, 0);
        c.translate(sideLength, 0);
        c.rotate(interiorAngle);
      }

      c.fill();
      c.restore();
    }
  }, {
    key: "exportImg",
    value: function exportImg() {
      var canvas = this.library.canvas;
      window.open(canvas.element.toDataURL("image/png"), "_blank");
    }
  }, {
    key: "draw",
    value: function draw() {
      var shouldDraw = true;
      var _this$library3 = this.library,
          manager = _this$library3.manager,
          vendors = _this$library3.vendors;
      var particles = this.params.particles;

      if (performance !== undefined) {
        var thisDraw = performance.now();

        if (thisDraw - this.lastDraw < 1000 / this.params.fps_limit) {
          shouldDraw = false;
        } else {
          this.lastDraw = performance.now();
        }
      }

      if (shouldDraw) {
        manager.particlesDraw();
      }

      if (!particles.move.enable) {
        cancelAnimationFrame(this.library.drawAnimFrame);
      } else {
        this.library.drawAnimFrame = requestAnimationFrame(vendors.draw);
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      if (this.initialized) return;
      this.initialized = true;
      var library = this.library;
      var manager = library.manager,
          vendors = library.vendors;
      var particles = this.params.particles;
      library.retinaInit();
      library.canvasInit();
      library.canvasSize();
      library.polygonMask.initialize(this.library.getParameter(function (p) {
        return p.polygon;
      })).then(function () {
        manager.particlesCreate();
        vendors.densityAutoParticles();

        _this2.library.setParameters({
          particles: {
            line_linked: {
              color_rgb_line: _1.hexToRgb(particles.line_linked.color)
            }
          }
        });

        _this2.draw();
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      var particles = this.params.particles;
      this.imageManager.parseShape(particles.shape).then(function (shape) {
        _this3.init();
      });
    }
  }]);

  return Vendors;
}();

exports.default = Vendors;

/***/ }),

/***/ "./src/lib/getDefaultParams.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var IParams_1 = __webpack_require__("./src/lib/IParams.ts");

var Utils_1 = __webpack_require__("./src/lib/Utils.ts");

var defaultParams = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: false,
        value_area: 1200
      }
    },
    color: {
      value: "#FFF"
    },
    shape: {
      type: IParams_1.ShapeType.CIRCLE,
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "",
        width: 100,
        height: 100
      },
      images: []
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 1,
      random: false,
      random_min: 0,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#FFF",
      opacity: 0.6,
      width: 1,
      shadow: {
        enable: false,
        blur: 5,
        color: "lime"
      }
    },
    move: {
      enable: true,
      speed: 3,
      direction: IParams_1.MoveDirection.NONE,
      random: false,
      straight: false,
      out_mode: IParams_1.MoveOutMode.BOUNCE,
      bounce: true,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000
      }
    },
    array: []
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: IParams_1.InteractivityMode.GRAB
      },
      onclick: {
        enable: false,
        mode: IParams_1.InteractivityMode.REPULSE
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.35
        }
      },
      bubble: {
        distance: 200,
        size: 80,
        duration: 0.4
      },
      repulse: {
        distance: 100,
        duration: 5
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  fps_limit: 999,
  polygon: {
    enable: false,
    scale: 1,
    type: IParams_1.PolygonType.INLINE,
    inline: {
      arrangement: IParams_1.PolygonInlineArrangementType.ONE_PER_POINT
    },
    draw: {
      enable: false,
      stroke: {
        width: 0.5,
        color: "rgba(255, 255, 255, .1)"
      }
    },
    move: {
      radius: 10,
      type: IParams_1.PolygonMoveType.PATH
    },
    url: ""
  }
};

exports.getDefaultParams = function () {
  return Utils_1.deepAssign({}, defaultParams);
};

/***/ }),

/***/ "./src/lib/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Interactivity_1 = __webpack_require__("./src/lib/Interactivity.ts");

exports.Interactivity = Interactivity_1.default;

var Modes_1 = __webpack_require__("./src/lib/Modes.ts");

exports.Modes = Modes_1.default;

var Particle_1 = __webpack_require__("./src/lib/Particle.ts");

exports.Particle = Particle_1.default;

var ParticleManager_1 = __webpack_require__("./src/lib/ParticleManager.ts");

exports.ParticleManager = ParticleManager_1.default;

var ParticlesLibrary_1 = __webpack_require__("./src/lib/ParticlesLibrary.ts");

exports.ParticlesLibrary = ParticlesLibrary_1.default;

var Vendors_1 = __webpack_require__("./src/lib/Vendors.ts");

exports.Vendors = Vendors_1.default;

__export(__webpack_require__("./src/lib/getDefaultParams.ts"));

__export(__webpack_require__("./src/lib/IParams.ts"));

__export(__webpack_require__("./src/lib/PolygonMask.ts"));

__export(__webpack_require__("./src/lib/Utils.ts"));

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=particles.js.map