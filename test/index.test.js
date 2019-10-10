import PivotJs from '../src/index'
import demo01 from './fixtures/input.demo01'

test('Load data demo01', () => {
    expect(demo01).toEqual([
        {no: 1, merk: 'Audi', type: 'V8', tyre: 17, prod: 2000, price: 1453},
        {no: 2, merk: 'Toyota', type: 'V7', tyre: 18, prod: 2001, price: 1720},
        {no: 3, merk: 'Honda', type: 'V8', tyre: 17, prod: 2002, price: 1260},
        {no: 4, merk: 'Suzuki', type: 'V7', tyre: 18, prod: 2003, price: 1720},
        {no: 5, merk: 'Suzuki', type: 'V7', tyre: 17, prod: 2000, price: 1452},
        {no: 6, merk: 'Toyota', type: 'V8', tyre: 18, prod: 2001, price: 1829},
        {no: 7, merk: 'Honda', type: 'V7', tyre: 17, prod: 2000, price: 1212},
        {no: 8, merk: 'Audi', type: 'V8', tyre: 18, prod: 2003, price: 1232},
        {no: 9, merk: 'Honda', type: 'V8', tyre: 17, prod: 2001, price: 1481},
        {no: 10, merk: 'Suzuki', type: 'V7', tyre: 18, prod: 2002, price: 1129},
        {no: 11, merk: 'Audi', type: 'V8', tyre: 18, prod: 2003, price: 1910},
        {no: 12, merk: 'Toyota', type: 'V7', tyre: 18, prod: 2000, price: 1612},
        {no: 13, merk: 'Toyota', type: 'V8', tyre: 17, prod: 2002, price: 1312},
        {no: 14, merk: 'Honda', type: 'V8', tyre: 17, prod: 2000, price: 1299},
        {no: 15, merk: 'Suzuki', type: 'V7', tyre: 17, prod: 2001, price: 1471},
        {no: 16, merk: 'Suzuki', type: 'V8', tyre: 18, prod: 2003, price: 1200},
        {no: 17, merk: 'Audi', type: 'V7', tyre: 18, prod: 2002, price: 1183},
        {no: 18, merk: 'Suzuki', type: 'V7', tyre: 17, prod: 2001, price: 1023},
        {no: 19, merk: 'Honda', type: 'V8', tyre: 17, prod: 2003, price: 1188},
        {no: 20, merk: 'Suzuki', type: 'V8', tyre: 17, prod: 2002, price: 1411},
    ]);
});

test('Create new PivotJs object', () => {
    let obj = new PivotJs(demo01);
    expect(obj.getRaw()).toEqual(demo01);
});

test('Validate input', () => {
    let obj = new PivotJs(demo01);
    expect(obj.validate()).toEqual(true);
    expect(obj.getSummary()).toEqual({
        "merk": {
            "type": "mixed",
            "values": [
                "Audi",
                "Toyota",
                "Honda",
                "Suzuki"
            ]
        },
        "no": {
            "type": "number",
            "values": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20
            ]
        },
        "price": {
            "type": "number",
            "values": [
                1453,
                1720,
                1260,
                1452,
                1829,
                1212,
                1232,
                1481,
                1129,
                1910,
                1612,
                1312,
                1299,
                1471,
                1200,
                1183,
                1023,
                1188,
                1411
            ]
        },
        "prod": {
            "type": "number",
            "values": [
                2000,
                2001,
                2002,
                2003
            ]
        },
        "type": {
            "type": "mixed",
            "values": [
                "V8",
                "V7"
            ]
        },
        "tyre": {
            "type": "number",
            "values": [
                17,
                18
            ]
        }
    })
});


