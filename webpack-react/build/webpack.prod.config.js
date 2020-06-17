// 清理上次编译的内容 **
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')

module.exports = merge(webpackBaseConfig, {
    plugins: [
    ],
    mode: 'production'
})