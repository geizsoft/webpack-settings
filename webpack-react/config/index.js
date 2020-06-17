
const {resolve} = require('path')
module.exports = {
    build: {
        env: require('./prod.env'),
        index: resolve(__dirname, '../dis/index.html'),
        assetsRoot: resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8095,
        autoOpenBrowser: false,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {

        },
        cssSourceMap: false
    }
}