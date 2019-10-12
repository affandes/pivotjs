const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'pivot.js',
        library: 'pivotJs',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
};