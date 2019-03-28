const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: './src/index.js',
    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, "dist")
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader?interpolate"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                    // Please note we are not running postcss here
                ]
            }
            ,
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // On development we want to see where the file is coming from, hence we preserve the [path]
                            name: '[path][name].[ext]?hash=[hash:20]',
                            limit: 8192
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'gites.html',
            template: './gites.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'sejour.html',
            template: './sejour.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'tarifs.html',
            template: './tarifs.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './contact.html',
            inject: true
        }),
        new CopyPlugin([
            {context: './node_modules/hello-week/', from: 'dist/langs/*'},
            {from: 'robots.txt'},
        ])
    ]
};
