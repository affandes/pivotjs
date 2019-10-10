import PivotJs from '../src/baru'
import baruInput from './fixtures/baru.input'

test('Pivoting', () => {
    let obj = new PivotJs(baruInput);
    let result = obj.groupBy({name: 'merk', label: 'Merk'})
        .columnBy({name: 'tyre', label: 'Tyre'})
        .valueBy({name: 'price', type: 'average', label: 'Bla'})
        .valueBy({name: 'prod', type: 'count', label: 'Bla'})
        .toPivot();
    expect(result).toEqual({});
});