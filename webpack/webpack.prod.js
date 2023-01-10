// const { merge } = require('webpack-merge');
// const common = require('./webpack.config.js');
// const path = require('path')

// module.exports = merge(common, {
//     mode: 'production',
//     entry: './src/index.ts',
//     performance: {
//         hints: false
//     },
// });

const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');
module.exports = merge(common, {
    entry: './src/index.ts',
    mode: 'production',
    performance: {
        hints: false
    },
    output: {
        filename: 'index.js',
        library: "GymInHome",
        libraryTarget: "umd",
        // path: path.resolve(__dirname, './dist'),
        umdNamedDefine: true,
    }
});