test('Pivoting', () => {
    let obj = new PivotJs(demo01);
    let result = obj.groupBy({name: 'merk', label: 'Merk'})
        .columnBy({name: 'tyre', label: 'Tyre'})
        .valueBy({name: 'price', type: 'average', label: 'Bla'})
        .valueBy({name: 'prod', type: 'count', label: 'Bla'})
        .toPivot();
    expect(result).toEqual({
        "Audi": {
            "values": {
                "price": {
                    "avg": 1444.5,
                    "count": 4,
                    "max": 1910,
                    "min": 1183,
                    "sum": 5778,
                    "val": 1444.5
                },
                "price:17": {
                    "avg": 17,
                    "count": 1,
                    "max": 17,
                    "min": 17,
                    "sum": 17,
                    "val": 17
                },
                "price:18": {
                    "avg": 18,
                    "count": 3,
                    "max": 18,
                    "min": 18,
                    "sum": 54,
                    "val": 18
                },
                "prod": {
                    "avg": 2002,
                    "count": 4,
                    "max": 2003,
                    "min": 2000,
                    "sum": 8008,
                    "val": 4
                },
                "prod:17": {
                    "avg": 17,
                    "count": 1,
                    "max": 17,
                    "min": 17,
                    "sum": 17,
                    "val": 1
                },
                "prod:18": {
                    "avg": 18,
                    "count": 3,
                    "max": 18,
                    "min": 18,
                    "sum": 54,
                    "val": 3
                }
            }
        },
        "Honda": {
            "values": {
                "price": {
                    "avg": 1288,
                    "count": 5,
                    "max": 1481,
                    "min": 1188,
                    "sum": 6440,
                    "val": 1288
                },
                "price:17": {
                    "avg": 17,
                    "count": 5,
                    "max": 17,
                    "min": 17,
                    "sum": 85,
                    "val": 17
                },
                "price:18": null,
                "prod": {
                    "avg": 2001.2,
                    "count": 5,
                    "max": 2003,
                    "min": 2000,
                    "sum": 10006,
                    "val": 5
                },
                "prod:17": {
                    "avg": 17,
                    "count": 5,
                    "max": 17,
                    "min": 17,
                    "sum": 85,
                    "val": 5
                },
                "prod:18": null
            }
        },
        "Suzuki": {
            "values": {
                "price": {
                    "avg": 1343.7142857142858,
                    "count": 7,
                    "max": 1720,
                    "min": 1023,
                    "sum": 9406,
                    "val": 1343.7142857142858
                },
                "price:17": {
                    "avg": 17,
                    "count": 4,
                    "max": 17,
                    "min": 17,
                    "sum": 68,
                    "val": 17
                },
                "price:18": {
                    "avg": 18,
                    "count": 3,
                    "max": 18,
                    "min": 18,
                    "sum": 54,
                    "val": 18
                },
                "prod": {
                    "avg": 2001.7142857142858,
                    "count": 7,
                    "max": 2003,
                    "min": 2000,
                    "sum": 14012,
                    "val": 7
                },
                "prod:17": {
                    "avg": 17,
                    "count": 4,
                    "max": 17,
                    "min": 17,
                    "sum": 68,
                    "val": 4
                },
                "prod:18": {
                    "avg": 18,
                    "count": 3,
                    "max": 18,
                    "min": 18,
                    "sum": 54,
                    "val": 3
                }
            }
        },
        "Toyota": {
            "values": {
                "price": {
                    "avg": 1618.25,
                    "count": 4,
                    "max": 1829,
                    "min": 1312,
                    "sum": 6473,
                    "val": 1618.25
                },
                "price:17": {
                    "avg": 17,
                    "count": 1,
                    "max": 17,
                    "min": 17,
                    "sum": 17,
                    "val": 17
                },
                "price:18": {
                    "avg": 18,
                    "count": 3,
                    "max": 18,
                    "min": 18,
                    "sum": 54,
                    "val": 18
                },
                "prod": {
                    "avg": 2001,
                    "count": 4,
                    "max": 2002,
                    "min": 2000,
                    "sum": 8004,
                    "val": 4
                },
                "prod:17": {
                    "avg": 17,
                    "count": 1,
                    "max": 17,
                    "min": 17,
                    "sum": 17,
                    "val": 1
                },
                "prod:18": {
                    "avg": 18,
                    "count": 3,
                    "max": 18,
                    "min": 18,
                    "sum": 54,
                    "val": 3
                }
            }
        }
    });
});