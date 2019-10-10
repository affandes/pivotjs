import pivotJs from '../src/index'
import {simpleInput, moreColumnsInput} from './fixtures/input.data'
import {simpleOutput, moreColumnsOutput, moreColumnOuputSingle, moreColumnOuputTriple} from "./fixtures/output.data";

test('Load input data', () => {
    expect(simpleInput).toEqual([
        {id: 1, name: "Ani", nilai: 92},
        {id: 2, name: "Budi", nilai: 88},
        {id: 3, name: "Cici", nilai: 85},
        {id: 4, name: "Dodi", nilai: 91},
        {id: 5, name: "Eka", nilai: 79},
    ]);
    expect(moreColumnsInput).toEqual([
        {no: 1, kategori: 'A', subkategori: 'small', n1: 78, n2: 85, n3: 89},
        {no: 2, kategori: 'A', subkategori: 'medium', n1: 63, n2: 77, n3: 72},
        {no: 3, kategori: 'B', subkategori: 'small', n1: 68, n2: 82, n3: 90},
        {no: 3, kategori: 'B', subkategori: 'medium', n1: 63, n2: 67, n3: 77},
        {no: 4, kategori: 'A', subkategori: 'small', n1: 78, n2: 85, n3: 89},
        {no: 5, kategori: 'A', subkategori: 'medium', n1: 63, n2: 77, n3: 72},
        {no: 6, kategori: 'B', subkategori: 'small', n1: 68, n2: 82, n3: 90},
        {no: 7, kategori: 'B', subkategori: 'medium', n1: 63, n2: 67, n3: 77},
    ]);
});

test('New object', () => {
    let x = new pivotJs(simpleInput);
    expect(x.getRaw()).toEqual(simpleInput);
});

test('Convert name', () => {
    let x = new pivotJs(simpleInput);
    let output  = simpleOutput;
    expect(x.groupBy('name').convert()).toEqual(output);
    expect(x.getLabels()).toEqual(['name'])
});

test('Convert moreColumns Single', () => {
    let x = new pivotJs(moreColumnsInput);
    let outputSingle = moreColumnOuputSingle;
    expect(x.groupBy('kategori').convert()).toEqual(outputSingle)
    expect(x.getLabels()).toEqual(['kategori'])
});

test('Convert moreColumns Double', () => {
    let x = new pivotJs(moreColumnsInput);
    let output = moreColumnsOutput;
    expect(x.groupBy('kategori').groupBy('subkategori').convert()).toEqual(output);
    expect(x.getLabels()).toEqual(['kategori','subkategori'])
});

test('Convert moreColumns Triple', () => {
    let x = new pivotJs(moreColumnsInput);
    let output = moreColumnOuputTriple;
    expect(x.groupBy('kategori').groupBy('subkategori').groupBy('no').convert()).toEqual(output);
    expect(x.getLabels()).toEqual(['kategori','subkategori','no'])
});
