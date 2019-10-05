import pivotJs from '../src/index'
import input from './fixtures/input.data'

test('Method coba', () => {
    expect(pivotJs.coba()).toContain('hello')
});

test('Load input data', () => {
    expect(input).toEqual([
        {id: 1, name: "Ani", nilai: 92},
        {id: 2, name: "Budi", nilai: 88},
        {id: 3, name: "Cici", nilai: 85},
        {id: 4, name: "Dodi", nilai: 91},
        {id: 5, name: "Eka", nilai: 79},
    ])
});
