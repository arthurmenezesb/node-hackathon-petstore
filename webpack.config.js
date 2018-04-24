const webpack = require('webpack');
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
    build: path.resolve(__dirname, './client/public')
}

module.exports = function () {
    var config = {};

     config.devServer = {
        contentBase: PATHS.build,
        hot: true
     };

    config.entry = {
        app: './client/index.js'
    };

    config.output = {
        path: PATHS.build,
        publicPath: '/',
        filename: '[name].[hash].js'
    };

    config.devtool = 'cheap-eval-source-map';

    config.module = {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: {
                                safe: true
                            }
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browsers: ["last 2 versions"]
                            },
                            plugins: () => [
                                require('autoprefixer')
                            ]
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {}
                    }
                ]
            },

            {
                test: /\.(png|jpg|gif|svg|)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }

        ]
    };

    config.plugins = [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'client', 'index.html'),
        }),

		new CopyWebpackPlugin([{
            from: './client/app/',
            to: './',
            ignore: [ '*.js', '*.scss' ] 
        }]),

        new webpack.NamedModulesPlugin(), //This plugin will cause the relative path of the module to be displayed when HMR is enabled. Suggested for use in development.

        new webpack.HotModuleReplacementPlugin(),

        new CleanWebpackPlugin([PATHS.build]),
    ]

    return config;
}
