const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                exclude: /node_module/,
                use: [

                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' }
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[local]--[hash:base64:5]"
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp4)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        limit: 10000
                    }
                }
            },
            {
                test: /\.(gltf|glb)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, '../static/', 'index.html'),
            favicon: path.resolve(__dirname, '../static/favicon', 'favicon.ico')
        }),
    ]
}