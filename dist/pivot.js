(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pivotJs"] = factory();
	else
		root["pivotJs"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nvar PivotJs = function (table) {\r\n\r\n    /**\r\n     * Base 2d array\r\n     * ex: [\r\n     * {col1: a, col2: k, col3: n}, // row1\r\n     * {col1: b, col2: l, col3: o}, // row2\r\n     * {col1: c, col2: m, col3: p}, // row3\r\n     * ]\r\n     */\r\n    let _raw = table;\r\n\r\n    /**\r\n     * Converted array\r\n     * ex: {\r\n     *     a: {\r\n     *         values: {k: 1, l:1, m: 1},\r\n     *         sub: {\r\n     *             ...\r\n     *         }\r\n     *\r\n     *     }\r\n     * }\r\n     *\r\n     */\r\n    let _converted = {};\r\n\r\n    /**\r\n     * Row Filters\r\n     * ex: [\r\n     * {name: col1, label: Label1},\r\n     * {name: col2, label: Label2}\r\n     * ]\r\n     *\r\n     */\r\n    let _rowFilters = [];\r\n\r\n    /**\r\n     * Column Filters\r\n     * ex: [\r\n     * {name: col1, label: Label1},\r\n     * ]\r\n     */\r\n    let _columnFilters = [];\r\n\r\n    /**\r\n     * Value Filters\r\n     * ex: [\r\n     * {name: col3, type: sum, label: Label1}\r\n     * ]\r\n     */\r\n    let _valueFilters = [];\r\n\r\n    let _labels = [];\r\n    let _summary = {};\r\n\r\n    function raw() {\r\n        return _raw;\r\n    }\r\n\r\n    function rowFilters() {\r\n        return _rowFilters;\r\n    }\r\n\r\n    function columnFilters() {\r\n        return _columnFilters;\r\n    }\r\n\r\n    function valueFilters() {\r\n        return _valueFilters;\r\n    }\r\n\r\n    function labels() {\r\n        return _labels;\r\n    }\r\n\r\n    function summary() {\r\n        return _summary;\r\n    }\r\n\r\n    function pivoting(result, index, level) {\r\n        let filter = rowFilters()[level];\r\n        let key = raw()[index][filter.name];\r\n        // Filling values\r\n        if( result[key] === undefined ) {\r\n            result[key] = {\r\n                values: null\r\n            }\r\n        }\r\n        result[key].values = fetchValues(result[key].values, index);\r\n        // Filling sub\r\n        if( level < rowFilters().length-1 ) {\r\n            result[key].sub = pivoting(result[key].sub, index, level+1)\r\n        }\r\n        // Return\r\n        return result;\r\n    }\r\n\r\n    function fetchValues(values, index) {\r\n        let col = columnFilters();\r\n        let val = valueFilters();\r\n        let row = raw()[index];\r\n        if( values === null ) {\r\n            values = {};\r\n        }\r\n        val.forEach(v => {\r\n            if( values[v.name] === undefined ) {\r\n                values[v.name] = agregate(null, row[v.name], v.type)\r\n            } else {\r\n                values[v.name] = agregate(values[v.name], row[v.name], v.type)\r\n            }\r\n\r\n            if( col.length > 0 ) {\r\n                let filter = col[0];\r\n                let keys = summary()[filter.name].values;\r\n                keys.forEach(vx => {\r\n                    let key = v.name + \":\" + vx;\r\n                    if( values[key] === undefined ) {\r\n                        values[key] = null\r\n                    }\r\n                });\r\n                let key = v.name + \":\" + row[filter.name];\r\n                values[key] = agregate(values[key], row[filter.name], v.type)\r\n            }\r\n        });\r\n\r\n        return values;\r\n    }\r\n\r\n    function agregate(value, _new, type) {\r\n        if( value === null ) {\r\n            value = {\r\n                val: 0,\r\n                sum: 0,\r\n                count: 0,\r\n                avg: 0,\r\n                min: _new,\r\n                max: _new\r\n            }\r\n        }\r\n        value.count++;\r\n        if( typeof _new === \"number\" ) {\r\n            value.sum += _new;\r\n            value.avg = value.sum/value.count;\r\n            value.min = (_new < value.min ? _new : value.min);\r\n            value.max = (_new > value.max ? _new : value.max);\r\n            switch (type) {\r\n                case 'sum':\r\n                    value.val = value.sum; break;\r\n                case 'count':\r\n                    value.val = value.count; break;\r\n                case 'average':\r\n                    value.val = value.avg; break;\r\n                case 'min':\r\n                    value.val = value.min; break;\r\n                case 'max':\r\n                    value.val = value.max; break;\r\n                default:\r\n                    value.val = value.count; break;\r\n            }\r\n        } else {\r\n            value.sum = null;\r\n            value.avg = null;\r\n            value.min = null;\r\n            value.max = null;\r\n        }\r\n\r\n        return value;\r\n    }\r\n\r\n    this.getRaw = function () {\r\n        return raw();\r\n    };\r\n\r\n    this.getLabels = function () {\r\n        return labels();\r\n    };\r\n\r\n    this.groupBy = function (key) {\r\n        rowFilters().push(key);\r\n        return this;\r\n    };\r\n\r\n    this.columnBy = function (key) {\r\n        columnFilters().push(key);\r\n        return this;\r\n    };\r\n\r\n    this.valueBy = function (key) {\r\n        valueFilters().push(key);\r\n        return this;\r\n    };\r\n\r\n    this.getSummary = function () {\r\n        return summary();\r\n    };\r\n\r\n    this.toPivot = function () {\r\n        if( !this.validate() ) {\r\n            return {};\r\n        } else if( !this.validateFilters() ) {\r\n            return {};\r\n        } else {\r\n\r\n            let table = raw();\r\n            let level = 0;\r\n            let result = {};\r\n            for(let i = 0; i < table.length; i++) {\r\n                result = pivoting(result, i, level);\r\n            }\r\n            return result;\r\n        }\r\n    };\r\n\r\n    this.validateFilters = function () {\r\n        let _row = rowFilters();\r\n        let _col = columnFilters();\r\n        let _val = valueFilters();\r\n        // TODO: lengkapi lagi\r\n        if( _row.length < 1 ) {\r\n            console.error('Choose row filter at least 1');\r\n            return false;\r\n        } else if( _val.length < 1 ) {\r\n            console.error('Choose value filter at least 1');\r\n            return false;\r\n        } else if( _col.length > 1 ) {\r\n            console.error('Column cannot more than 1');\r\n            return false;\r\n        } else {\r\n            return true;\r\n        }\r\n    };\r\n\r\n    this.validate = function () {\r\n        let table = raw();\r\n        if( typeof table !== 'object' ) {\r\n            console.error('Base table is not an object!');\r\n            return false;\r\n        } else if( !Array.isArray(table) ) {\r\n            console.error('Base table is not an array!');\r\n            return false;\r\n        } else if( table.length === 0 ) {\r\n            console.error('Base table is empty array!');\r\n            return false;\r\n        } else {\r\n            let firstRow = table[0];\r\n            if( typeof firstRow !== 'object' ) {\r\n                console.error('First row is not an object!');\r\n                return false;\r\n            } else if( Array.isArray(firstRow) ) {\r\n                console.error('First row is an array!');\r\n                return false;\r\n            } else {\r\n                let columns = Object.keys(firstRow);\r\n                let summary = {};\r\n                let strColumns = JSON.stringify(columns);\r\n                let valid = true;\r\n                for(let i = 0; i < table.length; i++) {\r\n                    let cols = Object.keys(table[i]);\r\n                    let strCols = JSON.stringify(cols);\r\n                    if( strColumns !== strCols ) {\r\n                        valid = false;\r\n                        console.error('Inconsistent column name!');\r\n                        break;\r\n                    }\r\n                    cols.forEach((v) => {\r\n                        if( summary[v] === undefined ) {\r\n                            summary[v] = {\r\n                                type: \"number\",\r\n                                values: []\r\n                            };\r\n                        }\r\n                        let _v = table[i][v];\r\n                        if( summary[v].values.indexOf(_v) < 0 ) {\r\n                            summary[v].values.push(_v);\r\n                        }\r\n                        if( typeof _v !== \"number\" ) {\r\n                            summary[v].type = \"mixed\";\r\n                        }\r\n                    });\r\n                }\r\n                _summary = summary;\r\n                return valid;\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PivotJs);\n\n//# sourceURL=webpack://pivotJs/./src/index.js?");

/***/ })

/******/ });
});