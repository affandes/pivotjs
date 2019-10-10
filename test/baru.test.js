import PivotJs from '../src/baru'
import baruInput from './fixtures/baru.input'

test('Load input data', () => {
    expect(baruInput).toEqual([
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
    let obj = new PivotJs(baruInput);
    expect(obj.getRaw()).toEqual(baruInput);
});

test('Validate input', () => {
    let obj = new PivotJs(baruInput);
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
    });
});