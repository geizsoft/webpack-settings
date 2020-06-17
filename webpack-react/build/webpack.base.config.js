
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('../config')
const {join} = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
function resolve(dir) {
    return join(__dirname, "..", dir);
  }
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name].[hash:10].js',
        path: resolve('/dist'),
        publicPath: process.env.NODE_ENV === "production" ?
        config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': resolve('/src')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "eslint-loader",
                enforce: "pre",
                include: [resolve("src"), resolve("test")],
                options: {
                  formatter: require("eslint-friendly-formatter")
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 2
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-react',
                                '@babel/preset-env'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/build.css'
        }),
        new CleanWebpackPlugin()
    ]
}