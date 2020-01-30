let path = require('path')
let webpack = require('webpack')
let htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?/, 
                exclude: /node-modules/, 
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                exclude: /node-modules/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new htmlWebpackPlugin({
            title: 'ts',
            filename: 'index.html',
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            inject: 'body',
            template: path.resolve(__dirname, './src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8000,
        host: 'localhost',
        open: true,
        overlay: {
            errors: true
        },
        hot: true
    },
    devtool: 'cheap-module-eval-source-map'
}