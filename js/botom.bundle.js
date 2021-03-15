/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./intersumcaLDA/view/js/botom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./intersumcaLDA/view/js/botom.js":
/*!****************************************!*\
  !*** ./intersumcaLDA/view/js/botom.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navegation = document.querySelectorAll('.nav-link-header');\nvar button = document.querySelector('.navbar-toggler');\nvar menu = document.getElementById('my-nav');\nvar bottom = document.getElementById('id');\n\nvar page = function page(a, b, c, d) {\n  navegation[a].classList.add('page');\n  navegation[b].classList.remove('page');\n  navegation[c].classList.remove('page');\n  navegation[d].classList.remove('page');\n};\n\nwindow.onscroll = function () {\n  var scrol = document.documentElement.scrollTop;\n\n  if (scrol >= 0 && scrol <= 300) {\n    page(0, 1, 2, 3);\n  } else if (scrol >= 400 && scrol <= 1000) {\n    page(1, 0, 2, 3);\n  } else if (scrol >= 1000 && scrol <= 3600) {\n    page(2, 0, 1, 3);\n  } else if (scrol >= 3800) {\n    page(3, 1, 2, 0);\n  }\n\n  console.log(document.documentElement.scrollTop); // if (document.documentElement.scrollTop > 100) {\n  //     bottom.classList.add('mostrar')\n  // }else{\n  //     bottom.classList.remove('mostrar') \n  // }\n};\n\nbottom.addEventListener('click', function () {\n  window.scrollTo({\n    top: 0,\n    behavior: 'smooth'\n  });\n});\nbutton.addEventListener('click', function (e) {\n  menu.classList.toggle('menu-show');\n});\n\n//# sourceURL=webpack:///./intersumcaLDA/view/js/botom.js?");

/***/ })

/******/ });