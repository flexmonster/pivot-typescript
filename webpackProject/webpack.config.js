const path = require("path");

module.exports = {
    entry: './main.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: 'url-loader',
                options: {
                  name: 'flexmonster-icons.[ext]',
                  publicPath: ''
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 3002
    }
 }