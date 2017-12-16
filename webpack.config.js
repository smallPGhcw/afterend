const path = require("path");
const htmlWp = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'test.js'
    },
    plugins: [
        new htmlWp({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ]
            },
            {
                test: /\.(git|png|jpg|jpeg|svg|wtf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: '[name]_[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    devServer: {
        contentBase: 'dist',
        open: true,
        port: 4040
    }
}