const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path');

console.log(path.resolve(__dirname, './src/dev.ts'))
module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../src/dev.ts'),
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        historyApiFallback: true,
        port: 3000,
        hot: true
    },
})

