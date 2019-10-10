'use strict';
var PivotJs = function (table) {

    /**
     * Base 2d array
     * ex: [
     * {col1: a, col2: k, col3: n}, // row1
     * {col1: b, col2: l, col3: o}, // row2
     * {col1: c, col2: m, col3: p}, // row3
     * ]
     */
    let _raw = table;

    /**
     * Converted array
     * ex: {
     *     a: {
     *         values: {k: 1, l:1, m: 1},
     *         sub: {
     *             ...
     *         }
     *
     *     }
     * }
     *
     */
    let _converted = {};

    /**
     * Row Filters
     * ex: [
     * {name: col1, label: Label1},
     * {name: col2, label: Label2}
     * ]
     *
     */
    let _rowFilters = [];

    /**
     * Column Filters
     * ex: [
     * {name: col1, label: Label1},
     * ]
     */
    let _columnFilters = [];

    /**
     * Value Filters
     * ex: [
     * {name: col3, type: sum, label: Label1}
     * ]
     */
    let _valueFilters = [];

    let _labels = [];
    let _summary = {};

    function raw() {
        return _raw;
    }

    function rowFilters() {
        return _rowFilters;
    }

    function columnFilters() {
        return _columnFilters;
    }

    function valueFilters() {
        return _valueFilters;
    }

    function labels() {
        return _labels;
    }

    function summary() {
        return _summary;
    }

    function pivoting(result, index, level) {
        let filter = rowFilters()[level];
        let key = raw()[index][filter.name];
        // Filling values
        if( result[key] === undefined ) {
            result[key] = {
                values: null
            }
        }
        result[key].values = fetchValues(result[key].values, index);
        // Filling sub
        if( level < rowFilters().length-1 ) {
            result[key].sub = pivoting(result[key].sub, index, level+1)
        }
        // Return
        return result;
    }

    function fetchValues(values, index) {
        let col = columnFilters();
        let val = valueFilters();
        let row = raw()[index];
        if( values === null ) {
            values = {};
        }
        val.forEach(v => {
            if( values[v.name] === undefined ) {
                values[v.name] = agregate(null, row[v.name], v.type)
            } else {
                values[v.name] = agregate(values[v.name], row[v.name], v.type)
            }

            if( col.length > 0 ) {
                let filter = col[0];
                let keys = summary()[filter.name].values;
                keys.forEach(vx => {
                    let key = v.name + ":" + vx;
                    if( values[key] === undefined ) {
                        values[key] = null
                    }
                });
                let key = v.name + ":" + row[filter.name];
                values[key] = agregate(values[key], row[filter.name], v.type)
            }
        });

        return values;
    }

    function agregate(value, _new, type) {
        if( value === null ) {
            value = {
                val: 0,
                sum: 0,
                count: 0,
                avg: 0,
                min: _new,
                max: _new
            }
        }
        value.count++;
        if( typeof _new === "number" ) {
            value.sum += _new;
            value.avg = value.sum/value.count;
            value.min = (_new < value.min ? _new : value.min);
            value.max = (_new > value.max ? _new : value.max);
            switch (type) {
                case 'sum':
                    value.val = value.sum; break;
                case 'count':
                    value.val = value.count; break;
                case 'average':
                    value.val = value.avg; break;
                case 'min':
                    value.val = value.min; break;
                case 'max':
                    value.val = value.max; break;
                default:
                    value.val = value.count; break;
            }
        } else {
            value.sum = null;
            value.avg = null;
            value.min = null;
            value.max = null;
        }

        return value;
    }

    this.getRaw = function () {
        return raw();
    };

    this.getLabels = function () {
        return labels();
    };

    this.groupBy = function (key) {
        rowFilters().push(key);
        return this;
    };

    this.columnBy = function (key) {
        columnFilters().push(key);
        return this;
    };

    this.valueBy = function (key) {
        valueFilters().push(key);
        return this;
    };

    this.getSummary = function () {
        return summary();
    };

    this.toPivot = function () {
        if( !this.validate() ) {
            return {};
        } else if( !this.validateFilters() ) {
            return {};
        } else {

            let table = raw();
            let level = 0;
            let result = {};
            for(let i = 0; i < table.length; i++) {
                result = pivoting(result, i, level);
            }
            return result;
        }
    };

    this.validateFilters = function () {
        let _row = rowFilters();
        let _col = columnFilters();
        let _val = valueFilters();
        // TODO: lengkapi lagi
        if( _row.length < 1 ) {
            console.error('Choose row filter at least 1');
            return false;
        } else if( _val.length < 1 ) {
            console.error('Choose value filter at least 1');
            return false;
        } else if( _col.length > 1 ) {
            console.error('Column cannot more than 1');
            return false;
        } else {
            return true;
        }
    };

    this.validate = function () {
        let table = raw();
        if( typeof table !== 'object' ) {
            console.error('Base table is not an object!');
            return false;
        } else if( !Array.isArray(table) ) {
            console.error('Base table is not an array!');
            return false;
        } else if( table.length === 0 ) {
            console.error('Base table is empty array!');
            return false;
        } else {
            let firstRow = table[0];
            if( typeof firstRow !== 'object' ) {
                console.error('First row is not an object!');
                return false;
            } else if( Array.isArray(firstRow) ) {
                console.error('First row is an array!');
                return false;
            } else {
                let columns = Object.keys(firstRow);
                let summary = {};
                let strColumns = JSON.stringify(columns);
                let valid = true;
                for(let i = 0; i < table.length; i++) {
                    let cols = Object.keys(table[i]);
                    let strCols = JSON.stringify(cols);
                    if( strColumns !== strCols ) {
                        valid = false;
                        console.error('Inconsistent column name!');
                        break;
                    }
                    cols.forEach((v) => {
                        if( summary[v] === undefined ) {
                            summary[v] = {
                                type: "number",
                                values: []
                            };
                        }
                        let _v = table[i][v];
                        if( summary[v].values.indexOf(_v) < 0 ) {
                            summary[v].values.push(_v);
                        }
                        if( typeof _v !== "number" ) {
                            summary[v].type = "mixed";
                        }
                    });
                }
                _summary = summary;
                return valid;
            }
        }
    }
};

export default PivotJs